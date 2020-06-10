<template>
  <AuthTemplate>
    <Form
      :fields="fields"
      class="guest-form w-full md:w-6/12"
      btnText="Submit"
      url="/accounts"
      validationSchemaName="account"
    >
      <template v-slot:fields="{ errors, changeHandler }">
        <h2 class="text-3xl md:text-4xl text-white font-semibold mb-4 mt-2">
          Create account
        </h2>
        <TextField
          id="account_name"
          icon="user"
          placeholder="Account name"
          :value="fields.account_name"
          :error="$utils.formatError(errors.account_name)"
          :changeHandler="changeHandler"
        />
        <TextField
          id="account_number"
          icon="pencil-alt"
          placeholder="Account number"
          :value="fields.account_number"
          :error="$utils.formatError(errors.account_number)"
          :changeHandler="changeHandler"
        />
        <SelectAccountType
          id="personal"
          icon="user"
          prompt="Account type"
          name="name"
          :value="fields.personal"
          :error="$utils.formatError(errors.personal)"
          :changeHandler="changeHandler"
          :options="personalOptions"
        />
        <Banks
          id="bank_id"
          prompt="Bank name"
          :value="fields.bank_id"
          :banks="banks"
          :error="$utils.formatError(errors.bank_id)"
          :changeHandler="changeHandler"
        />
      </template>
    </Form>
  </AuthTemplate>
</template>
<script>

import Form from '@/components/forms'
import TextField from '@/components/forms/fields/textfield'
import AuthTemplate from '@/components/templates/auth'
import SelectAccountType from '@/components/forms/fields/select'
import Banks from '@/components/banks-select'

export default {
  name: 'CreateAccount',
  middleware: 'auth',
  components: {
    Form,
    Banks,
    TextField,
    AuthTemplate,
    SelectAccountType
  },
  async fetch () {
    const { payload } = await this.$axios.$get('/banks')
    this.banks = payload
  },
  data: () => ({
    fields: {
      account_number: '',
      account_name: '',
      bank_id: '',
      personal: ''
    },
    banks: [],
    personalOptions: [
      { id: 'no', name: 'Beneficiary account' },
      { id: 'Yes', name: 'Personal account' }
    ]
  }),
  head () {
    return {
      title: 'Create account',
      meta: [
        { hid: 'description', name: 'description', content: 'Airtimeflip create account page' }
      ]
    }
  }
}
</script>
