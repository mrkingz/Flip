<template>
  <header class="z-50 mp-2 md:pt-4">
    <nav class="flex items-center justify-between text-white mx-6 md:mx-20 h-20">
      <nuxt-link tag="img" to="/" src="/airtime-flip-min.png" class="w-32 md:w-40 h-12 md:h-16 z-50 cursor-pointer" />
      <div class="z-50 font-semibold">
        <nuxt-link to="/signin" class="text-white text-shadow mr-2 md:mr-3">
          Sign in
        </nuxt-link>
        <nuxt-link to="/signup" class="px-2 md:px-4 py-2 rounded bg-international-orange text-white">
          Sign up
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Navber'
}
</script>
