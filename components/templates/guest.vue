<template>
  <div class="relative flex pt-20 md:pt-32 text-white">
    <div class="hidden xl:block md:w-6/12 pl-48 pt-12">
      <div class="text-6xl">
        <div>Welcome!</div>
        <div class="my-0 text-3xl font-semibold">
          Airtimeflip, <span class="text-2xl font-normal">the best airtime to cash converter in Nigeria</span>
        </div>
      </div>
      <div class="text-lg italic">
        {{ prompt }}
      </div>
    </div>
    <div class="flex-grow mx-6 md:mx-10 xl:mx-24 flex justify-center">
      <div class="rounded-md border-2 border-gray-300 pb-6 pt-8 inline px-6 md:px-8 py-6 block w-full md:w-6/12 lg-6/12 xl:w-8/12">
        <h2 class="font-semibold text-4xl text-white text-shadow mt-4">
          {{ formTitle }}
        </h2>
        <slot />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'GuestTemplate',
  props: {
    prompt: {
      type: String,
      required: true
    },
    formTitle: {
      type: String,
      required: true
    }
  }
}
</script>
