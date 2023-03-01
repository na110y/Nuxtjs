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
                  <div class="card-image">
                    <img
                      id="imageItemProduct"
                      :src="
                        'https://api-map-life.grooo.com.vn/files/media/base/'
                          + jsonParse(product.image)[0]"
                      alt="error-image"
                    >
                  </div>
                  <div class="bodyItem-txt">
                    <div class="bodyItem_title">
                      {{ isType(product.name) }}
                    </div>
                    <div class="bodyItem_txt">
                      {{ isType(product.description) }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="product-condition">
                <div class="contener">
                  <div class="product-condition_title">
                    Điều kiện tham gia
                  </div>
                  <table class="product-condition_table">
                    <tbody>
                      <tr>
                        <td><strong>Tuổi tham gia</strong></td>
                        <td>18 - 55 tuổi</td>
                      </tr>
                      <tr>
                        <td><strong>Tuổi kết thúc Hợp đồng bảo hiểm</strong></td>
                        <td> 60 tuổi</td>
                      </tr>
                      <tr>
                        <td><strong>Thời hạn hợp đồng</strong></td>
                        <td> 5-10 năm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="product-advantage">
                <div class="product-advantage_title">
                  Quyền lợi bảo hiểm
                </div>
                <div class="product-advantage_txt">
                  Quyền lợi bảo hiểm cơ bản:
                </div>
                <table class="product-advantage_table">
                  <tbody>
                    <tr>
                      <td><strong>Lựa chọn</strong></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td><strong>Số tiền bảo hiểm cơ bản</strong></td>
                      <td>20.000.000</td>
                      <td>50.000.000</td>
                      <td>100.000.000</td>
                      <td>150.000.000</td>
                      <td>200.000.000</td>
                    </tr>
                  </tbody>
                </table>
                <div class="product-advantage_txt">
                  Quyền lợi bảo hiểm bổ sung do tai nạn:
                </div>
                <table class="product-advantage_table">
                  <tbody>
                    <tr>
                      <td><strong>Lựa chọn</strong></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td><strong>Số tiền bảo hiểm bổ sung do tai nạn</strong></td>
                      <td>50.000.000</td>
                      <td>100.000.000</td>
                      <td>50.000.000</td>
                      <td>200.000.000</td>
                      <td>300.000.000</td>
                      <td>400.000.000</td>
                    </tr>
                    <tr>
                      <td><strong>Phí bảo hiểm rủi ro hàng năm</strong></td>
                      <td>65.000</td>
                      <td>130.000</td>
                      <td>260.000 </td>
                      <td>390.000 </td>
                      <td>520.000</td>
                      <td>650.000</td>
                    </tr>
                  </tbody>
                </table>
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
            </b-card-text>
          </b-tab>
          <b-tab title="Điều kiện tham gia">
            <b-card-text>
              <div class="product-condition">
                <div class="contener">
                  <div class="product-condition_title">
                    Điều kiện tham gia
                  </div>
                  <table class="product-condition_table">
                    <tbody>
                      <tr>
                        <td><strong>Tuổi tham gia</strong></td>
                        <td>18 - 55 tuổi</td>
                      </tr>
                      <tr>
                        <td><strong>Tuổi kết thúc Hợp đồng bảo hiểm</strong></td>
                        <td> 60 tuổi</td>
                      </tr>
                      <tr>
                        <td><strong>Thời hạn hợp đồng</strong></td>
                        <td> 5-10 năm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab title="Quyền lợi bảo hiểm">
            <b-card-text>
              <div class="product-advantage">
                <div class="product-advantage_title">
                  Quyền lợi bảo hiểm
                </div>
                <div class="product-advantage_txt">
                  Quyền lợi bảo hiểm cơ bản:
                </div>
                <table class="product-advantage_table">
                  <tbody>
                    <tr>
                      <td><strong>Lựa chọn</strong></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td><strong>Số tiền bảo hiểm cơ bản</strong></td>
                      <td>20.000.000</td>
                      <td>50.000.000</td>
                      <td>100.000.000</td>
                      <td>150.000.000</td>
                      <td>200.000.000</td>
                    </tr>
                  </tbody>
                </table>
                <div class="product-advantage_txt">
                  Quyền lợi bảo hiểm bổ sung do tai nạn:
                </div>
                <table class="product-advantage_table">
                  <tbody>
                    <tr>
                      <td><strong>Lựa chọn</strong></td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td><strong>Số tiền bảo hiểm bổ sung do tai nạn</strong></td>
                      <td>50.000.000</td>
                      <td>100.000.000</td>
                      <td>50.000.000</td>
                      <td>200.000.000</td>
                      <td>300.000.000</td>
                      <td>400.000.000</td>
                    </tr>
                    <tr>
                      <td><strong>Phí bảo hiểm rủi ro hàng năm</strong></td>
                      <td>65.000</td>
                      <td>130.000</td>
                      <td>260.000 </td>
                      <td>390.000 </td>
                      <td>520.000</td>
                      <td>650.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
        <b-tabs card />
      </b-card>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import dropdown from '~/assets/base/dropdown.vue'

export default {
  name: 'ProductDetail',
  components: {
    dropdown
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
      item: {}
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
  created () {},
  mounted () {
    /**
     * @description: product
     * Author: NSDThinh 21/02/2023
     */
    this.getDataProductDetail()
  },
  methods: {
    async getDataProductDetail () {
      const res = await this.$axios
        .get(process.env.baseApiUrl +
          `/featured-product-categories?id=${this.$route.params.id}`)
      if (res) {
        this.product = res.data.data[0]
      }
    },
    jsonParse (value) {
      if (value) {
        return JSON.parse(value)
      }
      return ''
    },
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
}
::v-deep .nav-tabs .nav-link, .nav-tabs .nav-item.show .nav-link {
  color: $text-colorRank;
  font-weight: 500;
  padding: 0;
}
::v-deep .card-header {
  border-bottom: $border;
  display: flex;
  justify-content: center;
  padding: 22px 0;
}
::v-deep .nav {
  gap: 0 40px;

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
.product-item_characteristic {
  max-width: 1170px;
  width: 100%;
  margin: auto;

}
.product-charactersitic {
  display: flex;
  gap: 0 30px;
  margin-bottom: 40px;
}
.card-image {
  margin-top: 50px;
}
.card-image {
  width: 40%;
}
.bodyItem-txt {
  width: 60%;
  margin-top: 45px;
}
#imageItemProduct {
  width: 100%;
  height: auto;
}
.bodyItem_title {
  font-family: $font;
  font-size: 24px;
  font-weight: 700;
  color: $body-column-title;
  margin-bottom: 8px;
}
.bodyItem_txt {
  font-family: $font;
  font-size: 16px;
  font-weight: 400;
  color: $text-colorRank;
  margin-bottom: 8px;
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
table {
  width: 100%;
  border: 1px solid $border-table;
  margin: auto auto 20px;
}
tr td {
  border: 1px solid $border-table;
  padding: 16px;
  font-family: $font;
  color: $text-colorRank;
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
