<template>
  <v-container fluid>
    <v-card flat>
      <v-row no-gutters>
        <v-col v-for="item in actionItems" :key="item.text" cols="4" class="pa-3">
          <v-row justify="center" align="center" no-gutters>
            <v-icon size="35" :color="item.color">{{ item.icon }}</v-icon>
          </v-row>
          <v-row justify="center" align="center" no-gutters>
            <div class="text-body-2">{{ item.text }}</div>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-tabs class="mt-4" grow>
      <v-tab>好友</v-tab>
      <v-tab>群聊</v-tab>
    </v-tabs>
    <v-list>
      <div v-for="(item, index) in friendList"
           :key="item.title">
        <v-divider></v-divider>
        <v-list-item
            @click=""
        >
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.nickname"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>message</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </div>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {service} from "../../client/RpcClient";
import {dto} from "@/client/proto/proto";
import IGroupInfo = dto.IGroupInfo;
import IUserInfo = dto.IUserInfo;

@Component({
  name: "Friend"
})
export default class extends Vue {
  actionItems = [
    {
      icon: 'person_add',
      color: 'primary',
      text: '添加好友'
    },
    {
      icon: 'group_add',
      color: '#0abc9c',
      text: '加入群聊'
    }
  ]
  groupList:Array<IGroupInfo>=[]
  friendList:Array<IUserInfo>=[]

  async getFriends() {
    let res = await service.getFriends({})
    this.friendList=res.userInfos
    console.log(res)
  }
  async getGroups(){
    let res = await service.getGroups({})
    this.groupList=res.groupInfos
  }
  mounted(){
    this.getFriends()
    this.getGroups()
  }
}
</script>

<style scoped>
.container {
  padding: 10px 0;
}

/deep/ .v-list {
  padding: 0;
}
</style>
