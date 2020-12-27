<template>
  <div class="message-dialog">
    <v-row no-gutters :justify="right?'end':'start'" class="pa-3">
      <div v-if="right" class="message-dialog-content">
        123
      </div>
      <v-avatar color="primary lighten-2">
        <span class="white--text headline">{{ dataNickname.substr(0,2).toUpperCase() }}</span>
      </v-avatar>
      <div v-if="!right" class="message-dialog-content">
        {{ dataMessage }}
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import {Prop} from "vue-property-decorator";

export default Vue.extend({
  name: 'MessageDialog',
  data() {
    return {
      dataMessage: this.message,
      dataNickname: this.nickname,
    }
  },
  props: {
    message: {
      type: String,
      required: true,
      default: ""
    },
    nickname: {
      type: String,
      required: true,
      default: ""
    },
    right: {
      type: Boolean,
      default: false
    },
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
