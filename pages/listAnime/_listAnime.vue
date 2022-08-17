<template>
  <div class="container mx-auto">
        <div class="p-7">
              <h3 class="text-gray-800 tracking-wide text-2xl font-bold leading-5 hover:text-semi-white mb-7">{{$route.params.listAnime.split("_").join(" ").toUpperCase()}}</h3>
            
              <div class="flex flex-wrap m-list" >
                <anime-lists v-for="(item,index) in listAnimeType.getListTypeAnime.data" :key="index" :animeItem="item" :itemId="index" :list="true" />
              </div>
        </div>
  </div>
</template>

<script>
import { getListTypeAnime } from '../../graphql/query'
export default {
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const  {sort} = params.listAnime
    const res = await client.query({
      query: getListTypeAnime,
      variables: {
        sort,
      },
    })
     const listAnimeType = res.data

     return {listAnimeType}
  },
}
</script>

<style scoped>
.m-list{
  margin:0px -20px;
}

</style>