export const state = () => ({
  homeSlide: [],
  newsPage: [],
  productImage: [],
  clientPage: [],
  productDetail: {},
  manganer: [],
  financialReport: [],
  pressRelease: [], // thông cáo báo trí
  bankAbout: [],
  prizeList: []
})
export const mutations = {
  // SET_SLIDE_HOME
  SET_SLIDE_HOME (state, homeSlide) {
    state.homeSlide = homeSlide
  },
  // SET_PRODUCT_DETAIL
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
  },
  // SET_MANGANER
  SET_MANGANER (state, manganer) {
    state.manganer = manganer
  },
  // SET_PRESSRELEASE
  SET_PRESSRELEASE (state, pressRelease) {
    state.pressRelease = pressRelease
  },
  // SET_FINANCIAL
  SET_FINANCIAL (state, financialReport) {
    state.financialReport = financialReport
  },
  // SET_PRIZELIST
  SET_PRIZELIST (state, prizeList) {
    state.prizeList = prizeList
  },
  // SET_BANK
  SET_BANK (state, bankAbout) {
    state.bankAbout = bankAbout
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
  },
  async setManganAbout ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/bod/fe-list-bod')
    commit('SET_MANGANER', res.data)
  },
  async setPressRelease ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/post/fe-press-release')
    commit('SET_PRESSRELEASE', res.data)
  },
  async setFinancial ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/financial-report/fe-list-report?limit=10')
    commit('SET_FINANCIAL', res.data.data)
  },
  async setPrizeList ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/post/fe-list-award?limit=8')
    commit('SET_PRIZELIST', res.data.data)
  },
  async setBank ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/distributor/fe-channel-category')
    commit('SET_BANK', res.data.data)
  }

}
export const getters = {
  // homeSlide
  homeSlideApi (state) {
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
  },
  // manganerApi
  newsManganerApi (state) {
    return state.manganer
  },
  // pressReleaseApi
  pressReleaseApi (state) {
    return state.pressRelease
  },
  // financialReport
  financialApi (state) {
    return state.financialReport
  },
  // financialReport
  prizeListApi (state) {
    return state.prizeList
  },
  // financialReport
  bankApi (state) {
    return state.prizeList
  }
}
