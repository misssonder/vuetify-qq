<template>
  <div class="message-dialog" @click="test">
    <v-row no-gutters :justify="right?'end':'start'" class="pa-3">
      <div v-if="right" class="message-dialog-content">
        {{ dataPacket.msg.elements[0].text }}
      </div>
      <v-avatar color="primary lighten-2">
        <span class="white--text headline">{{ dataPacket.msg.fromId}}</span>
      </v-avatar>
      <div v-if="!right" class="message-dialog-content">
        {{ dataPacket.msg.elements[0].text }}
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";
import {dto} from "@/client/proto/proto";
import Packet = dto.Packet;
import {service} from "@/client/RpcClient";
import Long from "long";

export default Vue.extend({
  name: 'MessageDialog',
  data() {
    return {
      dataPacket: this.packet,
    }
  },
  props: {
    userId: {
      type: String
    },
    packet: {
      type: Object
    },
    right:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    async getNickName() {
      if (this.packet.msg?.fromId !== null) {
        let res = await service.getUserInfo({
          userIds: [this.packet.msg?.fromId!]
        })
        if (typeof res.userInfos[0].nickname === 'string')
          return res.userInfos[0].nickname!.toString()
        if (typeof res.userInfos[0].nickname === "undefined" || res.userInfos[0].nickname === null)
          return ""
      }
    },
    isRight() {
      console.log(this.$route.query.userId)
      return !this.$route.query.userId == this.packet.msg.fromId
    },
    test(){
      console.log(this.isRight())
    }

  },
  mounted() {
  }
})
</script>

<style>
.message-dialog-content {
  margin: 0 10px;
  background-color: #ffffff;
  padding: 1.5vh;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
</style>
