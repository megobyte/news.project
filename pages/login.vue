<template lang="pug">
  section.login
    .error(v-if="error.length > 0", v-html="error.join('<br />')")
    label
      span Логин:
      input(type="text", v-model="login", placeholder="Логин")
    label
      span Пароль:
      input(type="password", v-model="password", placeholder="Пароль")
    button(@click="authMe()") Войти
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: '',
      password: '',
      error: []
    }
  },
  computed: {
    auth() {
      return this.$store.state.auth
    }
  },
  methods: {
    /**
     * Аутентификация
     */
    authMe() {
      this.error = []
      if (this.login === '') this.error.push('Вы не заполнили логин')
      if (this.password === '') this.error.push('Вы не заполнили пароль')
      if (this.error.length === 0) {
        this.$store.commit('authMe')
        this.$router.push('/edit')
      }
    }
  }
}
</script>
