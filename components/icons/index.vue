<template>
  <font-awesome-icon :icon="['fas', icon]" class="w-4 h-4 text-lg inline-block" />
</template>
<script>
export default {
  name: 'FontIcon',
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
