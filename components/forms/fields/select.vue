<template>
  <FieldWrapper
    :id="id"
    :error="error"
    :label="label"
    :icon="icon"
  >
    <template>
      <select
        :id="id"
        :ref="id"
        class="form-field"
        :value="value"
        @input="changeHandler"
      >
        <option value="">
          -- {{ prompt }} --
        </option>
        <option v-for="(option, index) in options" :key="index" :value="option.id">
          {{ option[name] }}
        </option>
      </select>
    </template>
  </FieldWrapper>
</template>
<script>

import mixins from '@/components/forms/fields/mixins'
import FieldWrapper from '@/components/forms/fields/field-wrapper'

export default {
  name: 'Select',
  components: {
    FieldWrapper
  },
  mixins: [mixins],
  props: {
    options: {
      type: Array,
      required: true
    },
    prompt: {
      type: String,
      default: null
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
