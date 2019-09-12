<template lang="pug">
  article(:id="'post-'+article.id")
    h2 {{article.title}}
    .time {{time}}
    .content(v-html="article.content")
    slot
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      default() {
        return {
          id: 0,
          time: 0,
          title: '',
          content: ''
        }
      }
    }
  },
  computed: {
    /**
     * Конвертация времени из unixtime в человеческий вид
     */
    time() {
      const date = new Date(this.article.time * 1000)
      const month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      const hours =
        date.getHours() + 1 < 10
          ? '0' + (date.getHours() + 1)
          : date.getHours() + 1
      const minutes =
        date.getMinutes() + 1 < 10
          ? '0' + (date.getMinutes() + 1)
          : date.getMinutes() + 1
      return (
        date.getDate() +
        '.' +
        month +
        '.' +
        date.getFullYear() +
        ' в ' +
        hours +
        ':' +
        minutes
      )
    }
  }
}
</script>

<style lang="scss">
article {
  border-bottom: 1px dotted #eee;
  margin-bottom: $gap;

  h2 {
    margin: 0;
    padding: 0;
    margin-bottom: $gap;
    font-weight: normal;
  }

  .time {
    font-size: 0.8em;
    font-style: italic;
    margin-bottom: $gap;
  }

  .content {
    padding-bottom: $gap;
    line-height: 1.4em;
  }

  .btns {
    margin-bottom: $gap;
  }
}
</style>
