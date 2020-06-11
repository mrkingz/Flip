<template>
  <GuestTemplate
    :formTitle="created ? 'Signed up' : 'Sign up'"
    prompt="Please sign up to enjoy our services"
    class="mt-10"
  >
    <div class="bg-transparent text-white mt-6">
      <div v-if="created" class="pb-6">
        <div class="mb-3 p-4 bg-zanah text-parsley rounded">
          <div class="font-fs-condensed text-justify leading-tight">
            A confirmation link has been sent to your email address.
            Please, check your inbox or spam
          </div>
        </div>
        <Button class="w-full md:w-4/12" btnText="Sign in" :clickHandler="() => $router.push('/signin')" />
      </div>
      <Form
        v-else
        :fields="fields"
        class="guest-form"
        btnText="Sign up"
        url="/users"
        validationSchemaName="signup"
        @onSuccess="handleSuccess"
      >
        <template v-slot:fields="{ errors, changeHandler }">
          <TextField
            id="fullname"
            icon="user"
            placeholder="Full name"
            :value="fields.fullname"
            :error="$utils.formatError(errors.fullname)"
            :changeHandler="changeHandler"
          />
          <TextField
            id="username"
            icon="at"
            placeholder="Username"
            :value="fields.username"
            :error="$utils.formatError(errors.username)"
            :changeHandler="changeHandler"
          />
          <TextField
            id="email"
            icon="envelope"
            placeholder="Email address"
            :value="fields.email"
            :error="$utils.formatError(errors.email)"
            :changeHandler="changeHandler"
          />
          <TextField
            id="number"
            icon="phone-alt"
            placeholder="Phone number"
            :value="fields.number"
            :error="$utils.formatError(errors.number || errors.phone)"
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
          <TextField
            id="password_confirmation"
            icon="lock"
            type="password"
            placeholder="Confirm password"
            :value="fields.password_confirmation"
            :error="$utils.formatError(errors.password_confirmation)"
            :changeHandler="changeHandler"
          />
        </template>
      </Form>
      <div class="mb-4 mt-2 text-sm text-shadow">
        <span v-if="created">
          Create a new account
          <Button class="text-curious-blue" btnStyles="bg-tansparent" btnText="Sign up" :clickHandler="createNew" />
        </span>
        <span v-else>
          Already have an account?
          <nuxt-link to="/signin" class="text-curious-blue">Sign in</nuxt-link>
        </span>
      </div>
    </div>
  </GuestTemplate>
</template>
<script>

import Form from '@/components/forms'
import Button from '@/components/forms/buttons/'
import GuestTemplate from '@/components/templates/guest'
import TextField from '@/components/forms/fields/textfield'

export default {
  name: 'SignIn',
  middleware: ['guest'],
  components: {
    Form,
    Button,
    TextField,
    GuestTemplate
  },
  data: () => ({
    created: false,
    fields: {
      fullname: null,
      username: null,
      email: null,
      number: null,
      password: null,
      password_confirmation: null
    }
  }),
  methods: {
    handleSuccess (response) {
      if (response.success) {
        this.created = true
        this.fields = {
          fullname: null,
          username: null,
          email: null,
          number: null,
          password: null,
          password_confirmation: null
        }
      }
    },
    createNew () {
      this.created = false
    }
  },
  head () {
    return {
      title: 'Sign up',
      meta: [
        { hid: 'description', name: 'description', content: 'Airtimeflip sign up page' }
      ]
    }
  }
}
</script>
