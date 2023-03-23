<template>
  <div class="slidePageHome">
    <div class="slidePage">
      <b-carousel
        id="carousel-1"
        fade
        img-width="1920"
        img-height="450"
        :interval="4000"
        controls
        no-animation
      >
        <b-carousel-slide v-for="( slidePage, index ) in homePage.data" :key="index" caption="First slide">
          <template #img>
            <div class="slideHome">
              <img
                id="homeSlide"
                :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $vali.jsonParse(slidePage.image)[0]"
                alt="errorSlide"
              >
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
      <div class="slide">
        <div class="search-Image">
          <ul class="content-search">
            <li class="content-search_txt">
              <p>
                {{ $t('header.product') }} <span>{{ $t('content.LifeInsurance') }}</span> {{ $t('content.needsNeeds') }}
              </p>
            </li>
            <li class="content-search_txt">
              <div class="input-search">
                <input
                  id="searchBuy"
                  v-model="item.key"
                  type="text"
                  :placeholder="placeholder"
                  @click="toggleDrop"
                >
                <img
                  id="dropSearch"
                  src="../assets/img/dropdown.svg"
                  alt="error-dropdown"
                  @click="toggleDrop"
                >
              </div>

              <div class="btn-search">
                {{ $t('content.discover') }}
              </div>
              <div v-if="isShowDrop" class="combbSlide">
                <ul
                  v-for="drdwn in records"
                  :key="drdwn.url"
                  :value="drdwn.url"
                  class="combobox-homePage"
                >
                  <li
                    class="combobox-item"
                    @click="selectItem(drdwn.key)"
                  >
                    {{ drdwn.value }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content-body">
        <div class="body_title">
          <div class="body_title-subject">
            {{ $t('content.FeaturedProducts') }}
          </div>
          <div class="body_title-txt">
            {{ $t('content.Discoverfinancial') }}
          </div>
        </div>
        <div class="flex-viewport">
          <div class="body_column">
            <div v-for="(item, index) in productPage.data" :key="index" class="body_column-link">
              <div class="body_column-image" tabindex="1" @keydown.enter="handleProduct">
                <img
                  id="body_column-image"
                  :src="
                    'https://api-map-life.grooo.com.vn/files/media/base/' +
                      $vali.jsonParse(item.image)[0]
                  "
                  alt="error-image"
                >
              </div>
              <div class="column-txt">
                <div class="body_column-title">
                  {{ $t($vali.isType(item.name,$i18n.locale)) }}
                </div>
                <div class="body_column-txt">
                  {{ $t($vali.isType(item.description,$i18n.locale)) }}
                </div>
                <div class="body_column-last">
                  <nuxt-link to="/product/" :attrs="{ tabindex: '1' }">
                    <div class="column-last_txt" tabindex="2" @keydown.enter="handleProduct">
                      {{ $t('content.SeeDetails') }}
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-service">
        <div class="content-service_column">
          <div class="column_service">
            <div class="column-service">
              <div class="column-service_title">
                {{ $t('content.CustomerService') }}
              </div>
              <div class="column-service_txt">
                {{ $t('content.answers') }} <span>{{ $t('content.Fast') }}</span>
              </div>
              <div class="column-service_btn">
                <nuxt-link to="/service/" :attrs="{ tabindex: '1' }">
                  <span class="btn-service" tabindex="2" @keydown.enter="handleService">{{ $t('content.otherServices') }}</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            v-for="(item,index) in ClientPage.data"
            :key="index"
            class="serviceLink-item serviceLink-item2"
          >
            <div class="serviceLink-item_icon">
              <img
                id="serviceLink-item_icon"
                :src="'https://api-map-life.grooo.com.vn/files/media/base/' +
                  $vali.jsonParse(item.icon)[0]"
                alt="error-insurance"
              >
            </div>
            <div class="serviceLink-item_body">
              <div class="serviceLink-item_title">
                {{ $t($vali.isType(item.name,$i18n.locale)) }}
              </div>
              <div
                class="serviceLink-item_txt"
              >
                {{ $t($vali.isType(item.description,$i18n.locale)) }}
              </div>
              <div class="serviceLink-item_last" tabindex="2" @keydown.enter="handleService">
                <nuxt-link to="/service/">
                  <p class="serviceLink-item-detail">
                    {{ $t('content.SeeDetails') }}
                  </p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="content-service_image">
          <img
            id="service_image"
            srcset="../assets/img/img-service.png 2x"
            alt="error-service"
          >
          <div class="content-service_buy" />
          <div class="service_title">
            <div class="service_buy_title">
              <div class="service_buy-txt">
                {{ $t('content.insuranceNnline') }}
              </div>
              <nuxt-link to="/onInsurance/">
                <span class="service_buy-btn" tabindex="3" @keydown.enter="handleonInsurance">{{ $t('content.BuyNow') }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="content-news">
        <div class="content-news_title">
          <div class="news_title">
            {{ $t('content.LatestNews') }}
          </div>
        </div>
        <div class="content-news_img">
          <div v-for="(news,index) in newsPage.data" :key="index" class="news_img-column">
            <div class="img-column">
              <img
                id="img-column"
                :src="'https://api-map-life.grooo.com.vn/files/media/base/' + $vali.jsonParse(news.image)[0]"
                alt="error-imgFamily"
              >
            </div>
            <div class="news-item_body">
              <div class="news-item">
                <div class="news-title" :title="$t($vali.isType(news.title,$i18n.locale))">
                  {{ $vali.isTypeLang(news.title) }}
                </div>
                <div class="news-txt">
                  {{ $vali.isTypeLang(news.description) }}
                </div>
              </div>
              <a href="#" class="post-item__link">
                <nuxt-link :to="`/news/${ $t($vali.isType(news.slug,$i18n.locale))}`">
                  <div class="post-item__link-txt">{{ $t('content.SeeDetails') }}</div>
                </nuxt-link>
              </a>
            </div>
          </div>
        </div>
        <div class="news-detailAll">
          <nuxt-link to="/news/">
            <div class="newsList-All">
              <div class="newsList-all_txt">
                {{ $t('content.ViewAllNews') }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="content-last">
        <div class="content-last_img">
          <img
            id="content-last_img"
            srcset="../assets/img/img-contentLast.png 2x"
            alt="error-imgContentLast"
          >
        </div>
        <div class="content-last_flex">
          <div class="content-last_ipIpadt">
            <div class="Available-ipad">
              <div class="Available-ipad_txt">
                <div class="arrow arrow-down" />
                <span class="ipad_txt"> Available</span>
              </div>

              <img id="ipad" srcset="../assets/img/iPad.png 2x" alt="error-imgIpad">
            </div>
            <div class="Available-ip">
              <div class="Available-ip_txt">
                <div class="arrow1 arrow-down1" />
                <span class="ip_txt"> Available </span>
              </div>
              <img
                id="iphone"
                srcset="../assets/img/iPhone.png 2x"
                alt="error-imgIphone"
              >
            </div>
          </div>
          <div class="content-last_txt">
            <div class="title-review">
              {{ $t('content.txtLang') }}
            </div>
            <div class="txt-review">
              {{ $t('content.CustomerSeApplication') }}
            </div>
            <div class="shopPhone">
              <a href="#" class="appStore">
                <img
                  id="shopPhone"
                  src="../assets/img/appStore.png"
                  alt="error-imgAppstore"
                >
              </a>
              <a href="#" class="googlePlay">
                <img
                  id="googlePlay"
                  src="../assets/img/googlePlay.png"
                  alt="error-imgGooglePlay"
                >
              </a>
            </div>
          </div>
        </div>

        <div class="scrollTop" @click="scrollToTop">
          <img src="../assets/img/scrollTop.svg" alt="error">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line import/order
import dropdown from '~/components/base/dropdown.vue'
import 'vueperslides/dist/vueperslides.css'
// eslint-disable-next-line import/order
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    dropdown
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      frontVN: null,
      item: {
        key: ''
      },
      isShowDrop: false,
      tabindex: false
    }
  },
  computed: {
    // truyền data cho Combobox thông qua props
    records() {
      return [
        {
          key: 1,
          value: this.$t('combobox.FeaturedProducts'),
          placeholder: this.$t('combobox.FeaturedProducts'),
          url: '/product/'
        },
        {
          key: 2,
          value: this.$t('combobox.LatestNews'),
          placeholder: this.$t('combobox.LatestNews'),
          url: '/news/'
        },
        {
          key: 3,
          value: this.$t('combobox.CustomerService'),
          placeholder: this.$t('combobox.CustomerService'),
          url: '/service/'
        },
        {
          key: 4,
          value: this.$t('combobox.AboutMirae'),
          placeholder: this.$t('combobox.AboutMirae'),
          url: '/about/'
        }
      ]
    },
    ...mapState({
      ClientPage: state => state.clientPage, // dùng để lấy dữ liệu khách hàng từ store
      homePage: state => state.homeSlide, // dùng để lấy ảnh slide page từ stor
      productPage: state => state.productImage, // dùng để giá trị sản phẩm từ store
      newsPage: state => state.newsPage // dùng để giá trị từ store
    })
  },
  created() {
  },
  mounted() {
    // eslint-disable-next-line no-unused-expressions
    this.setClient() // dịch vụ sản phẩm
    this.setSlideHome() // slide page
    this.setProduct() // sản phẩm nổi bật
    this.setNewsPage() // tin tức mới nhất
  },
  methods: {
    handleProduct(event) {
      if (event.keyCode === 13) {
        this.$router.push('/product/')
      }
    },
    handleService(event) {
      if (event.keyCode === 13) {
        this.$router.push('/service/')
      }
    },
    handleonInsurance(event) {
      if (event.keyCode === 13) {
        this.$router.push('/onInsurance/')
      }
    },
    ...mapActions({
      setClient: 'setClient',
      setSlideHome: 'setSlideHome',
      setProduct: 'setProduct',
      setNewsPage: 'setNewsPage'
    }),
    // sau khi click trang sẽ được di chuyển lên đầu
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    // gán sự kiện show hide cho danh sách tìm kiếm
    isToggle(isShowDrop) {
      this.isShowDrop = isShowDrop
    },
    toggleDrop() {
      this.isToggle(true)
    },
    // click chuột chọn đến danh sách tìm kiếm sản phẩm
    selectItem(key) {
      this.item.key = key
      this.item.key = this.$vali.formatEnum(key)
      const record = this.records.find(r => r.key === key)
      this.$router.push(record.url)
      this.isToggle(false)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./assets/scss/main";
</style>
