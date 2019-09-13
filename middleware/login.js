export default ({ store, redirect, route }) => {
  // Редирект на /edit, если есть авторизация
  if (route.name === 'login') {
    setTimeout(function() {
      if (store.state.auth) {
        redirect('/edit')
      }
    }, 1)
  }
}
