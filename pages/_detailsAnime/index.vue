<template>
  <div >
      <h1 class="title-overview">Relations</h1>
      <div class="flex flex-wrap">
        <div class="cover-image-relation m-2">
          <div class="image-relation">
          </div>
          <div class="image-text">Source</div>
        </div>
          <div class="cover-image-relation m-2">
          <div class="image-relation">
          </div>
          <div class="image-text">Source</div>
        </div>
          <div class="cover-image-relation m-2">
          <div class="image-relation">
          </div>
          <div class="image-text">Source</div>
        </div>
          <div class="cover-image-relation m-2">
          <div class="image-relation">
          </div>
          <div class="image-text">Source</div>
        </div>
          <div class="cover-image-relation m-2">
          <div class="image-relation">
          </div>
          <div class="image-text">Source</div>
        </div>
          <div class="cover-image-relation m-2">
          <div class="image-relation">
          </div>
          <div class="image-text">Source</div>
        </div>
          <div class="cover-image-relation m-2">
          <div class="image-relation">
          </div>
          <div class="image-text">Source</div>
        </div>
      </div>   
        <!-- characters -->
      <h1 class="title-overview">Characters</h1>
      <div class="overview-characters">
        <div class="overview-characters-card">
          <div class="flex">
            <div class="character-img">
            </div>
            <div class="name">
              <p>Luffy D. Monkey</p>
              <p>Main</p>
            </div>
          </div>
          <div class="flex">
              <div class="name">
              <p>Mayumi Tanaka</p>
              <p>Japanese</p>
              </div>
              <div class="author-img">
              </div>
          </div>
        </div>
        <div class="overview-characters-card">
          <div class="flex">
            <div class="character-img">
            </div>
            <div class="name">
              <p>Luffy D. Monkey</p>
              <p>Main</p>
            </div>
          </div>
          <div class="flex">
              <div class="name">
              <p>Mayumi Tanaka</p>
              <p>Japanese</p>
              </div>
              <div class="author-img">
              </div>
          </div>
        </div>
      </div>
       <!-- Staff -->
      <h1 class="title-overview">Staff</h1>
      <div class="overview-characters">
        <div class="overview-characters-card">
          <div class="flex">
            <div class="character-img">
            </div>
            <div class="name">
              <p>Eiichirou Oda</p>
              <p>Original Creator</p>
            </div>
          </div>
        </div>
        <div class="overview-characters-card">
          <div class="flex">
            <div class="character-img">
            </div>
            <div class="name">
              <p>Luffy D. Monkey</p>
              <p>Main</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  props:{
    detail:[]
  },
  mounted(){
    console.log(this.detail)
  }
}

</script>

<style>
.title-overview{
  margin:0.5rem;
  color:black;
}
.cover-image-relation{
  height:150px;
  width:100px;
  position: relative;
}
.image-relation{
  width:100%;
  height: 100%;
  background-image: url("https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/bx96427-XiDc44cTlf29.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 15px;
  margin-right: 20px;
  
}
.image-text{
  position: absolute;
    bottom: 0%;
    color: rgb(237,241,245);
    padding: 5px 25px;
    background-color: #61666d;
    opacity: 0.7;
}

/* Characters card */
.overview-characters{
  display: flex;
  flex-wrap:wrap;
  margin: 0.5rem;
  justify-content: space-between;
}
.overview-characters-card{
  width: 45%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin: 0px 35px 15px 0px;
}
.overview-characters-card .character-img{
  background-image: url("https://s4.anilist.co/file/anilistcdn/character/large/b40-q0YepZ4VUZUO.png");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width:60px;
  height: 80px;
}
.overview-characters-card .author-img{
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  width:60px;
  height: 80px;
  background-image: url("https://s4.anilist.co/file/anilistcdn/staff/large/n95075-1qD4TeW1ON92.png");
}
.overview-characters-card .name{
  font-size: 13px;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  color: rgb(81,97,112);
  margin:10px;
}
</style>