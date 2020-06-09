export default ({ $axios, redirect }, inject) => {
  $axios.setBaseURL(process.env.API_URL)
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'Application/json'
      }
    }
  })
  inject('api', api)
}
