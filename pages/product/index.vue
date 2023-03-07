<template>
  <div class="product">
    <div class="product-list">
      <div class="product-list_img">
        <img id="spbanner" src="~/assets/img/spbanner.png" alt="error-SPBanner">
        <div class="product-list_title">
          Danh mục sản phẩm
        </div>
      </div>
    </div>
    <div class="SP-list_column">
      <div
        v-for="(item,index) in productPage.data"
        :key="index.id"
        class="SP-list-link"
      >
        <div class="SP-list-image">
          <img
            id="body_column-image"
            :src="
              'https://api-map-life.grooo.com.vn/files/media/base/' +
                $validate.jsonParse(item.image)[0]
            "
            alt="error-image"
          >
        </div>
        <div class="list_column-txt">
          <nuxt-link :to="`/product/${ item.id}`">
            <div class="list_sp-title">
              {{ $validate.isType(item.name) }}
            </div>
          </nuxt-link>
          <div class="list_sp-txt">
            {{ $validate.isType(item.description) }}
          </div>
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
  </div>
</template>

<script>
import dropdown from '~/assets/base/dropdown.vue'
export default {
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
      frontVN: null,
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
    },
    /**
     * @description: hàm này dùng để lấy ảnh sản phẩm từ store
     * Author: NSDThinh 21/02/2023
     */
    // eslint-disable-next-line vue/no-dupe-keys
    productPage () {
      return this.$store.state.productImage
    }
  },
  created () {
  },
  mounted () {
    /**
     * @description: product
     * Author: NSDThinh 21/02/2023
     */
    this.$store.dispatch('setProduct')
  },
  methods: {
  }

}
</script>
<style lang="scss">
@import "../../assets/scss/main";
</style>
