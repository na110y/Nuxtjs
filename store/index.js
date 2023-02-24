export const state = () => ({
  homeSlide: [],
  productImage: [],
  clientPage: []
})
export const mutations = {
  // homeSlide
  setSlideHome (state, homeSlide) {
    state.homeSlide = homeSlide
  },
  // product
  setProduct (state, productImage) {
    state.productImage = productImage
  },
  // client
  setClient (state, clientPage) {
    state.clientPage = clientPage
  }
}
export const actions = {
  // homeSlide
  async setSlideHome ({ commit }) {
    try {
      const res = await this.$axios
        .get('https://api-map-life.grooo.com.vn/banner/get-home-banner?sort=order')
      commit('setSlideHome', res.data)
    } catch (error) {
      console.log(error)
      return error
    }
  },
  // product
  async setProduct ({ commit }) {
    try {
      const res = await this.$axios
        .get('https://api-map-life.grooo.com.vn/featured-product-categories')
      commit('setProduct', res.data)
    } catch (error) {
      console.log(error)
      return error
    }
  },
  // client
  async setClient ({ commit }) {
    try {
      const res = await this.$axios
        .get('https://api-map-life.grooo.com.vn/featured-service')
      commit('setClient', res.data)
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
export const getters = {
  // homeSlide
  homeSlide (state) {
    return state.homeSlide
  },
  // product
  productApi (state) {
    return state.homeSlide
  },
  // client
  clientApi (state) {
    return state.clientPage
  }
}
