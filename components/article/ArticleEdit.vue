<template lang="pug">
  .article-edit
    .error(v-if="error.length > 0", v-html="error.join('<br />')")
    label.post-title
      input(type="text", v-model="title", placeholder="Заголовок")
    label.post-content
      span Содержание:
      textarea(v-model="content")
    label(v-if="editing")
      input(type="checkbox", v-model="savetime")
      | Обновить время записи после редактирования
    .btns
      button(@click="save()") {{(editing) ? 'Сохранить' : 'Добавить'}}
      button(@click="$emit('cancel')", v-if="editing") Отменить
</template>

<script>
export default {
  name: 'ArticleEdit',
  props: {
    article: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      id: 0,
      title: '',
      content: '',
      time: 0,
      savetime: false,
      editing: false,
      error: []
    }
  },
  mounted() {
    // проверяем, передана ли запись в проп
    if (this.article.id) {
      this.id = this.article.id
      this.title = this.article.title
      this.content = this.article.content
      this.time = this.article.time
      this.editing = true
    }
  },
  methods: {
    /**
     * Сохранения записи
     */
    save() {
      this.error = []
      if (this.title === '') this.error.push('Вы не заполнили заголовок')
      if (this.content === '') this.error.push('Вы не заполнили содержание')
      if (this.error.length === 0) {
        let time =
          this.time > 0 ? this.time : parseInt(new Date().getTime() / 1000)
        // обновляем время, если стоит галочка
        if (this.savetime) time = parseInt(new Date().getTime() / 1000)
        this.$store.commit('saveArticle', {
          id: this.id,
          title: this.title,
          content: this.content,
          time
        })
        this.$emit('saved')
      }
    }
  }
}
</script>

<style lang="scss">
.article-edit {
  .post-title {
    input {
      width: 100%;
      font-size: 2em;
    }
  }

  .post-content {
    textarea {
      width: 100%;
      height: 200px;
    }
  }
}
</style>
