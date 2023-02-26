<script src="../nuxt.config.js"></script>
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
        <b-carousel-slide v-for="(homePage, index) in homePage.data" :key="index" caption="First slide">
          <template #img>
            <div class="slideHome" >
              <img id="homeSlide"
                :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + jsonParse(homePage.image)[0]"
                alt="errorSlide"
                />
            </div>
          </template>
        </b-carousel-slide>
      </b-carousel>
      <div class="slide">
        <div class="search-Image">
          <ul class="content-search">
            <li class="content-search_txt">
              <p>
                Sản phẩm <span>Bảo hiểm nhân thọ của MAP Life</span> được thiết kế để phù
                hợp với nhu cầu nhu cầu nhu cầu của bạn
              </p>
            </li>
            <li class="content-search_txt">
              <div class="input-search">
                <input
                  type="text"
                  :placeholder="placeholder"
                  :link="link"
                  v-model="item.key"
                  id="searchBuy"
                  @click="toggleDrop"
                />
                <img
                  src="../assets/img/dropdown.svg"
                  alt="error-dropdown"
                  id="dropSearch"
                  @click="toggleDrop"
                />
              </div>
              <div class="btn-search">Khám phá</div>
              <div class="combbSlide" v-if="isShowDrop">
                <ul class="combobox-homePage"
                    v-for="drdwn in records"
                    :key="drdwn.key"
                    :value="drdwn.key">
                  <li class="combobox-item" @click="selectItem(drdwn.key)">{{ drdwn.value }}</li>
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
          <div class="body_title-subject">Sản phẩm nổi bật</div>
          <div class="body_title-txt">Khám phá các giải pháp tài chính</div>
        </div>
        <div class="flex-viewport">
          <div class="body_column">
            <div class="body_column-link" v-for="(item, index) in productPage.data" :key="index" @click="activeClickType(item.id)">
              <div class="body_column-image">
                <img
                  :src="
                  'https://api-map-life.grooo.com.vn/files/media/base/' +
                  jsonParse(item.image)[0]
                "
                  alt="error-image"
                  id="body_column-image"
                />
              </div>
              <div class="column-txt" >
                <div class="body_column-title">{{ isType(item.name) }}</div>
                <div class="body_column-txt">
                  {{ isType(item.description) }}
                </div>
                <div class="body_column-last">
                  <nuxt-link to="/product/">
                    <div class="column-last_txt">Xem chi tiết</div>
                  </nuxt-link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="content-service" >
        <div class="content-service_column" >
          <div class="column_service">
            <div class="column-service">
              <div class="column-service_title">Dịch vụ khách hàng</div>
              <div class="column-service_txt">
                Giải đáp những thắc mắc của khách hàng, chúng tôi cam kết mang đến trải nghiệm dịch vụ tối ưu: <span>Nhanh chóng - Hữu ích</span>
              </div>
              <div class="column-service_btn">
                <nuxt-link to="/service/serviceList" >
                  <span class="btn-service">Các dịch vụ khác</span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="serviceLink-item serviceLink-item2"
               v-for="(item,index) in ClientPage.data"
               :key="index"
               @click="activeClickType(item.id)">
            <div class="serviceLink-item_icon">
              <img
                :src="'https://api-map-life.grooo.com.vn/files/media/base/' +
                  jsonParse(item.icon)[0]"
                alt="error-insurance"
                id="serviceLink-item_icon"
              />
            </div>
            <div class="serviceLink-item_body">
              <div class="serviceLink-item_title">{{ isType(item.name) }}</div>
              <div class="serviceLink-item_txt"
                   :class="{ 'activeStyle': activeClick === item.id }"
              >{{ isType(item.description) }}</div>
              <div class="serviceLink-item_last">
                <nuxt-link to="/client/clientList">
                  <p class="serviceLink-item-detail">Xem chi tiết</p>
                </nuxt-link>
              </div>
            </div>
          </div>

        </div>
        <div class="content-service_image">
          <img
            srcset="../assets/img/img-service.png 2x"
            alt="error-service"
            id="service_image"
          />
          <div class="content-service_buy"></div>
          <div class="service_title">
            <div class="service_buy_title">
              <div class="service_buy-txt">Mua bảo hiểm trực tuyến</div>
              <span class="service_buy-btn">Mua ngay</span>
            </div>
          </div>
        </div>
      </div>
      <div class="content-news">
        <div class="content-news_title">
          <div class="news_title">Tin tức mới nhất</div>
        </div>
        <div class="content-news_img">
          <div class="news_img-column" v-for="(news,index) in newsPage.data" :key="index">
            <div class="img-column">
              <img
                :src="'https://api-map-life.grooo.com.vn/files/media/base/' + jsonParse(news.image)[0]"
                alt="erro-imgFamily"
                id="img-column"
              />
            </div>
            <div class="news-item_body">
              <div class="news-item">
                <div class="news-title">{{ isType(news.title) }}</div>
                <div class="news-txt">{{ isType(news.description) }}</div>
              </div>
              <a href="#" class="post-item__link">
                <nuxt-link :to="`/news/${news.id}`">
                  <div class="post-item__link-txt">Xem chi tiết</div>
                </nuxt-link>
              </a>
            </div>
          </div>
        </div>
        <div class="news-detailAll">
          <nuxt-link to="/news/">
            <div class="newsList-All">
              <div class="newsList-all_txt">Xem tất cả tin tức</div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="content-last">
        <div class="content-last_img">
          <img
            srcset="../assets/img/img-contentLast.png 2x"
            alt="error-imgContentLast"
            id="content-last_img"
          />
        </div>
        <div class="content-last_flex">
          <div class="content-last_ipIpadt">
            <div class="Available-ipad">
              <div class="Available-ipad_txt">
                <div class="arrow arrow-down"></div>
                <span class="ipad_txt"> Available</span>
              </div>

              <img srcset="../assets/img/iPad.png 2x" alt="error-imgIpad" id="ipad"/>
            </div>
            <div class="Available-ip">
              <div class="Available-ip_txt">
                <div class="arrow1 arrow-down1"></div>
                <span class="ip_txt"> Available </span>
              </div>
              <img
                srcset="../assets/img/iPhone.png 2x"
                alt="error-imgIphone"
                id="iphone"
              />
            </div>
          </div>
          <div class="content-last_txt">
            <div class="title-review">
              Dễ dàng quản lý hợp đồng, thanh toán phí bảo hiểm, tích điểm đổi quà cùng nhiều tiện ích khác tại Ứng dụng di động phục vụ khách hàng MAP Life App.
            </div>
            <div class="txt-review">Ứng dụng phục vụ khách hàng</div>
            <div class="shopPhone">
              <a href="#" class="appStore">
                <img
                  srcset="../assets/img/appStore.png 2x"
                  alt="error-imgAppstore"
                  id="shopPhone"
                />
              </a>
              <a href="#" class="googlePlay">
                <img
                  srcset="../assets/img/googlePlay.png 2x"
                  alt="error-imgGooglePlay"
                  id="googlePlay"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="scrollTop">
          <a href="#">
            <img src="../assets/img/scrollTop.svg" alt="error">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import validate from '../utils/validate'
import dropdown from '~/assets/base/dropdown.vue'
// import { Swiper, SwiperSlide } from 'swiper/vue';
import 'vueperslides/dist/vueperslides.css'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    dropdown,
    // Swiper,
    // SwiperSlide
    // validate
  },
  props: {
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      frontVN: null,
      activeClick: null,
      item: {},
      isShowDrop: false
    }
  },
  computed: {
    // truyền data cho Combobox thông qua props
    records () {
      return [
        {
          key: 1,
          value: 'Sản phẩm nổi bật',
          placeholder: 'Sản phẩm nổi bật',
          link: `<nuxt-link :to="/product/"></nuxt-link>`
        },
        {
          key: 2,
          value: 'Mua bảo hiểm trực tuyến',
          placeholder: 'Mua bảo hiểm trực tuyến'
        },
        {
          key: 3,
          value: 'Tin tức mới nhất',
          placeholder: 'Tin tức mới nhất'
        }
      ]
    },
    /**
     * @description: hàm này dùng để lấy dữ liệu khách hàng từ store
     * Author: NSDThinh 21/02/2023
     */
    ClientPage () {
      return this.$store.state.clientPage
    },
    /**
     * @description: hàm này dùng để lấy ảnh slide page từ store
     * Author: NSDThinh 21/02/2023
     */
    homePage () {
      return this.$store.state.homeSlide
    },
    /**
     * @description: hàm này dùng để giá trị sản phẩm từ store
     * Author: NSDThinh 21/02/2023
     */
    productPage () {
      return this.$store.state.productImage
    },
    /**
     * @description: hàm này dùng để giá trị từ store
     * Author: NSDThinh 25/02/2023
     */
    newsPage () {
      return this.$store.state.newsPage
    }
  },
  created () {
  },
  mounted () {
    /**
     * @description: client ( khách hàng )
     * Author: NSDThinh 24/02/2023
     */
    this.$store.dispatch('setClient')
    /**
     * @description: homeslide ( imageSlide )
     * Author: NSDThinh 21/02/2023
     */
    this.$store.dispatch('setSlideHome')
    /**
     * @description: product ( sản phẩm )
     * Author: NSDThinh 21/02/2023
     */
    this.$store.dispatch('setProduct')
    /**
     * @description: news ( tin tức mới nhất )
     * Author: NSDThinh 25/02/2023
     */
    this.$store.dispatch('setNewsPage')
  },
  methods: {
    isToggle (isShowDrop) {
      this.isShowDrop = isShowDrop
    },
    toggleDrop () {
      this.isToggle(true)
    },
    selectItem (key) {
      this.item.key = key
      this.item.key = this.formatEnum(key)
      this.isToggle(false)
    },
    // hàm này dùng để format giá trị key của value
    formatEnum (key) {
      switch (key) {
        case 1:
          return 'Sản phẩm nổi bật'
        case 2:
          return 'Mua bảo hiểm trực tuyến'
        case 3:
          return 'Tin tức mới nhất'
      }
    },
    /**
     * @description: hàm này dùng để hiển thị hết tất cả dòng chữ của text
     * Author: NSDThinh 21/02/2023
     */
    activeClickType (id) {
      this.activeClick = id
    },
    // biến đổi sang dạng json
    jsonParse (value) {
      if (value) {
        return JSON.parse(value)
      }
      return ''
    },
    /**
     * @description: hàm này dùng để bỏ ngoặc string trong text
     * Author: NSDThinh 21/02/2023
     */
    isType (string) {
      JSON.parse(string)
      {
        const obj = JSON.parse(string)
        return obj.vn
      }
    }
  }

}
</script>
<style lang="scss" scoped>
@import "./assets/scss/main";
</style>
