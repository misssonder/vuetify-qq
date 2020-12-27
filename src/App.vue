<template>
    <v-app id="app">
      <router-view/>
    </v-app>
</template>

<script lang="ts">
    import Vue from 'vue';
    import HelloWorld from './components/HelloWorld.vue';

    export default Vue.extend({
        name: 'App',

        components: {
            HelloWorld,
        },

        data: () => ({
            //
        }),
    });
</script>
<style scoped>
    #app{
        background-color: #f4f4f6;
    }
</style>
