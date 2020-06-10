<template>
  <FieldWrapper
    :id="id"
    :error="error"
    :label="label"
    :icon="icon"
  >
    <template>
      <input
        :id="id"
        :ref="id"
        class="form-field"
        :type="type"
        :value="value"
        :placeholder="$utils.capitalize(placeholder)"
        :autocomplete="autocomplete"
        @input="changeHandler"
      >
    </template>
  </FieldWrapper>
</template>
<script>

import mixins from '@/components/forms/fields/mixins'
import FieldWrapper from '@/components/forms/fields/field-wrapper'

export default {
  name: 'TextField',
  components: {
    FieldWrapper
  },
  mixins: [mixins],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: 'off'
    }
  }
}
</script>
