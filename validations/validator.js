
import Joi from '@hapi/joi'
import user from './schemas/user'

const validator = async (type, fields) => {
  try {
    const schemas = {
      signup: user.getSignUpSchema(fields),
      signin: user.getSignInSchema()
    }
    const value = await Joi.attempt(fields, schemas[type], { abortEarly: false })
    return { hasError: false, fields: value }
  } catch (err) {
    const errors = {}
    if (err.details) {
      err.details.forEach((err) => {
        errors[err.path[0]] =
              errors[err.path[0]] || err.message.replace(/"/g, '')
      })
      return { hasError: true, errors }
    }
    throw err
  }
}
export default validator
