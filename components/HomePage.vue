<template>
      <div class="container mx-auto">
        <div class="p-7" v-for="(type,key,index) in listAnimeType" :key="index">
           <div class="flex mb-5">
              <h3 class="text-gray-800 tracking-wide text-2xl font-bold leading-5 hover:text-semi-white"><nuxt-link :to='`/listAnime/${formatNameOfQuery(key)}`'>{{key.split("_").join(" ").toUpperCase()}}</nuxt-link></h3>
              <div class="ml-auto text-gray-600 hover:text-semi-white"><nuxt-link :to='`/listAnime/${formatNameOfQuery(key)}`'>View all</nuxt-link></div>
            </div>
            <div class="flex gap-9 " v-if="key!='top_100_Anime'">
              <anime-lists v-for="(item,index) in type.data" :key="index" :animeItem="item" :itemId="index"/>
            </div>
            <div v-else >
              <anime-top-100  v-for="(item,index) in listAnimeType.top_100_Anime.data" :key="index" :top100Item="item" :top100Index="index"/>
            </div>
        </div>
      </div>
</template>

<script>
import {mediaQuery} from "../graphql/query"
import AnimeLists from './AnimeLists.vue'
import AnimeTop100 from './AnimeTop100.vue'

export default {
  components: { AnimeLists, AnimeTop100 },
  data:()=>({
    listAnimeType:[],
    sort:null
  }),
   apollo:{
     media:{
       query:mediaQuery,
       manual:true,
       result({data,loading}){
         if(!loading){
           this.listAnimeType = data
         }
       }
     }
   },
   methods:{
      formatNameOfQuery(key){
      if(key === "all_time_popular"){
        return this.sort = "SCORE_DESC"
      } 
      if(key === "trending_Now"){
        return this.sort ="TRENDING_DESC"
      } 
      if(key === "upComing_Next_Season"){
        return this.sort ="POPULARITY_DESC"
      } 
      if(key === "popular_This_Season"){
        return this.sort = "FAVOURITES_DESC"
      } 
      if(key === "top_100_Anime"){
        return this.sort ="SCORE_DESC"
      }
    }
   },
  created(){
    this.$store.dispatch('updateTransparent', this.transparent);
  }  
}
</script>

<style scoped>

</style>
  
