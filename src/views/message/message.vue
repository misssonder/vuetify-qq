<template>
  <v-container fluid>
    <v-list two-line flat>
      <v-list-item @click="test">
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <div class="message-username">
              李政
            </div>
          </v-list-item-title>
          <v-list-item-subtitle>
            <div class="message-content">
              你可以和我聊天
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-row>
            <v-col cols="12">
              <span class="text-body-2 text--lighten-2">4:12</span>
            </v-col>
          </v-row>
        </v-list-item-action>
      </v-list-item>
      <v-divider/>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <div class="message-username">
              李政
            </div>
          </v-list-item-title>
          <v-list-item-subtitle>
            <div class="message-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
              doloribus fuga ipsam laborum, maxime nemo saepe sequi vero! Nesciunt.
            </div>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-row>
            <v-col cols="12">
              <span class="text-body-2 text--lighten-3">4:12</span>
            </v-col>
          </v-row>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider/>

  </v-container>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: "Message"
})
export default class extends Vue {
  test() {
    this.$router.push("/message/details")
  }
}
</script>

<style scoped>
.container {
  padding: 10px 0;
}

/deep/ .v-list-item__content {
  padding: 16px 0 20px;
}

/deep/ .v-list {
  padding: 0;
}

.message-username {
  line-height: 1;
  font-size: 16px;
  font-family: Roboto, Lato, sans-serif;
}

.message-content {
  font-size: 12px;
}
</style>
