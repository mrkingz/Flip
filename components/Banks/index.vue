<template>
  <Select
    :id="id"
    icon="university"
    prompt="Bank name"
    name="bank_name"
    :value="value"
    :error="error"
    :changeHandler="changeHandler"
    :options="banks"
  />
</template>
<script>

import Select from '@/components/forms/fields/select'
import mixins from '@/components/forms/fields/mixins'

export default {
  name: 'SelectBanks',
  components: {
    Select
  },
  mixins: [mixins],
  props: {
    banks: {
      type: Array,
      required: true
    }
  }
}
</script>
