
import Joi from '@hapi/joi'
import formatError from '../error-formatter'
import { nameSchema } from '@/validations/schemas/common'

const getAccountSchema = (fields) => {
  /**
   * Remember to keep/maintain the order of the schemas
   * according to how the fields appear in the form.
   * This is because we need to focus the cursor on the first field in the error list
   */
  return Joi.object()
    .keys(nameSchema('account_name', 'Account name'))
    .keys(accountNumberSchema())
    .keys({
      bank_id: Joi.string().required()
    })
    .keys({
      personal: Joi.string()
        .required()
        .lowercase()
        .custom((value, helper) => {
          if (['no', 'yes'].includes(value.toLowerCase())) {
            return value
          }
          return helper.message('Please, select appropriate account type')
        })
    })
}

const accountNumberSchema = () => {
  return {
    account_number: Joi.string()
      .trim()
      .required()
      .min(10)
      .max(10)
      .label('Account number')
      .error(errors => formatError(errors, 'Account number'))

  }
}

export default {
  getAccountSchema
}
