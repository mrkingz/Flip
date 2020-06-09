<template>
  <!--div class="bg-cover bg-center w-screen h-screen overflow-x-scroll" style="background-image: url('stock-woman.png')">
    <NavBar />
    <div class="absolute top-0 h-screen w-screen opacity-60 bg-black" /-->
  <div class="relative flex pt-20 md:pt-24">
    <div class="hidden xl:block md:w-6/12" />
    <div class="flex-grow mx-6 md:mx-10 xl:mx-24 flex justify-center">
      <div class="rounded-md border-2 border-gray-300 pb-6 pt-8 inline px-6 md:px-8 py-6 block w-full md:w-6/12 lg-6/12 xl:w-8/12">
        <h2 class="font-semibold text-4xl text-white text-shadow mt-4">
          {{ formTitle }}
        </h2>
        <slot />
      </div>
    </div>
    <!--/div>
  </div-->
  </div>
</template>
<script>

// import NavBar from '@/components/navigations/navbar'

export default {
  name: 'GuestTemplate',
  props: {
    formTitle: {
      type: String,
      required: true
    }
  }
}
</script>
