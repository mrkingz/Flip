<template>
  <div class="bg-cover bg-center w-screen h-screen overflow-hidden" :style="`background-image: url('/${getBackgroundImage}')`">
    <NavBar :user="user" />
    <div class="absolute top-0 h-screen w-screen opacity-60 bg-black overflow-hidden" />
    <div class="w-full z-20 relative h-screen overflow-auto">
      <nuxt />
    </div>
  </div>
</template>
<script>

import NavBar from '@/components/navigations/navbar'

export default {
  name: 'Layout',
  components: {
    NavBar
  },
  data: () => ({
    user: null
  }),
  computed: {
    getBackgroundImage () {
      return this.$auth.loggedIn ? 'stock-woman.jpg' : 'stock-woman.png'
    }
  },
  created () {
    this.user = this.$auth.user
  }
}
</script>
