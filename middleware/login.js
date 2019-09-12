export default ({ store, redirect, route }) => {
  // Redirect the root/home page to login or dashboard based on auth state.
  if (route.path === '/login') {
    setTimeout(function() {
      if (store.state.auth) {
        redirect('/edit')
      }
    }, 1)
  }
}
