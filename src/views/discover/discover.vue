<template>
    <v-container fluid>
        <v-card flat>
            <v-row no-gutters>
                <v-col cols="4" class="pa-3">
                    <v-row justify="center" align="center" no-gutters>
                        <v-icon size="35" color="#fdd702">star_rate</v-icon>
                    </v-row>
                    <v-row justify="center" align="center" no-gutters>
                        <div class="text-body-2">空间</div>
                    </v-row>
                </v-col>
                <v-col cols="4" class="pa-3">
                    <v-row justify="center" align="center" no-gutters>
                        <v-icon size="35" color="#ec4176">place</v-icon>
                    </v-row>
                    <v-row justify="center" align="center" no-gutters>
                        <div class="text-body-2">附近</div>
                    </v-row>
                </v-col>
                <v-col cols="4" class="pa-3">
                    <v-row justify="center" align="center" no-gutters>
                        <v-icon size="35" color="#2c62fd">terrain</v-icon>
                    </v-row>
                    <v-row justify="center" align="center" no-gutters>
                        <div class="text-body-2">兴趣</div>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
        <v-list class="mt-4">
            <div v-for="(item, index) in mediaItems"
                 :key="item.title">
                <v-divider v-if="index!=0"></v-divider>
                <v-list-item
                        @click=""
                >
                    <v-list-item-icon>
                        <v-icon :color="item.color">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>chevron_right</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </div>
        </v-list>
        <v-list class="mt-4">
            <div v-for="(item, index) in bookItems"
                 :key="item.title">
                <v-divider v-if="index!=0"></v-divider>
                <v-list-item
                        @click=""
                >
                    <v-list-item-icon>
                        <v-icon :color="item.color">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>chevron_right</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </div>
        </v-list>
        <v-list class="mt-4">
            <div v-for="(item, index) in marketItems"
                 :key="item.title">
                <v-divider v-if="index!=0"></v-divider>
                <v-list-item
                        @click=""
                >
                    <v-list-item-icon>
                        <v-icon :color="item.color">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon>chevron_right</v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </div>
        </v-list>
    </v-container>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component({
        name: "Discover"
    })
    export default class extends Vue {
        mediaItems = [
            {
                title: '直播',
                icon: 'videocam',
                color: '#68da12'
            },
            {
                title: '视频',
                icon: 'video_library',
                color: '#ca4427'
            },
            {
                title: '音乐',
                icon: 'headset',
                color: '#2075c9'
            },
        ]
        bookItems = [
            {
                title: '图书',
                icon: 'book',
                color: '#2075c9'
            },
            {
                title: '新闻',
                icon: 'whatshot',
                color: '#e57202'
            },
            {
                title: '游戏',
                icon: 'videogame_asset',
                color: '#07e4f3'
            },
        ]
        marketItems = [
            {
                title: '市场',
                icon: 'shopping_cart',
                color: '#2075c9'
            },
        ]
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
