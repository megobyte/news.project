<template lang="pug">
  section.index
    .articles
      template(v-for="article in blog")
        Article(:article="article")
</template>

<script>
import { mapGetters } from 'vuex'
import Article from '~/components/article/Article'

export default {
  components: {
    Article
  },
  computed: {
    ...mapGetters(['blog'])
  }
}
</script>

<style lang="scss">
section.index {
  .posts {
    article {
      @include flex(row);
      justify-content: flex-start;

      .time {
        margin-right: 15px;
      }
    }
  }
}
</style>
