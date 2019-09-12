export default ({ store, redirect, route }) => {
  // Редирект на /login, если нет авторизации
  if (route.path === '/edit') {
    setTimeout(function() {
      if (!store.state.auth) {
        redirect('/login')
      }
    }, 1)
  }
}
