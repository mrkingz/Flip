<template>
  <div class="wrapper">
    <label v-if="label" class="form-label" :class="computedLabelClass" :for="id"> {{ label }}</label>
    <div class="flex items-center rounded border border-gray-300 bg-white" :class="computedErrorBorderClass">
      <div v-if="icon" class="text-center inline text-ebony justify-middle w-12">
        <FontIcon :icon="icon" class="text-gray-700" />
      </div>
      <div class="field-wrapper inline-flex flex-grow border-l border-gray-300">
        <slot :id="id" />
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="error" class="text-monza text-sm text-shadow" v-html="$utils.capitalize(error)" />
  </div>
</template>
<script>

import FontIcon from '@/components/icons'
import mixins from '@/components/forms/fields/mixins'

export default {
  name: 'FieldWrapper',
  components: {
    FontIcon
  },
  mixins: [mixins],
  props: {
    changeHandler: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    hasError: false
  }),
  computed: {
    computedLabelClass () {
      return this.mandatory && this.label ? `${this.labelStyles} mandatory` : `${this.labelStyles}`
    },
    computedErrorBorderClass () {
      return `${this.hasError ? 'error-border' : ''}`
    }
  },
  watch: {
    error (error) {
      this.hasError = !!error
    }
  }
}
</script>
<style lang="scss" scoped>
 .wrapper {
    @apply w-full mb-0;
  }

  .wrapper + .wrapper {
    @apply mt-3
  }

  .field-wrapper:focus-within {
    @apply bg-hint-yellow
  }

 .error {
    @apply text-sm text-monza
  }

  .error-border {
    @apply border-monza shadow-error
  }
</style>
