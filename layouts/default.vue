<template lang="pug">
  .layout
    .menu
      nuxt-link(to="/") Главная
      template(v-if="auth")
        nuxt-link(to="/edit") Редактирование статей
        a.right(@click="deauth") Выход
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
  },
  methods: {
    /**
     * Деавторизация
     */
    deauth() {
      this.$store.commit('deauthMe')
      this.$router.push('/')
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
  cursor: pointer;
}

label {
  display: block;
  margin-bottom: $gap;

  span {
    display: block;
    margin-bottom: 5px;
  }

  input[type='text'],
  input[type='password'] {
    width: 250px;
    padding: 5px 0;
  }
}

button {
  min-width: 150px;
  padding: $gap 0;
  -webkit-appearance: none;
  border: none;
  border-radius: 5px;
  background: #ccc;
  cursor: pointer;
  @include transition;

  &:hover {
    background: #eee;
  }

  &.remove {
    color: #fff;
    background: rgb(207, 3, 3);

    &:hover {
      background: #f00;
    }
  }
}

.btns {
  @include flex(row);
  justify-content: flex-end;

  button {
    margin-left: $gap;
  }
}

.error {
  margin-bottom: $gap;
  padding: $gap;
  background: rgb(228, 156, 156);
  border: 1px solid red;
  color: rgb(133, 4, 4);
}

.menu {
  @include flex(row);
  width: 100%;
  justify-content: flex-start;
  padding: $gap;
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
      text-decoration: none;
      color: $text;
    }
  }
}

section {
  padding: $gap;
  max-width: 100%;
}

@media screen and (min-width: 992px) {
  section {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
