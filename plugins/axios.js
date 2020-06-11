export default ({ app, $axios }, inject) => {
  console.log('=============== ', app.$env.API_URL)
  $axios.setBaseURL('https://test.airtimeflip.com/api/v1/')
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'Application/json'
      }
    }
  })
  inject('api', api)
}
