<template>
  <div>
    <div class="banner" :style="{ backgroundImage: `url(${listAnimeType.bannerImage})`}">
    </div>
    <div class="container mx-auto font-roboto">
      <div class="cover-content">
        <div class="cover-image">
          <div class="image-anime">
            <img :src="listAnimeType.coverImage.extraLarge" :alt="listAnimeType.title.english">
            <div class="action">
              <div class="list">
                <div class="add">Add to List</div>
                <div class="dropdown">
                  <fa icon="chevron-down" />
                </div>
              </div>
              <div class="heart-icon">
                <fa icon = "heart"/>
              </div>
            </div>
          </div>
        </div>

        <div class="content">
          <h1 class="mb-3 text-2xl">{{listAnimeType.title.english||listAnimeType.title.romaji}}</h1>
          <p class="text-sm">{{listAnimeType.description}}</p>
          <ul class="list-tabs">
            <li><nuxt-link :to="`/${$route.params.detailsAnime}`">Overview</nuxt-link></li>
            <li><nuxt-link :to="`/${$route.params.detailsAnime}/characters`">Characters</nuxt-link></li>
            <li><nuxt-link :to="`/${$route.params.detailsAnime}/watch`">Watch</nuxt-link></li>
          </ul>
        </div>
      </div>
     <div class="flex">
        <div class="side-bar">
          <div class="hastag">
            <span class="text-star"><fa icon="star"/> </span>
            #26 highest rated all time
          </div>
          <div class="hastag">
            <span  class="text-heart"><fa icon = "heart"/></span>
            #24 most popular all time
          </div>
          <div class="airing text-sky">
            <h3>Airing</h3>
            <p>Ep 1019: 1d 10h 13m</p>
          </div>
          <div class="airing">
            <h3>Format</h3>
            <p>{{listAnimeType.format}}</p>
          </div>
          <div class="airing">
            <h3>Episode Duration</h3>
            <p>{{listAnimeType.duration}} min</p>
          </div>
          <div class="airing">
            <h3>Status</h3>
            <p>{{listAnimeType.status}}</p>
          </div>
          <div class="airing">
            <h3>Start Date</h3>
            <p>{{listAnimeType.startDate}}</p>
          </div>
          <div class="airing">
            <h3>Season</h3>
            <p>{{listAnimeType.season}}</p>
          </div>
          <div class="airing">
            <h3>Average Score</h3>
            <p>{{listAnimeType.averageScore}}</p>
          </div>
          <div class="airing">
            <h3>Mean Score</h3>
            <p>{{listAnimeType.meanScore}}</p>
          </div>
          <div class="airing">
            <h3>Popularity</h3>
            <p>{{listAnimeType.popularity}}</p>
          </div>
          <div class="airing">
            <h3>Favorites</h3>
            <p>{{listAnimeType.favourites}}</p>
          </div>
          <div class="airing">
            <h3>Studios</h3>
            <p>{{listAnimeType.studios.nodes.name[0]}}</p>
          </div>
          <div class="airing">
            <h3>Producers</h3>
            <p v-for="(item,index) in listAnimeType.studios.nodes" :key="index">{{item.name}}</p>
          </div>
          <div class="airing">
            <h3>Source</h3>
            <p>{{listAnimeType.source}}</p>
          </div>
          <div class="airing">
            <h3>Hashtag</h3>
            <p>{{listAnimeType.hastag}}</p>
          </div>
          <div class="airing">
            <h3>Genres</h3>
            <p v-for="(item,index) in listAnimeType.genres" :key="index">{{item}}</p>
          </div>
          <div v-for="(item,index) in listAnimeType.title" :key="index" class="airing">
            <h3>Romaji</h3>
            <p >{{listAnimeType.title.romaji}}</p>
          </div>
          
          <div class="tag">
            <h3>Tags</h3>
            <div class="tags-item">
              <p>Pirates</p>
              <p>98%</p>
            </div>
          </div>
          <div class="external">
            <h3>External & Streaming links</h3>
            <div class="external-item">
              <span class="link"><fa icon="link"/> </span>
              Official Site
            </div>
          </div>
      </div>
      <NuxtChild class="nuxt-el" :detail="listAnimeType"/>
     </div>
    </div>
  </div>
</template>

<script>
import { getDetailAnime } from '../graphql/query';

export default {
  data:()=>({
    transparent:true
  }),
  layout:"detailLayout",
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient;
    const  id  = params.detailsAnime
    
    const res = await client.query({
      query: getDetailAnime,
      variables: {
        id,
      },
    })
     const listAnimeType = res.data.getDetailAnime
     console.log(listAnimeType)
     return {listAnimeType}
  },
  created(){
    this.$store.dispatch('updateTransparent', this.transparent);
  }  
}
</script>

<style>
/* banner */
  .banner{
    background-position: 50% 35%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
  }

  /* cover image and content */
  .cover-content{
    position: relative;
    display: flex;
    color:rgb(38,52,63);
    background-color: white;
    margin-bottom: 30px;
  }
  .image-anime{
    width:19%;
    position: absolute;
    left:0;
    bottom:35%;
  }
  .image-anime img{
    width:100%;
    height: auto;
  }

  /* Add to list style */
  .action{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top:20px
  }
  .list{
    display: flex;
    color:white;
    border-radius:6px;
    margin-right: 15px;
    flex:1;
    justify-content: flex-end;
    background-color:rgb(18,172,253);
    border:1px solid rgb(18,172,253);
  }
  .list .add{
    padding: 5px 20px;
    text-align: center;
  }
  .list .dropdown{
    padding: 5px 10px;
    border-left: 1px solid #33b8fd;
    background-color: #33b8fd;
  }
  .content{
    padding:20px;
    margin-left:215px;
  }
  .heart-icon{
    color:white;
    background-color:rgb(236,41,75); 
    padding:7px 9px;
    height:35px;
    width: 35px;
    border:1px solid rgb(236,41,75);
    border-radius: 6px;
  }

  /* List tabs */
  .list-tabs{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .list-tabs li {
    padding:10px;
  }
  .list-tabs li:hover {
    color:rgb(18,172,253)
  }


  /* Side bar */
  .side-bar{
    width:19%
  }
  .hastag{
    border: 1px solid white;
    background-color: white;
    font-size: 14px;
    padding: 7px 5px;
    text-align: center;
    font-weight: 500;
    color: #26343f;
    border-radius: 4px;
    margin-bottom:25px;
  }

  .airing{
    border: 1px solid white;
    background-color: white;
    font-size: 14px;
    padding: 10px;
    text-align: left;
    font-weight: 500;
    border-radius: 4px;
    margin-bottom:15px;
  }

/* nuxt child  */
  .nuxt-el{
    width: 80%;
    margin-left: 30px;
  }

/* tags */
.tag{
  color:rgb(38,52,63);
}
.tags-item{
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background-color: white;
  font-size: 13px;
  margin: 10px 0px;
}
.tags-item>p:first-child{
  cursor: pointer;
}

.tags-item>p:first-child:hover {
  color:rgb(18,172,253)
}

.external-item{
  border: 1px solid white;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  color: #26343f;
  margin-bottom:10px;
  padding:3px;
}
.external-item span{
  margin-right: 7px;
}
.link{
  padding: 5px;
    background-color: rgb(12,101,166);
    border-radius: 5px;
    color: white;
}
</style>