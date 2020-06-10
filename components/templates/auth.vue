<template>
  <div class="mt-4 mx-6 md:mx-40 border-t-2 border-white pt-3">
    <div class="flex">
      <div class="hidden lg:block w-3/12" />
      <div class=" flex-grow rounded py-6 px-4">
        <div class="py-6 px-4 mb-20">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AuthTemplate'
}
</script>
