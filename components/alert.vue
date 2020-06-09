<template>
  <div class="text-black bg-white rounded relative" :class="computeMessageStyles">
    <button v-show="msg" class="absolute right-0 top-0 mr-2 p-0 focus:outline-none text-base font-semibold" @click.prevent="clearMessage">
      &times;
    </button>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="px-6" v-html="msg" />
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    message: {
      required: true,
      validator: prop => typeof prop === 'string' || prop === null
    },
    type: {
      type: String,
      required: true
    },
    textAlign: {
      type: String,
      default: 'text-center'
    },
    clear: {
      type: Function,
      default: () => {}
    }
  },
  data: () => ({
    msg: ''
  }),
  computed: {
    computeMessageStyles: (self) => {
      return `${self.textAlign} ${self.getAlertTypeClass(self.type)}`
    }
  },
  watch: {
    message (newValue, oldValue) {
      this.msg = newValue
    }
  },
  methods: {
    getAlertTypeClass (type) {
      const styles = {
        success: 'bg-zanah text-parsley',
        error: 'bg-cherub text-persian-plum'
      }

      return this.msg ? `${styles[type]} py-2` : ''
    },
    clearMessage () {
      this.msg = ''
      if (typeof this.clear === 'function') {
        this.clear()
      }
    }
  }
}
</script>
