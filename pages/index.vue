<template>
  <div class="flex flex-col items-center justify-center h-screen w-full">
    <img src="/airtime-flip-min.png" class="z-50 px-2 w-10/12 md:w-7/12">
    <p class="text-2xl md:text-5xl text-white mt-6 text-center">
      Welcome to Aritimeflip
    </p>
  </div>
</template>
<script>
export default {
  name: 'LangingPage',
  layout: 'guest-layout',
  middleware: 'guest'
}
</script>
