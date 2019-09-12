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
.articles {
  @include flex();
  justify-content: flex-start;
  align-items: flex-start;

  article {
    width: 100%;
  }
}
@media screen and (min-width: 1200px) {
  .articles {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    article {
      width: calc(50% - #{$gap / 2});
    }
  }
}
</style>
