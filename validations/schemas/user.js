
import Joi from '@hapi/joi'
import formatError from '../error-formatter'

const getSignUpSchema = (fields) => {
  /**
   * Remember to keep/maintain the order of the schemas
   * according to how the fields appear in the form.
   * This is because we need to focus the cursor on the first field in the error list
   */
  return Joi.object()
    .keys(nameSchema('fullname', 'Full name'))
    .keys(usernameSchema())
    .keys(emailSchema())
    .keys(phoneSchema())
    .keys(passwordSchema())
    .keys(confirmPassword(fields))
}

const getSignInSchema = () => {
  return Joi.object().keys({
    identity: Joi.string()
      .trim()
      .lowercase()
      .required()
      .label('Email or username')
      .messages({
        'string.empty': 'E-mail address cannot be empty'
      }),
    password: Joi.string()
      .required()
  })
}

const emailSchema = (message) => {
  return {
    email: Joi.string()
      .trim()
      .required()
      .email({ tlds: { allow: false } })
      .max(30)
      .label('Email address')
      .error(errors => formatError(errors, 'Email address', message))
      .lowercase()
  }
}

const phoneSchema = (options = {}) => {
  const label = 'Phone number'
  const schema = {
    number: Joi.string()
      .trim()
      .required()
      .custom((value, helper) => {
        const pattern = /(^(([+]{0,1}|([0]{2}[9]{1}))[1-9]{1,3}|[0]{0,1})[7-9]{1}[0-1]{1}[0-9]{8})$/

        if (pattern.test(value)) {
          return value
        }
        return helper.message(`${label} is not valid`)
      })
      .label(label)
      .error(errors => formatError(errors))
  }

  return schema
}

const passwordSchema = () => {
  return {
    password: Joi.string()
      .trim()
      .required()
      .min(8)
      .max(60)
      .label('Password')
      .error(errors => formatError(errors))
  }
}

const confirmPassword = (fields) => {
  return {
    password_confirmation: Joi.string()
      .required()
      .custom((value, helper) => {
        if (value !== fields.password_confirmation) {
          return helper.message('Confirm password mismatch')
        }
        return value
      })
      .label('Confirm password')
      .error(errors => formatError(errors))
  }
}

const usernameSchema = () => {
  return {
    username: Joi.string()
      .required()
      .min(3)
      .error(errors => formatError(errors))
  }
}

const nameSchema = (path, label) => {
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
      .error(errors => formatError(errors))
  }
}

export default {
  getSignUpSchema,
  getSignInSchema
}
