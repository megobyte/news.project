export const state = () => ({
  // аутентификация
  auth: false,
  // массив записей
  blog: [],
  // последний ID
  last_id: 0
})

export const mutations = {
  /**
   * Авторизуемся
   */
  authMe(state) {
    state.auth = true
  },
  /**
   * Деавторизуемся
   */
  deauthMe(state) {
    state.auth = false
  },
  /**
   * Сохраняем запись
   */
  saveArticle(state, payload) {
    if (payload.id === 0) {
      // Это новый пост
      state.last_id += 1
      const article = {
        id: state.last_id,
        title: payload.title,
        content: payload.content,
        time: payload.time
      }
      state.blog.push(article)
    } else {
      // Это пост, который нужно обновить
      state.blog.forEach((e) => {
        if (e.id === payload.id) {
          e.title = payload.title
          e.content = payload.content
          e.time = payload.time
        }
      })
    }
  },
  /**
   * Удаляем запись
   */
  removeArticle(state, payload) {
    let index = -1
    state.blog.forEach((e, i) => {
      if (e.id === payload.id) index = i
    })
    state.blog.splice(index, 1)
  }
}

export const getters = {
  /**
   * Геттер записей в блоге, отсортированных по времени от новых к старым
   */
  blog(state) {
    const times = state.blog.map((e, i) => {
      return { index: i, time: e.time }
    })

    times.sort(function(a, b) {
      return b.time - a.time
    })

    return times.map((e) => {
      return state.blog[e.index]
    })
  }
}
