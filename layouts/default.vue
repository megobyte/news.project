<template lang="pug">
  .layout
    .menu
      nuxt-link(to="/") Главная
      template(v-if="auth")
        nuxt-link(to="/edit") Редактирование статей
        a.right(@click="$store.commit('deauthMe')") Выход
      template(v-else)
        nuxt-link.right(to="/login") Вход
    nuxt
</template>
<script>
export default {
  computed: {
    auth() {
      return this.$store.state.auth
    }
  }
}
</script>
<style lang="scss">
body {
  font-family: $font;
  font-size: 14px;
  color: $text;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

a {
  color: $link;
  text-decoration: underline;
}

label {
  display: block;
  margin-bottom: 15px;

  span {
    display: block;
    margin-bottom: 5px;
  }

  input[type='text'] {
    width: 250px;
    padding: 5px 0;
  }
}

button {
  width: 250px;
  padding: 5px 0;
}

.menu {
  @include flex(row);
  width: 100%;
  justify-content: flex-start;
  padding: 15px;
  border-bottom: 1px solid #eee;

  a {
    display: block;
    margin-right: 25px;

    &.right {
      margin-left: auto;

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }

    &.nuxt-link-exact-active {
      font-weight: bold;
    }
  }
}

section {
  padding: 15px;
  max-width: 100%;
}

@media screen and (min-width: 992px) {
  section {
    max-width: 1200px;
  }
}
</style>
