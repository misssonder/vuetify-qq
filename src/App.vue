<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import wsUrl from "@/client/WebSocketClient";
import {dto} from "@/client/proto/proto";
import Packet = dto.Packet;
import PacketType = dto.Packet.PacketType;
import MsgType = dto.Msg.MsgType;


export default Vue.extend({
  name: 'App',

  components: {
  },
  methods: {
    async onReceiveMsg(e: MessageEvent) {
      let blob = e.data
      let buf = await blob.arrayBuffer();
      let packet: Packet = Packet.decode(Buffer.from(buf));
      if (packet.packetType===PacketType.TMsg&&packet.msg?.msgType===MsgType.TFriend){
        this.$store.commit("setFriendMessageList",packet)
      }
      console.log(this.$store.state.friendMessageList)
    },
    initWebSocket() {
      let webSocket = new WebSocket(wsUrl)
      this.$store.commit("setWeSocket", webSocket)
      webSocket.onmessage = (e:MessageEvent) => {
        this.onReceiveMsg(e)
      }
    }
  },
  mounted() {
    this.initWebSocket()
  },

  data: () => ({
    //
  }),
});
</script>
<style scoped>
#app {
  background-color: #f4f4f6;
}
</style>
