<template>
  <header>
    <div class="warper">
      <ul class="menu">
        <li class="menu-item ">
          <nuxt-link to="/" class="menu-item">
            <img id="logoHeader" src="../../assets/img/logo.svg" alt="">
          </nuxt-link>
        </li>
        <li class="menu-item ">
          <div class="menu-link itemMenu">
            <nuxt-link to="/product/" class="menu-item">
              Sản phẩm
            </nuxt-link>
          </div>
          <div class="menu-link itemMenu">
            <nuxt-link to="/service/" class="menu-item">
              Dịch vụ khách hàng
            </nuxt-link>
          </div>
          <div class="menu-link itemMenu">
            <nuxt-link to="/about/" class="menu-item">
              Về Mirae Asset Prévoir
            </nuxt-link>
          </div>
          <div class="menu-link itemMenu">
            <nuxt-link to="/news/" class="menu-item">
              Tin tức
            </nuxt-link>
          </div>
          <div class="menu-link btn ">
            Mua bảo hiểm trực tuyến
          </div>
          <div v-b-toggle.sidebar-right class="menu-icon_mobile" @click="btnMenu">
            <img id="iconMenum" src="../../assets/img/menu-icon.svg" alt="error">
          </div>
          <div class="menu-link item-language ">
            <div class="language-List itemMenu">
              <img id="vn" src="@/assets/img/vn.gif" alt="error-VN">
              <!--              <img id="en" src="@/assets/img/language.svg" alt="error-Language">-->
              <!--              <b-form-select v-model="selected" :options="options" />-->
            </div>
          </div>
        </li>
      </ul>
      <b-sidebar id="sidebar-right" right shadow>
        <ul class="menu-link">
          <router-link to="/product/" class="menu-item_product menuTxt">
            <li class="mobile-item">
              <div class="menu-item_product item-link" @click="isOfMenu">
                Sản phẩm
              </div>
            </li>
          </router-link>
          <router-link to="/service/" class="menu-item_service">
            <li class="mobile-item">
              <div class="menu-item_service item-link" @click="isOfMenu">
                Dịch vụ khách hàng
              </div>
            </li>
          </router-link>
          <router-link to="/about/" class="menu-item_aboutMirae item-link">
            <li class="mobile-item" @click="isOfMenu">
              Về Mirae Asset Prévoir
            </li>
          </router-link>
          <router-link to="/news/" class="menu-item_news item-link">
            <li class="mobile-item" @click="isOfMenu">
              Tin tức
            </li>
          </router-link>

          <li class="mobile-item">
            <div class="btn-buy">
              <div class="btn-buy_insurance mobile-item" @click="isOfMenu">
                Mua bảo hiểm trực tuyến
              </div>
            </div>
          </li>
        </ul>
      </b-sidebar>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      selected: null

    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
