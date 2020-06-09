<template>
  <header class="z-50 mp-2 md:pt-4">
    <nav class="flex items-center justify-between text-white mx-6 md:mx-40 h-20">
      <nuxt-link tag="img" to="/" src="/airtime-flip-min.png" class="w-32 md:w-40 h-12 md:h-16 z-50 cursor-pointer" />
      <div class="z-50 font-semibold">
        <div v-if="$auth.loggedIn" class="relative block">
          <Dropdown
            btnStyles="px-2 text-regal-blue  py-1 text-base rounded hover:text-green-vogue hover:bg-white border border-transparent hover:border-gray-400 focus:shadow-white focus:shadow-true-violet"
          />
        </div>
        <div v-else>
          <nuxt-link to="/signin" class="text-white text-shadow mr-2 md:mr-3">
            Sign in
          </nuxt-link>
          <nuxt-link to="/signup" class="px-2 md:px-4 py-2 rounded bg-international-orange text-white">
            Sign up
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>

import Dropdown from '~/components/dropdowns'

export default {
  name: 'Navber',
  components: {
    Dropdown
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
