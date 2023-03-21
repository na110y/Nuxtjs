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
              {{ $t('header.product') }}
            </nuxt-link>
          </div>
          <div class="menu-link itemMenu">
            <nuxt-link to="/service/" class="menu-item">
              {{ $t('header.service') }}
            </nuxt-link>
          </div>
          <div class="menu-link itemMenu">
            <nuxt-link to="/about/" class="menu-item">
              {{ $t('header.about') }}
            </nuxt-link>
          </div>
          <div class="menu-link itemMenu">
            <nuxt-link to="/news/" class="menu-item">
              {{ $t('header.news') }}
            </nuxt-link>
          </div>
          <div class="btn ">
            <nuxt-link to="/onInsurance/" class="menu-insurance">
              {{ $t('header.insurance') }}
            </nuxt-link>
          </div>
          <div v-b-toggle.sidebar-right class="menu-icon_mobile" title="open menu">
            <img id="iconMenum" src="../../assets/img/menu-icon.svg" alt="error">
          </div>
          <div class="menu-link menuLang">
            <select v-model="$i18n.locale" class="custom-select" @change="changeLanguage">
              <option value="vn" selected class="custom-option">
                vn
              </option>
              <option value="en" class="custom-option">
                en
              </option>
            </select>
          </div>
        </li>
      </ul>
      <b-sidebar id="sidebar-right" right shadow>
        <ul class="menu-link">
          <li class="mobile-item">
            <router-link to="/product/" class="menu-item_product menuTxt">
              {{ $t('header.product') }}
            </router-link>
          </li>
          <li class="mobile-item">
            <router-link to="/service/" class="menu-item_service">
              {{ $t('header.service') }}
            </router-link>
          </li>
          <li class="mobile-item">
            <router-link to="/about/" class="menu-item_aboutMirae item-link">
              {{ $t('header.about') }}
            </router-link>
          </li>
          <li class="mobile-item">
            <router-link to="/news/" class="menu-item_news item-link">
              {{ $t('header.news') }}
            </router-link>
          </li>

          <li class="mobile-item border-Mobile">
            <div class="btn-buy">
              <div class="btn-buy_insurance mobile-item ">
                <router-link to="/onInsurance/" class="menu-item_news item-link">
                  {{ $t('header.insurance') }}
                </router-link>
              </div>
            </div>
          </li>
          <li class="mobile-item">
            <div class="menu-link">
              <select v-model="$i18n.locale" @change="changeLanguage">
                <option value="vn" selected>
                  Vietnamese
                </option>
                <option value="en">
                  English
                </option>
              </select>
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
  data() {
    return {
      languageCode: ['vn', 'en'],
      selectedLocale: 'vn'
    }
  },
  computed: {

  },
  methods: {
    changeLanguage(locale) {
      // this.$store.commit('SET_LANG', locale)
      this.$store.dispatch('changeLanguage', locale)
    }

  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

</style>
