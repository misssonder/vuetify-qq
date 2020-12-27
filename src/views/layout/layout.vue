<template>
  <div id="layout">
    <v-app-bar dense height="74" class="elevation-0" app color="#fff">
      <v-app-bar-nav-icon @click="isShowDrawer=!isShowDrawer"/>
      <v-spacer/>
      <v-btn icon>
        <v-icon dark>search</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app temporary v-model="isShowDrawer">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">John Leider</v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
          nav
          dense
      >
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
              v-for="(item, i) in items"
              :key="i"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  name: "Layout"
})
export default class extends Vue {
  isShowDrawer = true
  bottomRouter = "recent"
  routerItems = [
    {
      value: 'message',
      icon: 'chat_bubble_outline'
    },
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
}
</script>

<style scoped>

</style>
