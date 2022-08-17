<template>
           <div class="fixed top-0 w-full headerClass z-50" :class="[transparent ? 'transparent' : 'bg-#2b2d42']" :style="{'top':styleScrollHeader}" v-on:scroll="getWindowValue">
                <div class="container mx-auto ">
                <div class="flex justify-around py-2 items-center ">
                        <div class='h-12 w-12 mr-auto'>
                            <nuxt-link to='/'>
                                <img src="https://anilist.co/img/icons/icon.svg" alt="logo">
                            </nuxt-link>
                        </div>
                       <div class="flex justtify-around">
                            <div class="flex justify-around text-semi-white items-center mr-24">
                                <nuxt-link to='/' class="mr-6">Search</nuxt-link>
                                <nuxt-link to='/' class="mr-6">Social</nuxt-link>
                                <nuxt-link to='/' class="mr-5">Forum</nuxt-link>
                            </div>
                            <div class='text-semi-white mr-52'>
                                <button class='py-2 px-3'>Login</button>
                                <button class='hover:scale-150 py-1.5 px-4 text-white bg-semi-blue rounded-md'>Sign up</button>
                            </div>
                       </div>
                </div>
            </div>
           </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    data:()=>({
        styleScrollHeader:null,
    }),
    computed: {
      ...mapState(['transparent'])
    },
    methods:{
        getWindowValue(){
            let prevScrollpos = window.pageYOffset;
            window.addEventListener('scroll', () => {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    this.styleScrollHeader = '0'
                } else {
                    this.styleScrollHeader = '-65px'
                }
                prevScrollpos = currentScrollPos;
            }) 
        },
    },
    beforeMount  () {
        window.addEventListener('scroll', this.getWindowValue);
    },
    destroyed () {
        window.removeEventListener('scroll', this.getWindowValue);
    },
}
</script>

<style scoped>
.headerClass{
    transition: top 0.3s; 
}
.transparent{
    background-color: rgba(35,38,67,.5);
    color: #e5e7ea;
}
</style>