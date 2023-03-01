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
            <img src="@/assets/img/language.svg" alt="error-Language">
            <img id="dropdown" src="@/assets/img/dropdown.svg" alt="error-dropdown">
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/main.scss";
</style>
