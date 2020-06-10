<template>
  <div class="bg-cover bg-center w-screen h-screen overflow-hidden" :style="`background-image: url('/${getBackgroundImage}')`">
    <NavBar :user="user" />
    <div class="absolute top-0 h-screen w-screen opacity-60 bg-black overflow-hidden" />
    <div class="w-full z-20 relative h-screen overflow-auto">
      <nuxt />
    </div>
  </div>
</template>
