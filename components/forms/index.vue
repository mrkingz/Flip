<template>
  <form class="pb-4">
    <slot name="fields" :errors="errors" :changeHandler="changeHandler" />
    <slot name="message">
      <Alert :message="message" :type="alertType" class="mt-3 text-sm" />
    </slot>
    <div class="mt-3 text-white">
      <Button :clickHandler="formSubmitHandler" :btnText="currentBtnText(btnText)" class="w-full md:w-6/12" />
    </div>
  </form>
</template>
<script>

import Alert from '~/components/alert'
import Button from '@/components/forms/buttons/'

export default {
  name: 'Form',
  components: {
    Alert,
    Button
  },
  props: {
    fields: {
      type: Object,
      required: true
    },
    btnText: {
      type: String,
      default: null
    },
    submitHandler: {
      type: Function,
      default: null
    },
    method: {
      type: String,
      default: 'POST'
    },
    url: {
      type: String,
      default: null
    },
    validationSchemaName: {
      type: String,
      required: true
    }
  },
  data: () => ({
    isProcessing: false,
    axiosTokenSource: null,
    message: null,
    alertType: '',
    response: {
      SUCCESS: 'success',
      ERROR: 'error'
    },
    errors: {}
  }),
  beforeDestroy () {
    if (this.axiosTokenSource) {
      this.axiosTokenSource.cancel()
    }
  },
  methods: {
    axiosMethod (fields) {
      switch (this.method.toUpperCase()) {
        case 'POST':
          return this.$axios.$post(this.url, fields, {
            cancelToken: this.axiosTokenSource.token
          })
      }
    },
    changeHandler ({ target: { id, value } }) {
      this.fields[id] = value
      // Remove any previous failed validation message of the current input
      if (this.errors[id]) {
        this.errors = {
          ...this.errors,
          [id]: null
        }
      }
      this.message = null
    },
    currentBtnText (btnText) {
      return this.isProcessing ? 'Wait..' : btnText
    },
    async formSubmitHandler () {
      try {
        this.message = null
        this.isProcessing = true
        this.$nuxt.$loading.start()
        this.axiosTokenSource = this.$axios.CancelToken.source()

        const { hasError, errors, fields } = await this.$utils.validator(this.validationSchemaName, this.fields)
        if (hasError) {
          this.errors = errors
          this.$emit('onError', errors)
        } else {
          const response = (typeof this.submitHandler === 'function')
            ? await this.submitHandler(fields, this.axiosTokenSource)
            : await this.axiosMethod(fields)
          if (response) {
            this.processResponse(response)
          }
        }
      } catch (error) {
        console.log('Error >>>>>>>>>>>> ', error)
        this.processError(error)
      } finally {
        this.isProcessing = false
        this.$nuxt.$loading.finish()
      }
    },
    /**
     * Process the request response
     *
     * @param {Object} the HTTP response object
     */
    processResponse (response) {
      const { success } = response
      if (success) {
        this.message = response.message
        this.alertType = this.response.SUCCESS
        this.$emit('onSuccess', response)
      } else {
        const { errors } = response.data
        this.errors = errors
      }
    },
    /**
     * Process resquest error

     * @param {Object} the HTTP error object
     */
    processError (error) {
      const { response } = error
      const status = response ? response.status : 500
      switch (status) {
        case 422:
          this.errors = response.data.data
          break
        case 400:
        case 404:
          this.alertType = this.response.ERROR
          this.message = response.data.message
          break
        default:
          this.alertType = this.response.ERROR
          this.message = 'Internal error occured, try again.'
      }
      this.$emit('onError', error)
    }
  }
}
</script>
