<template>
  <div id="layout">
    <v-app-bar dense height="74" class="elevation-0" app color="#fff">
      <v-avatar color="primary lighten-2" @click="isShowDrawer=!isShowDrawer">
        <span class="white--text headline">{{ userInfo.nickname.substr(0, 2).toUpperCase() }}</span>
      </v-avatar>
      <v-spacer/>
      <v-btn icon>
        <v-icon dark @click="$router.push('/login')">exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app temporary v-model="isShowDrawer">
      <v-list>
        <v-list-item>
          <v-avatar color="primary lighten-2" @click="isShowDrawer=!isShowDrawer">
            <span class="white--text headline">{{ userInfo.nickname.substr(0, 2).toUpperCase() }}</span>
          </v-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">{{ userInfo.nickname }}</v-list-item-title>
            <v-list-item-subtitle>{{ userInfo.userId }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <!--      <v-list-->
      <!--          nav-->
      <!--          dense-->
      <!--      >-->
      <!--        <v-list-item-group v-model="item" color="primary">-->
      <!--          <v-list-item-->
      <!--              v-for="(item, i) in items"-->
      <!--              :key="i"-->
      <!--          >-->
      <!--            <v-list-item-icon>-->
      <!--              <v-icon v-text="item.icon"></v-icon>-->
      <!--            </v-list-item-icon>-->

      <!--            <v-list-item-content>-->
      <!--              <v-list-item-title v-text="item.text"></v-list-item-title>-->
      <!--            </v-list-item-content>-->
      <!--          </v-list-item>-->
      <!--        </v-list-item-group>-->
      <!--      </v-list>-->
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <v-bottom-navigation
        grow
        app
        color="primary"
        v-model="bottomRouter">
      <v-btn v-for="item in routerItems" :key="item.value" :value="item.value" :to="'/'+item.value">
        <span>{{ item.value }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import jwt from "jsonwebtoken"
import cookie from "js-cookie";
import {dto} from "@/client/proto/proto";
import IUserInfo = dto.IUserInfo;
import wsUrl from "@/client/WebSocketClient";
import Long from "long";
import Packet = dto.Packet;

@Component({
  name: "friend"
})
export default class extends Vue {
  webSocket: WebSocket = this.$store.state.webSocket
  userInfo: IUserInfo = {
    userId: Long.fromInt(0),
    nickname: '',
    password: '',
  }
  isShowDrawer = false
  bottomRouter = "recent"
  routerItems = [
    {
      value: 'friend',
      icon: 'supervisor_account'
    },
    {
      value: 'discover',
      icon: 'near_me'
    },
  ]
  item = 0
  items = [
    {text: 'My Files', icon: 'mdi-folder'},
    {text: 'Shared with me', icon: 'mdi-account-multiple'},
    {text: 'Starred', icon: 'mdi-star'},
    {text: 'Recent', icon: 'mdi-history'},
    {text: 'Offline', icon: 'mdi-check-circle'},
    {text: 'Uploads', icon: 'mdi-upload'},
    {text: 'Backups', icon: 'mdi-cloud-upload'},
  ]

  async getUserInfo() {
    let token = cookie.get("token")
    if (token != null) {
      let userInfo: any = jwt.verify(token, "aaa")
      this.userInfo.nickname = userInfo.nickname
      this.userInfo.userId = userInfo.userId
      this.userInfo.password = userInfo.password
    }
  }



  created() {
    this.getUserInfo()

  }
}
</script>

<style scoped>

</style>
