export default (context) => {
  if (context.store.state.auth.loggedIn) {
    return context.redirect('/accounts')
  }
}
