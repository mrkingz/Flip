import Joi from '@hapi/joi'
import formatError from '../error-formatter'

export const nameSchema = (path, label) => {
  return {
    [path]: Joi.string()
      .trim()
      .required()
      .max(30)
      .custom((value, helper) => {
        const pattern = /^[\w'\-,.][^0-9_¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/

        if (pattern.test(value)) {
          return value
        }
        return helper.message(`${label} is not valid`)
      })
      .lowercase()
      .label(label)
      .error(errors => formatError(errors))
  }
}
