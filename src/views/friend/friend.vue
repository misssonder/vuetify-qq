<template>
  <v-container fluid>
    <v-card flat>
      <v-row no-gutters>
        <v-col v-for="item in actionItems" :key="item.text" cols="4" class="pa-3">
          <v-row @click="handleAction(item.text,item.placeholder)" justify="center" align="center" no-gutters>
            <v-icon size="35" :color="item.color">{{ item.icon }}</v-icon>
          </v-row>
          <v-row justify="center" align="center" no-gutters>
            <div class="text-body-2" >{{ item.text }}</div>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <v-tabs v-model="show" class="mt-4" grow>
      <v-tab>好友</v-tab>
      <v-tab>群聊</v-tab>
    </v-tabs>
    <v-tabs-items v-model="show">
      <v-tab-item>
        <v-list>
          <div v-for="(item, index) in friendList"
               :key="item.title">
            <v-divider></v-divider>
            <v-list-item
                @click="$router.push(                    {
                        path: '/message/details',
                        query: {
                            userId: item.userId
                        }
                    })"
            >
              <v-list-item-icon>
                <v-avatar color="primary lighten-2">
                  <span class="white--text headline">{{ item.nickname.substr(0, 2).toUpperCase() }}</span>
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.nickname"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>message</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </div>
        </v-list>
      </v-tab-item>
      <v-tab-item>
        <v-list>
          <div v-for="(item, index) in groupList"
               :key="index">
            <v-divider></v-divider>
            <v-list-item
                @click=""
            >
              <v-list-item-icon>
                <v-avatar color="primary lighten-2">
                  <span class="white--text headline">{{ item.groupName.substr(0, 2).toUpperCase() }}</span>
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.groupName"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>message</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </div>
        </v-list>
      </v-tab-item>
    </v-tabs-items>

    <v-dialog v-model="isShowDialog" width="50%">
      <v-card>
        <v-card-title>
          {{ card.title }}
          <v-spacer></v-spacer>
          <v-btn @click="isShowDialog=false" icon>
            <v-icon>clear</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field :placeholder="card.placeholder" v-model="handleActionText"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="primary" depressed @click="add">确认</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {service} from "../../client/RpcClient";
import {dto} from "@/client/proto/proto";
import Long from "long";
import IGroupInfo = dto.IGroupInfo;
import IUserInfo = dto.IUserInfo;
import IPacket = dto.IPacket;
import PacketType = dto.Packet.PacketType;
import Packet = dto.Packet;
import Request = dto.Request;
import RequestType = dto.Request.RequestType;

@Component({
  name: "Friend"
})
export default class extends Vue {
  packet:IPacket={
    timestamp:Long.fromInt(new Date().getTime()),
    packetType:PacketType.TRequest,
  }
  webSocket:WebSocket=this.$store.state.webSocket
  handleActionText=''
  show = 0
  isShowDialog = false
  card = {
    title: "",
    placeholder: "",
  }
  actionItems = [
    {
      icon: 'person_add',
      color: 'primary',
      text: '添加好友',
      placeholder: "qq号"
    },
    {
      icon: 'group_add',
      color: '#0abc9c',
      text: '加入群聊',
      placeholder: "群号"
    },
    {
      icon: 'group_add',
      color: 'red lighten-2',
      text: '创建群聊',
      placeholder: "群聊名称"

    }
  ]
  groupList: Array<IGroupInfo> = []
  friendList: Array<IUserInfo> = []

  async getFriends() {
    let res = await service.getFriends({})
    this.friendList = res.userInfos
  }

  async getGroups() {
    let res = await service.getGroups({})
    this.groupList = res.groupInfos
    console.log(res)
  }

  async handleAction(title: string, placeholder: string) {
    this.isShowDialog = true
    this.card.title = title
    this.card.placeholder = placeholder

  }
  async add(){
    if (this.card.title==="创建群聊"){
      let res = await service.createGroup({
        groupName:this.handleActionText
      })
      await this.getGroups()
      this.isShowDialog=false
      console.log(res)
    }
  }

  mounted() {
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
