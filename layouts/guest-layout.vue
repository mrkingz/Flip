<template>
  <div class="bg-cover bg-center w-screen h-screen overflow-x-scroll" style="background-image: url('stock-woman.png')">
    <NavBar />
    <div class="absolute top-0 h-screen w-screen opacity-60 bg-black" />
    <div class="w-full z-20 absolute top-0">
      <nuxt />
    </div>
  </div>
</template>
<script>

import NavBar from '@/components/navigations/navbar'

export default {
  name: 'GuestLayout',
  components: {
    NavBar
  }
}
</script>
