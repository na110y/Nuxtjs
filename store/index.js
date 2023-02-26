export * from './about'
export * from './homeSlide'
export * from './news'
export * from './product'
export const state = () => ({
  homeSlide: [],
  newsPage: [],
  productImage: [],
  clientPage: [],
  productDetail: {}
})
export const mutations = {
  // SET_SLIDE_HOME
  SET_SLIDE_HOME (state, homeSlide) {
    state.homeSlide = homeSlide
  },
  // homeSProductDetail
  SET_PRODUCT_DETAIL (state, data) {
    state.productDetail = data
  },
  // SET_PRODUCT
  SET_PRODUCT (state, productImage) {
    state.productImage = productImage
  },
  // SET_CLIENT
  SET_CLIENT (state, clientPage) {
    state.clientPage = clientPage
  },
  // SET_NEWS
  SET_NEWS (state, newsPage) {
    state.newsPage = newsPage
  }
}
export const actions = {
  // setSlideHome
  async setSlideHome ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/banner/get-home-banner?sort=order')
    commit('SET_SLIDE_HOME', res.data)
  },
  // setProduct
  async setProduct ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/featured-product-categories')
    commit('SET_PRODUCT', res.data)
  },
  // setClient
  async setClient ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/featured-service')
    commit('SET_CLIENT', res.data)
  },
  // setNews
  async setNewsPage ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/fe-get-post')
    commit('SET_NEWS', res.data)
  }
}
export const getters = {
  // homeSlide
  homeSlide (state) {
    return state.homeSlide
  },
  // productApi
  productApi (state) {
    return state.productImage
  },
  // clientApi
  clientApi (state) {
    return state.clientPage
  },
  // newsApi
  newsApi (state) {
    return state.newsPage
  }
}
