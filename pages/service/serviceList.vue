<template>
  <div>
    <div class="service">
      <div class="image-Service">
        <img src="@/assets/img/dv.png" alt="error-dv" id="dvKH">
      </div>
      <div class="service-title">Dịch vụ khách hàng</div>
      <div class="service-width">
        <div class="service-column">
          <ul class="service-column_list">
            <li class="service-column_item">
              <div class="column-list">
                <div class="column-icon">
                  <img src="@/assets/img/icon-insurance.png"/>
                </div>
                <div class=column-txt_service>
                  <nuxt-link to="#">
                    <div class="column-title_service">Chăm sóc khách hàng</div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="column-title_service">Chương trình khuyến mại</div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="column-title_service">Quỹ liên kết chung</div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="column-title_service">Thông tin lãi suất</div>
                  </nuxt-link>
                </div>
              </div>
            </li>
            <li class="service-column_item">
              <div class="column-list">
                <div class="column-icon">
                  <img src="@/assets/img/icon-user.png"/>
                </div>
                <div class=column-txt_service>
                  <nuxt-link to="#">
                    <div class="column-title_service">
                      Đóng phí bảo hiểm</div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="column-title_service">Thanh toán phí bảo hiểm</div>
                  </nuxt-link>
                </div>
              </div>
            </li>
            <li class="service-column_item">
              <div class="column-list">
                <div class="column-icon">
                  <img src="@/assets/img/icon-execl.png"/>
                </div>
                <div class=column-txt_service>
                  <nuxt-link to="#">
                    <div class="column-title_service">
                      Giải quyết quyền lợi bảo hiểm</div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="column-title_service">Hướng dẫn giải quyết bảo hiểm</div>
                  </nuxt-link>
                </div>
              </div>
            </li>
            <li class="service-column_item">
              <div class="column-list">
                <div class="column-icon">
                  <img src="@/assets/img/icon-insurance.png"/>
                </div>
                <div class=column-txt_service>
                  <nuxt-link to="#">
                    <div class="column-title_service">Thông tin dành cho khách hàng</div>
                  </nuxt-link>
                  <nuxt-link to="#">
                    <div class="column-title_service">Cổng thông tin khách hàng</div>
                  </nuxt-link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="product-ask">
        <div class="ask-list">
          <div class="colum-item_ask">
            <div class="item_ask-title">Liên hệ với chúng tôi</div>
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
                <input type="checkbox" id="checkBok">
                <div class="agree-txt">
                  Tôi đã đọc<span class="checkbox-txt">Chính sách bảo mật</span> và đồng ý để <span class="checkbox-txt">Mirae Asset Prévoir</span> được liên hệ cho các mục đích tư vấn, quảng cáo các sản phẩm, dịch vụ.
                </div>
              </div>
            </div>
            <div class="btnSubmit">
              <div class="btn-submit">Gửi thông tin</div>
            </div>
          </div>
          <div class="colum-item">
            <img src="@/assets/img/lienhe.png" alt="errorLienhe">
          </div>
        </div>
      </div>
      <div class="scrollTop">
        <a href="#">
          <img src="@/assets/img/scrollTop.svg" alt="error">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import dropdown from '../../assets/base/dropdown.vue'
export default {
  components: {
    dropdown
  },
  props: {
    placeholder: {
      type: String
    }
  },
  data () {
    return {
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
  mounted () {
  },
  methods: {
    // biến đổi sang dạng json
    jsonParse (value) {
      if (value) {
        return JSON.parse(value)
      }
      return ''
    }
  }

}
</script>
<style lang="scss" scoped>
@import "assets/scss/main";
</style>
