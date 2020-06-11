<template>
  <GuestTemplate
    formTitle="Sign in"
    prompt="Please sign in to continue enjoying our services"
    class="mt-10"
  >
    <div class="bg-transparent text-white mt-6">
      <Form
        :fields="fields"
        class="guest-form"
        btnText="Sign in"
        validationSchemaName="signin"
        :submitHandler="signin"
        @onError="handleError"
      >
        <template v-slot:fields="{ errors, changeHandler }">
          <TextField
            id="identity"
            icon="user"
            placeholder="Email or username"
            :value="fields.identity"
            :error="$utils.formatError(errors.identity)"
            :changeHandler="changeHandler"
          />
          <TextField
            id="password"
            icon="lock"
            type="password"
            placeholder="Password"
            :value="fields.password"
            :error="$utils.formatError(errors.password)"
            :changeHandler="changeHandler"
          />
        </template>
      </Form>
      <div class="mb-4 mt-2 text-sm text-shadow">
        <span>
          Don't have an account?
          <nuxt-link to="/signup" class="text-curious-blue">Sign up</nuxt-link>
        </span>
      </div>
    </div>
  </GuestTemplate>
</template>
<script>

import Form from '@/components/forms'
import GuestTemplate from '@/components/templates/guest'
import TextField from '@/components/forms/fields/textfield'

export default {
  name: 'SignIn',
  middleware: ['guest'],
  components: {
    Form,
    TextField,
    GuestTemplate
  },
  data: () => ({
    fields: {
      identity: '',
      password: ''
    }
  }),
  methods: {
    handleError (error) {
      if (!error.response?.success) {
        this.fields = {
          identity: '',
          password: ''
        }
      }
    },
    async signin () {
      const { data: { success, payload } } = await this.$auth.loginWith('local', { data: this.fields })

      if (success) {
        this.$auth.setUser(payload.user)
        this.$auth.setToken('local', `Bearer ${payload.access_token}`)
      }
    }
  },
  head () {
    return {
      title: 'Sign in',
      meta: [
        { hid: 'description', name: 'description', content: 'Airtimeflip sign in page' }
      ]
    }
  }
}
</script>
