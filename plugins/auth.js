export default ({ $auth }) => {
  $auth.onError((error, name, endpoint) => {
    console.error(name, error, endpoint)
  })

  $auth.onRedirect((to, from) => {
    console.error(to, from)
    // you can optionally change `to` by returning a new value
  })
}
