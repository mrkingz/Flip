import validator from '@/validations/validator'

export default ({ app }, inject) => {
  inject('utils', {
    capitalize: string => (string && string.charAt(0).toUpperCase().concat(string.toLowerCase().substr(1))),
    validator: (schemaName, fields) => validator(schemaName, fields),
    formatError: error => Array.isArray(error) ? error[0] : error
  })
}
