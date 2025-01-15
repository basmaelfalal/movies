<template>
    <div class="Layout">
        <v-app>
         
            <AppNav />
            <UpperBanner />
            <RecentlyUpdated />
            <Trending />
            <NewRelease />
            <Series />
            <Recommended   />
        
         
            <MyFilm />
            <Season />
            <Youmayalsolike />
            <comments />
        </v-app>
    </div>
</template>
<script>

import UpperBanner from "../Home-Page/UpperBanner.vue";
import AppNav from "./AppNav.vue";
import RecentlyUpdated from "../Home-Page/RecentlyUpdated.vue";
import Trending from "../Home-Page/Trending.vue";
import NewRelease from "../Home-Page/NewRelease.vue";
import Series from "../Home-Page/Series.vue";
import  Recommended  from "../Home-Page/Recommended .vue";


import MyFilm from "../Home-Page/MyFilm.vue";
import Season from  "../Home-Page/Season.vue";
import  Youmayalsolike  from "../Home-Page/Youmayalsolike.vue";
import  comments  from "../Home-Page/comments.vue";
export default {
    data: () => ({
        drawer: true,
    }),
    components: {
        AppNav, UpperBanner, RecentlyUpdated, Trending,NewRelease,Series,Recommended,Youmayalsolike,MyFilm,Season,comments,
    }
};
</script>