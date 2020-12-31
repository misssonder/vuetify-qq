<template>
  <div class="message-details">
    <v-app-bar dense height="74" class="elevation-0" app color="#fff">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      {{ userInfo.nickname }}
      <v-spacer/>
      <v-btn icon @click="$router.push('/friend/details')">
        <v-icon dark>person</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid class="mt-2">
        <message-dialog v-for="(item,index) in messageList" :key="index" :packet="item" :right="myInfo.userId===item.msg.fromId"></message-dialog>
      </v-container>
    </v-main>
    <div class="message-input">
      <v-card flat width="100%" height="100%">
        <v-row justify="center" align="center" no-gutters>
          <v-col cols="10">
            <v-text-field label="请输入文字" clearable dense hide-details v-model="message" append-outer-icon="send"
                          @click:append-outer="send"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="10">
            <v-btn icon>
              <v-icon color="grey">image</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="grey">insert_drive_file</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import MessageDialog from "@/components/message-dialog.vue";
import {dto} from "@/client/proto/proto";
import {service} from "@/client/RpcClient";
import Long from "long";
import IUserInfo = dto.IUserInfo;
import IPacket = dto.IPacket;
import PacketType = dto.Packet.PacketType;
import Packet = dto.Packet;
import Msg = dto.Msg;
import MsgType = dto.Msg.MsgType;
import cookie from "js-cookie";
import jwt from "jsonwebtoken"

@Component({
  name: 'MessageDetails',
  components: {
    MessageDialog
  }
})
export default class extends Vue {
  messageList = this.$store.state.friendMessageList
  webSocket: WebSocket = this.$store.state.webSocket
  packet: IPacket = new Packet({
    timestamp: Long.fromInt(new Date().getTime()),
    packetType: PacketType.TMsg,
    msg: new Msg({
      toId: Long.fromString(this.$route.query.userId[0]!),
      msgType: MsgType.TFriend,
      elements: []
    })
  })
  userInfo: IUserInfo = {
    nickname: '正在加载'
  }
  myInfo: IUserInfo = {
    nickname: ''
  }

  message = ""

  send() {
    let packet = new Packet({
      timestamp: Long.fromInt(new Date().getTime()),
      packetType: PacketType.TMsg,
      msg: new Msg({
        toId: Long.fromString(this.$route.query.userId[0]!),
        fromId:this.myInfo.userId,
        msgType: MsgType.TFriend,
        elements: [{
          text: this.message
        }]
      })
    })
    console.log()
    let data = Packet.encode(packet).finish()
    this.webSocket.send(data)
    this.$store.commit("setFriendMessageList",packet)
    this.message=""
    //@ts-ignore
    console.log(this.$store.state.friendMessageList)
  }

  async getUserInfo() {
    let res = await service.getUserInfo({
      userIds: [Long.fromString(this.$route.query.userId[0]!)]
    })
    this.userInfo.userId = res.userInfos[0].userId
    this.userInfo.nickname = res.userInfos[0].nickname
    let token = cookie.get("token")
    let myInfo: any = jwt.verify(token!, "aaa")
    this.myInfo.nickname = myInfo.nickname!
    this.myInfo.userId=myInfo.userId
  }



  created() {
    this.getUserInfo()
  }
  mounted(){
    // this.loadMessage()
  }

}
</script>

<style scoped>
.container {
  padding: 0;
}

.message-input {
  padding-top: 18px;
  width: 100%;
  height: 90px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
}
</style>
