<template>
  <div class="bg-cover bg-center w-screen h-screen overflow-x-scroll">
    <div class="bg-ebony">
      <NavBar />
    </div>
    <div class="w-full">
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
