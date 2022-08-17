<template>
  <div class="w-1/5 rounded anime " :class="list ? 'gap-list': ''" >
                  <nuxt-link :to="`/${animeItem.id}`">
                    <img :src="animeItem.coverImage.extraLarge" alt="bx132474-J2ECHSPkfb9g">
                  </nuxt-link>
                  <div class="text-gray-700 font-semibold leading-5 mt-2.5">
                    <nuxt-link :to="`/${animeItem.id}`">{{animeItem.title.english || animeItem.title.romaji}}</nuxt-link>
                  </div>
                    <div class="text-sm font-semibold" :class="hoverItem ? 'card-left':'card-right'">
                        <div class="flex mb-4 text-gray-800">
                        <div class="mr-2 ">Ep 8 airing in 6 days</div>
                        <div class="ml-auto">
                            <span><fa icon='face-smile' /></span>
                            <span>87%</span>
                            </div>
                        </div>
                        <p class="text-card text-xs mb-2">A-1 Pictures</p>
                        <p class="text-gray-700">TV show</p>
                        <div class="flex text-xs mt-4">
                        <p class="mr-3 bg-media text-text-media rounded-xl pad-type-card">comedy</p> 
                        <p class="bg-media text-text-media rounded-xl pad-type-card">psychological</p>
                    </div>
        </div>
  </div>
    
</template>

<script>
export default {
    props:{
        animeItem:[],
        itemId:Number,
        list:Boolean
    },
    data:()=>({
      hoverItem: false
    }),
    mounted(){
                const getSpaceXEl = this.$el.getBoundingClientRect().x
                if(getSpaceXEl > 900){
                  return this.hoverItem = true
                }
             }
}


</script>

<style scoped>
.gap-list{
  padding:0px 20px;
  margin-bottom:35px;
}

img{
    width: 100%;
    height: 264px;
    border-radius: 4px;
}
    .anime{
    position: relative;
  }
  .card-right{
    position:absolute;
    top:0;
    left:105%;
    background-color:white;
    padding:25px;
    border-radius:8px;
    z-index:50;
    visibility: hidden;
    min-width:250px;
  }
   .card-left{
    position:absolute;
    top:0;
    right:105%;
    background-color:white;
    padding:25px;
    border-radius:8px;
    z-index:50;
    visibility: hidden;
    min-width:250px;
  }
  .pad-type-card{
    padding:4px 9px;
  }

  .card-right::after {
  content: "";
  position: absolute;
  top: 30%;
  right: 100%;
  margin-top: -5px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent white transparent transparent;
}

.card-left::after {
  content: "";
  position: absolute;
  top: 30%;
  left: 100%;
  margin-top: -5px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent white;
}
.anime:hover .card-right,
.anime:hover .card-left
{
    visibility: visible;
}
</style>