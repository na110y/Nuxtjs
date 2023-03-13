<template>
  <div class="product-detail">
    <div class="product-list">
      <div class="product-list_img">
        <img id="spbanner" src="~/assets/img/spbanner.png" alt="error-SPBanner">
        <div class="product-list_title">
          Danh mục sản phẩm
        </div>
      </div>
    </div>
    <div class="product-detail_body">
      <b-card no-body class="flex-card">
        <b-tabs card>
          <b-tab title="Đặc điểm sản phẩm">
            <b-card-text>
              <div class="product-item_characteristic">
                <div class="product-charactersitic">
                  <div class="bodyItem_title bodyitem-Header">
                    {{ $validate.isType(product?.product_features?.[0].name) }}
                  </div>
                  <div class="bodyItem-txt">
                    <div class="bodyItem_txt" v-html="$validate.isType(product?.product_features?.[0].content)" />
                  </div>
                </div>
              </div>
              <div class="product-condition">
                <div class="contener">
                  <div class="product-charactersitic">
                    <div class="bodyItem_title">
                      {{ $validate.isType(product?.product_features?.[1].name) }}
                    </div>
                    <div class="bodyItem-txt">
                      <div class="bodyItem_txt" v-html="$validate.isType(product?.product_features?.[1].content)" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-advantage">
                <div class="product-charactersitic">
                  <div class="bodyItem_title">
                    {{ $validate.isType(product?.product_features?.[2].name) }}
                  </div>
                  <div class="bodyItem-txt">
                    <div class="bodyItem_txt" v-html="$validate.isType(product?.product_features?.[2].content)" />
                  </div>
                </div>
              </div>
              <div class="product-ask">
                <div class="ask-list">
                  <div class="colum-item_ask">
                    <div class="item_ask-title">
                      Liên hệ với chúng tôi
                    </div>
                    <div class="form-ask-item">
                      <label for="ht">Họ và tên <span class="fooAsk">*</span></label>
                      <input id="ht" type="text" placeholder="Nhập họ và tên">
                    </div>
                    <div class="form-ask-colum">
                      <div class="sdt">
                        <label for="sdt">Số điện thoại <span class="fooAsk">*</span></label>
                        <input id="sdt" type="text" placeholder="Nhập họ và tên">
                      </div>
                      <div class="city">
                        <label for="tp">Chọn thành phố <span class="fooAsk">*</span></label>
                        <dropdown
                          v-model="item.key"
                          :data="records"
                          :prop-key="item.key"
                          :prop-value="item.value"
                          :placeholder="placeholder"
                        />
                      </div>
                    </div>
                    <div class="form-ask-item">
                      <label for="email">Địa chỉ email <span class="fooAsk">*</span></label>
                      <input id="email" type="email" placeholder="Nhập địa chỉ email">
                    </div>
                    <div class="agree">
                      <div class="btn-radio">
                        <input id="checkBok" type="checkbox">
                        <div class="agree-txt">
                          Tôi đã đọc<span class="checkbox-txt">Chính sách bảo mật</span> và đồng ý để <span class="checkbox-txt">Mirae Asset Prévoir</span> được liên hệ cho các mục đích tư vấn, quảng cáo các sản phẩm, dịch vụ.
                        </div>
                      </div>
                    </div>
                    <div class="btnSubmit">
                      <div class="btn-submit">
                        Gửi thông tin
                      </div>
                    </div>
                  </div>
                  <div class="colum-item">
                    <img src="~/assets/img/lienhe.png" alt="errorLienhe">
                  </div>
                </div>
              </div>
              <div class="supplementary">
                <div class="supplementary-title">
                  Các sản phẩm bổ trợ
                </div>
                <div class="supplementary-item">
                  <carousel
                    id="listvideo"
                    :per-page="3"
                    :pagination-enabled="true"
                  >
                    <slide
                      v-for="(item, index) in productList"
                      id="itemVideo"
                      :key="index"
                    >
                      <div class="list-video" @click="scrollToTop">
                        <nuxt-link :to="`/product/${ $validate.isType(item.slug)}`">
                          <img
                            id="imageVideo"
                            :src="'https://api-map-life.grooo.com.vn/files/media/base/' +
                              $validate.jsonParse(item.image)"
                            alt="errorImage"
                            @click.prevent="btnClickItem(index)"
                          >
                        </nuxt-link>
                        <div class="list_icon-txt">
                          <nuxt-link :to="`/product/${ $validate.isType(item.slug)}`" class="list_icon-title">
                            <div class="list_icon-title" @click.prevent="btnClickItem(index)">
                              {{ $validate.isType(item.name) }}
                            </div>
                            <div class="list_icon-description" @click.prevent="btnClickItem(index)">
                              {{ $validate.isType(item.description) }}
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                    </slide>
                  </carousel>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Điều kiện tham gia">
            <b-card-text>
              <div class="product-condition">
                <div class="product-condition">
                  <div class="contener">
                    <div class="product-charactersitic">
                      <div class="bodyItem_title">
                        {{ $validate.isType(product?.product_features?.[0].name) }}
                      </div>
                      <div class="bodyItem-txt">
                        <div class="bodyItem_txt" v-html="$validate.isType(product?.product_features?.[0].content)" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Quyền lợi bảo hiểm">
            <b-card-text>
              <div class="product-advantage">
                <div class="product-advantage">
                  <div class="product-charactersitic">
                    <div class="bodyItem_title">
                      {{ $validate.isType(product?.product_features?.[1].name) }}
                    </div>
                    <div class="bodyItem-txt">
                      <div class="bodyItem_txt" v-html="$validate.isType(product?.product_features?.[1].content)" />
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
        <b-tabs card />
      </b-card>
    </div>
    <div class="scrollTop" @click="scrollToTop">
      <img src="~/assets/img/scrollTop.svg" alt="error">
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import { Carousel, Slide } from 'vue-carousel'
import dropdown from '~/components/base/dropdown.vue'
export default {
  name: 'ProductDetail',
  components: {
    dropdown,
    // eslint-disable-next-line vue/no-unused-components
    Carousel,
    // eslint-disable-next-line vue/no-unused-components
    Slide
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      product: {},
      item: {},
      productList: []
    }
  },
  computed: {
    // truyền data cho Combobox
    records () {
      return [
        {
          key: 1,
          value: 'Hà Nội',
          placeholder: 'Hà Nội'
        },
        {
          key: 2,
          value: 'Đà Nẵng',
          placeholder: 'Đà Nẵng'
        },
        {
          key: 3,
          value: 'Sài Gòn',
          placeholder: 'Sài Gòn'
        },
        {
          key: 4,
          value: 'Nha Trang',
          placeholder: 'Nha Trang'
        }
      ]
    }

  },
  watch: {},
  created () {
    this.getProductList()
  },
  mounted () {
    /**
     * @description: product
     * Author: NSDThinh 21/02/2023
     */
    this.getDataProductDetail()
  },
  methods: {
    /**
     * @description: sau khi click trang sẽ được di chuyển lên đầu
     * Author: NSDThinh 21/02/2023
     */
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    btnClickItem (index) {
      this.product = this.productList[index]
      // if (product) {
      //   this.$router.push({ path: `/product/${this.isType(product.slug)}` })
      // }
    },
    async getDataProductDetail () {
      const res = await this.$axios
        .get(process.env.baseApiUrl +
          `/fe-product-detail?slug=${this.$route.params.id}`)
      if (res) {
        this.product = res.data.data
      }
    },
    async getProductList () {
      const res = await this.$axios
        .get(process.env.baseApiUrl +
          '/fe-product-list?paging=1&limit=9&category_id=1&page=1')
      if (res) {
        this.productList = res.data.data.data
      }
    },
    isType (string) {
      try {
        JSON.parse(string)
        {
          const obj = JSON.parse(string)
          return obj.vn
        }
      } catch (err) {
        console.error(`Failed to parse JSON data: ${err.message}`)
        return null
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/variables";
.product-detail {
}
#spbanner {
  width: 100%;
  height: auto;
}
::v-deep .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  background-color: $bgc-product;
  border: none;
}
::v-deep .nav-tabs .nav-link {
  border: none;
}
::v-deep .nav-item:focus {
  border: none;
  outline: none;
}
::v-deep .nav-item:hover {
  border: none;
  outline: none;
}
::v-deep .VueCarousel-dot:focus {
  border: none;
  outline:none
}
::v-deep .nav-tabs {

}
::v-deep .nav-link {
  color: $body-column-title;
  font-weight: 500;

}
::v-deep .card {
  border: none;
}
::v-deep .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  color: $text-color;
  font-weight: 500;
  border-bottom: 3px solid #F58220;
  border-radius: 1.5px;

}
::v-deep .nav-tabs .nav-link, .nav-tabs .nav-item.show .nav-link {
  color: $text-colorRank;
  font-weight: 500;
  padding: 24px 0;
  background-color: $bgc-body !important;
}
::v-deep .card-header {
  border-bottom:1px solid $border;
  background-color:$bgc-body;
  padding: 0;
}
::v-deep .nav {
  max-width: 1170px;
  margin: auto;
  gap: 0 30px;

}
::v-deep .card {
  --bs-card-spacer-y: 0;
  --bs-card-spacer-x: 0;
  --bs-card-title-spacer-y: 0;
}
::v-deep #tuvan___BV_tab_button__ {
  margin-left: 350px;
  padding: 12px 24px;
  background-color: $text-color;
  color:$bgc-body;
  border-radius: 4px;
}
.list_icon-txt {
  padding: 0 24px 24px;
}

.product-item_characteristic {
  max-width: 1170px;
  width: 100%;
  margin: auto;

}
.list_icon-description {
  margin-top: 8px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: #7E7E84;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
}
.list_icon-title {
  color: $news-title;
  font-weight: 600;
  font-size: 16px;
  position: relative;
}
a .list_icon-title::after {
  position: absolute;
  content: "";
  width: 8px;
  height: 8px;
  background: transparent;
  border-right: 2px solid $news-title;
  border-bottom: 2px solid $news-title;
  transform: rotate(-45deg);
  margin-top: -5px;
  top: 50%;
  right: 0;
  margin-right: 2px;
  font-weight: 400;
}
::v-deep .VueCarousel-navigation-button{
  top: 38%;
  padding: 8px;
  background: $body-column-title;
  color: $bgc-body;
}
::v-deep .VueCarousel-dot-container {
  margin-top: 0;
  margin-bottom: 20px;
}
::v-deep .VueCarousel-dot {
  &--active {
    padding: 10px;
    width: 10px;
    height: 10px;
    background-color: $text-color !important;
  }
}
::v-deep .VueCarousel-inner {
  display: flex;
  max-width: 1170px;
  margin: auto;
  gap: 0 30px;
  padding-bottom: 20px;

}
::v-deep .VueCarousel-slide {
  width: calc( 100% / 3 - 30px ) !important;
  border: 1px solid #d7d9e2;
  background-color: #ffffff;
  position: relative;
  flex-basis:auto;
  &:hover {
    border: none;
    box-shadow: 0px 2px 2px rgba(245, 130, 32, 0.25);
    cursor: pointer;
  }
}
::v-deep .nuxt-link-active::after {
  position: absolute;
  width: 0px;
  height: 0px;
  background: transparent;
  border-right: 0px solid $news-title;
  border-bottom: 0px solid $news-title;
  transform: rotate(-45deg);
  margin-top: -5px;
  top: 50%;
  right: 10px;
  margin-right: 2px;
  font-weight: 400;
}
#imageVideo {
  width: 100% !important;
  height: 200px!important;
  margin-bottom: 24px;
  object-fit: cover;
}

.product-charactersitic {
  margin-bottom: 40px;
}
.card-image {
  margin-top: 50px;
}
.card-image {
}
.bodyItem-txt {
  width: 100%;
}
#imageItemProduct {
  width: 100%;
  height: auto;
}
span {
  color: $text-colorRank ;
  font-size: 15px;
}
p {
  color: $text-colorRank;
  font-size: 15px;
}
::v-deep table {
  width: 100%;
  border: 1px solid $border-table ;
  margin: auto auto 20px ;
}
::v-deep tr td {
  border: 1px solid $border-table !important;
  padding: 16px;
  font-family: $font !important;
  color: $text-colorRank !important;
}
.bodyItem_title {
  font-family: $font;
  font-size: 24px;
  font-weight: 700;
  color: $news-title;
  margin-bottom: 8px;
}
.bodyitem-Header {
  margin-top: 30px;
}
::v-deep span {
  color: $text-colorRank ;
  font-size: 15px ;
  font-weight: 500;
  padding: 10px 0;
}

::v-deep p {
  margin-bottom: 0;
}

.product-condition {
  width: 100%;
  padding: 50px;
  background-color: $bgc-condition;
}
.contener {
  max-width: 1170px;
  width: 100%;
}
.product-condition_title {
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  color: $news-title;
  margin-bottom: 20px;
}

.product-advantage {
  max-width: 1170px;
  width: 100%;
  margin: auto;
  padding: 50px 0;
  &_title {
    font-family: $font;
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    color: $news-title;
    margin-bottom: 20px;
  }
  &_txt{
    font-family: $font;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: $news-title;
    margin-bottom: 20px;
  }

}

</style>
