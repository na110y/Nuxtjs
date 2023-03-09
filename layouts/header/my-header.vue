<template>
  <header>
    <div class="warper">
      <ul class="menu">
        <li class="menu-item">
          <nuxt-link to="/" class="menu-item">
            <img src="../../assets/img/logo.svg" alt="">
          </nuxt-link>
        </li>
        <li class="menu-item">
          <div class="menu-link">
            <nuxt-link to="/product/" class="menu-item">
              Sản phẩm
            </nuxt-link>
          </div>
          <div class="menu-link">
            <nuxt-link to="/service/" class="menu-item">
              Dịch vụ khách hàng
            </nuxt-link>
          </div>
          <div class="menu-link">
            <nuxt-link to="/about/" class="menu-item">
              Về Mirae Asset Prévoir
            </nuxt-link>
          </div>
          <div class="menu-link">
            <nuxt-link to="/news/" class="menu-item">
              Tin tức
            </nuxt-link>
          </div>
          <div class="menu-link btn">
            Mua bảo hiểm trực tuyến
          </div>
          <div class="menu-link item-language">
            <div class="language-List">
              <img id="vn" src="@/assets/img/vn.gif" alt="error-VN">
              <!--              <img id="en" src="@/assets/img/language.svg" alt="error-Language">-->
              <!--              <b-form-select v-model="selected" :options="options" />-->
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      selected: null
      // options: [
      //   { text: 'Vietnamese' },
      //   { text: 'English' }
      // ]
    }
  },
  methods: {
    // switchLanguage(locale) {
    //   this.$i18n.locale = locale
    // }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
