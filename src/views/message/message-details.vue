<template>
  <div class="message-details">
    <v-app-bar dense height="74" class="elevation-0" app color="#fff">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      用户名字
      <v-spacer/>
      <v-btn icon @click="$router.push('/friend/details')">
        <v-icon dark>person</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid class="mt-2">
        <message-dialog :nickname="'lz'" :message="'123'"></message-dialog>
        <message-dialog :nickname="'lz'" :message="'123'" :right="true"></message-dialog>
      </v-container>
    </v-main>
    <div class="message-input">
      <v-card flat width="100%" height="100%">
        <v-row justify="center" align="center" no-gutters>
          <v-col cols="10">
            <v-text-field label="请输入文字" clearable dense hide-details v-model="message" append-outer-icon="send" @click:append-outer="send"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters justify="center">
          <v-col cols="10">
            <v-btn  icon>
              <v-icon color="grey">image</v-icon>
            </v-btn>
            <v-btn  icon>
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
import IMsg = dto.IMsg;

@Component({
  name: 'MessageDetails',
  components: {
    MessageDialog
  }
})
export default class extends Vue {
  message=""
  send(){
    console.log(this.message)
  }

}
</script>

<style scoped>
.container {
  padding: 0;
}

.message-input {
  padding-top:18px ;
  width: 100%;
  height: 90px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
}
</style>
