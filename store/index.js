export * from './about'
export * from './homeSlide'
export * from './news'
export * from './product'
export const state = () => ({
  homeSlide: [],
  newsPage: [],
  productImage: [],
  clientPage: [],
  productDetail: {},
  manganer: [],
  pressRelease: [], // thông cáo báo trí
  video: [],
  bankAbout: [
    {
      id:1,
      img:'https://api-map-life.grooo.com.vn/files/media/base/999f323a415cccc39eba96321d7345f5a888ed8d/K%C3%AAnh%20Ph%C3%A2n%20Ph%E1%BB%91i/ncb.png',
      title:'Ngân hàng Quốc Dân - NCB',
    },
    {
      id:2,
      img:'https://api-map-life.grooo.com.vn/files/media/base/999f323a415cccc39eba96321d7345f5a888ed8d/K%C3%AAnh%20Ph%C3%A2n%20Ph%E1%BB%91i/abb.png',
      title:'Ngân hàng An Bình - ABBank',

    },
    {
      id:3,
      img:'https://api-map-life.grooo.com.vn/files/media/base/999f323a415cccc39eba96321d7345f5a888ed8d/K%C3%AAnh%20Ph%C3%A2n%20Ph%E1%BB%91i/acb.png',
      title:'Ngân hàng Á Châu - ACB'
    },
    {
      id:4,
      img:'https://api-map-life.grooo.com.vn/files/media/base/999f323a415cccc39eba96321d7345f5a888ed8d/K%C3%AAnh%20Ph%C3%A2n%20Ph%E1%BB%91i/msb.jpg',
      title:'Ngân hàng Hàng Hải - MSB'

    },
    {
      id:5,
      img:'https://api-map-life.grooo.com.vn/files/media/base/999f323a415cccc39eba96321d7345f5a888ed8d/K%C3%AAnh%20Ph%C3%A2n%20Ph%E1%BB%91i/pvc.png',
      title:'Ngân hàng Đại Chúng - PVCombank'

    },
    {
      id:6,
      img:'https://api-map-life.grooo.com.vn/files/media/base/999f323a415cccc39eba96321d7345f5a888ed8d/K%C3%AAnh%20Ph%C3%A2n%20Ph%E1%BB%91i/tpb.png',
      title:'Ngân hàng Tiên Phong - TPBank'
    }
  ]
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
  // SET_VIDEO
  SET_VIDEO (state, video) {
    state.video = video
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
  async setVideo ({ commit }) {
    const res = await this.$axios
      .get(process.env.baseApiUrl + '/library/fe-about-library')
    commit('SET_VIDEO', res.data)
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
  },
  // manganerApi
  newsManganerApi (state) {
    return state.manganer
  },
  // pressReleaseApi
  pressReleaseApi (state) {
    return state.pressRelease
  },
  // videoApi
  videoAbout (state) {
    return state.video
  },
}
