<template>
  <AuthTemplate>
    <div class="w-full md:w-7/12">
      <h2 class="text-3xl md:text-4xl text-white font-semibold mb-4 mt-2">
        Accounts details
      </h2>
      <div v-for="(account) in accounts" :key="account.id" class="border-2 border-white rounded px-6 py-4 mb-3">
        <div class="details">
          Account name: <span>{{ account.account_name }}</span>
        </div>
        <div class="details">
          Account number: <span>{{ account.account_number }}</span>
        </div>
        <div class="details">
          Account type: <span>{{ accountType[account.personal] }} account</span>
        </div>
        <div class="details">
          Bank name: <span>{{ account.bank.bank_name }}</span>
        </div>
      </div>
    </div>
  </AuthTemplate>
</template>
<script>

import AuthTemplate from '@/components/templates/auth'

export default {
  name: 'AccountDetails',
  middleware: 'auth',
  components: {
    AuthTemplate
  },
  async fetch () {
    this.$axios.setToken(this.$auth.$storage._state['_token.local'])
    const { payload } = await this.$axios.$get('/accounts')
    this.accounts = payload
  },
  data: () => ({
    accounts: [],
    show: false,
    accountType: {
      yes: 'Personal',
      no: 'Beneficiary'
    }
  }),
  head () {
    return {
      title: 'Account details',
      meta: [
        { hid: 'description', name: 'description', content: 'Airtimeflip user\'s bank account details page' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .details {
    @apply text-xl font-medium text-white text-shadow
  }

  .details span {
    @apply text-base font-normal text-international-orange
  }
</style>
