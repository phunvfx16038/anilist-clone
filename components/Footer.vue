<template>
  <div class='bg-#11161d'>
      <div class="container mx-auto">
          <div class="flex justify-between p-7 py-20">
            <div>
                <h2 class='text-#3db4f2 font-bold pb-3.5'>Site Theme</h2>
                <div class="flex justify-between">
                    <div class="border w-6 bg-#edf1f5 text-#2e3c48 border-#46546b rounded-sm border cursor-pointer" @click="setIsDark(false)">A</div>
                    <div class="border w-6 border-#46546b rounded-sm border cursor-pointer" @click="setIsDark(true)">A</div>
                    <div class="border w-6  bg-#edf1f5 text-#2e3c48 border-#46546b rounded-sm border cursor-pointer" @click="setIsDark(false)">A</div>
                </div>
            </div>
            <div class="flex justify-evenly items-start font-semibold">
              <div class="flex justify-between flex-col mr-24 gap-2.5">
                  <div><nuxt-link to='#' class="hover:text-blue">Donate</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">AniList.co</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">AniChart.net</nuxt-link></div>
              </div>
              <div class="flex justify-between flex-col mr-24 gap-2.5">
                  <div><nuxt-link to='#' class="hover:text-blue">Apps</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Site Stats</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Recommendations</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">API</nuxt-link></div>
              </div>
              <div class="flex justify-between flex-col mr-24 gap-2.5">
                  <div><nuxt-link to='#' class="hover:text-blue">Discord</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Twitter</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Facebook</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">GitHub</nuxt-link></div>
              </div>
              <div class="flex justify-between flex-col gap-2.5">
                  <div><nuxt-link to='#' class="hover:text-blue">Add Data</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Moderators</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Contact</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Terms & Privacy</nuxt-link></div>
                  <div><nuxt-link to='#' class="hover:text-blue">Site Map</nuxt-link></div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    methods:{
       setIsDark(isDark){
           this.$store.dispatch('updateIsDark', isDark);
       }
    }
   
}
</script>

<style>

</style>