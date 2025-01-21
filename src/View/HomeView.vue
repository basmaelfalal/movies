<template>
    <div class="home">
 
      <UpperBanner />
            <RecentlyUpdated />
            <Trending />
            <NewRelease />
            <Series />
            <Recommended   />
        
    </div>
  </template>
<script>

import UpperBanner from "../components/Home-Page/UpperBanner.vue";
import RecentlyUpdated from "../components/Home-Page/RecentlyUpdated.vue";
import Trending from "../components/Home-Page/Trending.vue";
import NewRelease from "../components/Home-Page/NewRelease.vue";
import Series from "../components/Home-Page/Series.vue";
import  Recommended  from "../components/Home-Page/Recommended .vue";



export default {
    data: () => ({
        drawer: true,
    }),
    components: {
     UpperBanner, RecentlyUpdated, Trending,NewRelease,Series,Recommended
    }
};
</script>