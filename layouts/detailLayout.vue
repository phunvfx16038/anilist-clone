<template>
  <div class='font-sans text-color' :class="[isDark ? 'bg-#0a1625':'bg-blue-200']">
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
      ...mapState(['isDark'])
  },
   mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
  
}
</script>

<style>
    
</style>