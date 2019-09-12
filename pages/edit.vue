<template lang="pug">
  section.edit
    button.add(@click="add_article = true") Добавить запись
    .articles
      template(v-for="article in blog")
        Article(:article="article")
          .btns
            button(@click="editArticle(article)") Редактировать
            button.remove(@click="removeArticlePopup(article)") Удалить
    Popup(title="Добавить запись", v-if="add_article", @close="add_article = false")
      article-edit(@saved="add_article = false")
    Popup(title="Изменить запись", v-if="edit_article", @close="closeEdit")
      article-edit(:article="article", @saved="closeEdit", @cancel="closeEdit")
    Popup(title="Удалить запись", v-if="remove_article", @close="closeRemove")
      h2 Вы действительно хотите удалить запись "{{article.title}}"?
      .btns
        button.remove(@click="removeArticle") Удалить
        button(@click="closeRemove") Отмена
</template>

<script>
import { mapGetters } from 'vuex'
import Popup from '~/components/Popup'
import ArticleEdit from '~/components/article/ArticleEdit'
import Article from '~/components/article/Article'

export default {
  components: {
    Popup,
    ArticleEdit,
    Article
  },
  data() {
    return {
      add_article: false,
      edit_article: false,
      remove_article: false,
      article: {}
    }
  },
  computed: {
    auth() {
      return this.$store.state.auth
    },
    ...mapGetters(['blog'])
  },
  methods: {
    /**
     * Попап редактирования статьи
     */
    editArticle(article) {
      this.article = article
      this.edit_article = true
    },
    /**
     * Закрываем попап редактирования статьи
     */
    closeEdit() {
      this.edit_article = false
      this.article = {}
    },
    /**
     * Попап удаления статьи
     */
    removeArticlePopup(article) {
      this.article = article
      this.remove_article = true
    },
    /**
     * Удаляем статью
     */
    removeArticle() {
      this.$store.commit('removeArticle', { id: this.article.id })
      this.closeRemove()
    },
    /**
     * Закрываем попап удаления статьи
     */
    closeRemove() {
      this.remove_article = false
      this.article = {}
    }
  }
}
</script>

<style lang="scss">
section.edit {
  .add {
    margin-bottom: $gap * 2;
  }

  .articles {
    button.remove {
      background: none;
      color: rgb(207, 3, 3);

      &:hover {
        background: #f00;
        color: #fff;
      }
    }
  }
}
</style>
