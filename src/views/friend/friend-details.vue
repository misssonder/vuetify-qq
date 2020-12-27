<template>
    <div class="friend-details">
        <v-main>
            <v-container fluid
                    max-width="100%">
                <v-img
                        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
                        height="300px"
                        dark
                >
                    <v-row class="fill-height">
                        <v-card-title>
                            <v-btn dark icon @click="$router.go(-1)">
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>

                            <v-spacer></v-spacer>

                            <v-btn dark icon class="mr-4">
                            </v-btn>

                            <v-btn dark icon>
                            </v-btn>
                        </v-card-title>

                        <v-spacer></v-spacer>

                        <v-card-title class="white--text pl-12 pt-12">
                            <div class="display-1 pl-12 pt-12 pr-12">Ali Conners</div>
                        </v-card-title>
                    </v-row>
                </v-img>

                <v-list two-line>
                    <v-list-item @click="">
                        <v-list-item-icon>
                            <svg t="1608888931039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2408" width="24" height="24"><path d="M913.048838 641.534781c-20.479961-65.843075-44.031916-121.13897-80.281447-211.557998C838.39938 192.204435 739.583568 0 512.0512 0 281.856437 0 185.191021 196.095627 191.335009 430.079183c-36.351931 90.623828-59.699087 145.510124-80.179047 211.557998C67.636044 781.617715 81.972017 839.678405 92.211998 840.907202c23.039956 2.867195 89.70223-105.4718 89.702229-105.471799 0 62.771081 32.255939 144.486125 102.399806 203.570813-33.791936 10.239981-109.670192 38.195127-92.159825 68.812669 14.540772 24.678353 251.084323 15.76957 319.282593 8.089585 68.30067 7.679985 304.844221 16.588768 319.384993-8.089585 18.022366-30.719942-57.95829-58.470289-92.159825-68.812669 69.939067-59.187088 102.399805-141.004532 102.399806-203.570813 0 0 66.662273 108.338994 89.702229 105.471799 11.366378-1.228798 25.804751-59.391887-17.715166-199.372421z" fill="#3c51b7" p-id="2409"></path></svg>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>(650) 555-1234</v-list-item-title>
                            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-icon>
                            <v-icon>mdi-message-text</v-icon>
                        </v-list-item-icon>
                    </v-list-item>


                    <v-divider inset></v-divider>

                    <v-list-item @click="">
                        <v-list-item-icon>
                            <v-icon color="indigo">mdi-email</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>aliconnors@example.com</v-list-item-title>
                            <v-list-item-subtitle>Personal</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                </v-list>
            </v-container>
        </v-main>

    </div>
</template>

<script>
    import Vue from 'vue'
    import Component from 'vue-class-component'
    @Component({
        name:"FriendDetails"
    })
    export default class extends Vue{
    }
</script>

<style scoped>
    .container {
        padding:  0;
    }

</style>
