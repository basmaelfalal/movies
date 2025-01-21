<template>
    <div class="Layout">
        <v-app>
         
            <AppNav />
          
            <router-view />
           
        </v-app>
    </div>
</template>
<script>


import AppNav from "./AppNav.vue";

export default {
    data: () => ({
        drawer: true,
    }),
    components: {
        AppNav
    }
};
</script>