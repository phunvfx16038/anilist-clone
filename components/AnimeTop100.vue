<template>
  <div class="flex align-center justify-between mb-3">
                <div class="p-6 text-gray-500 text-lg font-black">
                  <span>#</span>
                  {{top100Index+1}}
                </div>
                <div class="top-100-card">
                  <div class="flex w-2/4">
                    <div class="img" >
                    <img :src="top100Item.coverImage.extraLarge||top100Item.coverImage.meidum" :alt="top100Item.title.english" width="100%" height="100%">
                    </div>
                    <div class="ml-3">
                      <h3 class="title-top-100">{{top100Item.title.romaji || top100Item.title.english}}</h3>
                      <div class=" flex genre">
                        <p v-for="(genre,index) in top100Item.genres" :key="index" class="genre-type">{{genre}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex ml-auto w-2/4 justify-evenly font-semibold text-sm">
                    <div class="mr-5">
                      <p class="text-gray-800 mb-1"><fa icon='face-smile' /> {{top100Item.averageScore}}%</p>
                      <p class="text-gray-500 text-xs">{{top100Item.popularity}} users</p>
                    </div>
                    <div class="mr-5">
                      <p class="text-gray-800 mb-1">{{top100Item.format}}</p>
                      <p class="text-gray-500 text-xs">{{top100Item.episodes|| "7"}} episodes</p>
                    </div>
                    <div class="mr-5">
                      <p class="text-gray-800 mb-1">{{top100Item.season|| "Summer 2017"}}</p>
                      <p class="text-gray-500 text-xs">{{top100Item.status}} </p>
                    </div>
                  </div>
                </div>
              </div>
</template>

<script>
export default {
    props:{
        top100Item:[],
        top100Index:Number
    }
}
</script>

<style >
.top-100-card{
  display: flex;
  flex:2;
  background-color:white;
  border-radius: 8px;
  align-items: center;
  padding:10px;
}

.pad-type-card{
    padding:4px 9px;
  }

.img img{
  width:auto;
  height:60px
}
.title-top-100{
    font-size: 16px;
    font-weight: 600;
    color:rgb(38,52,63);
    margin-bottom:5px
}
.genre-type{
  margin-right:10px;
  padding:2px 4px;
  border:1px solid hsl(0,82%,65%);
  background-color: hsl(0,82%,65%);
  color: hsl(344,100%,98%);
  border-radius:12px;
}
.genre{
    font-size: 10px;
    font-weight: 700;
    flex:1;
}
</style>