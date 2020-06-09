<template>
  <button class="outline-none cursor-pointer focus:outline-none rounded px-4 py-2" :class="computedBtnStyles" @click.prevent="clickHandler">
    <slot> {{ btnText }} </slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    btnStyles: {
      type: String,
      default: 'bg-international-orange text-white font-semibold'
    },
    btnText: {
      type: String,
      default: 'Submit'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isProcessing: {
      type: Boolean,
      default: false
    },
    clickHandler: {
      type: Function,
      required: true
    }
  },
  computed: {
    computedDisabled () {
      return !!((this.disabled || this.isProcessing))
    },
    computedBtnStyles () {
      let style
      if (this.isProcessing) {
        style = 'cursor-wait'
      } else if (this.disabled) {
        style = 'cursor-not-allowed'
      }
      return style ? `${this.btnStyles} ${style}` : this.btnStyles
    }
  },
  watch: {
    isProcessing (status) {
      this.disabled = status
    }
  }
}
</script>
