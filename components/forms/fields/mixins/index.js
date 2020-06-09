export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    id: {
      type: String,
      required: true
    },
    changeHandler: {
      type: Function,
      required: true
    },
    error: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    mandatory: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: null
    }
  }
}
