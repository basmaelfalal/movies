<template>
    <div>
        <MyFilm />
            <Season />
            <Youmayalsolike />
            <comments />
    </div>
</template>
<script>


import MyFilm from "../components/Home-Page/MyFilm.vue";
import Season from  "../components/Home-Page/Season.vue";
import  Youmayalsolike  from "../components/Home-Page/Youmayalsolike.vue";
import  comments  from "../components/Home-Page/comments.vue";
export default {
    data: () => ({
        drawer: true,
    }),
    components: {
        Youmayalsolike,MyFilm,Season,comments,
    }
};
</script>