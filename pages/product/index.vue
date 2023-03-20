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
            :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(item.image) "
            alt="error-image"
          >
        </div>
        <div class="list_column-txt">
          <nuxt-link :to="`/product/${ $t($validate.isType(item.slug))}`">
            <div class="list_sp-title">
              {{ $t( $validate.isTypeLang(item.name,'en')) }}
            </div>
          </nuxt-link>
          <div class="list_sp-txt">
            {{ $t($validate.isType(item.description)) }}
          </div>
        </div>
      </div>
    </div>
    <div class="product-ask">
      <div class="ask-list">
        <div class="colum-item_ask">
          <div class="item_ask-title">
            {{ $t('Contact.ContaNtUs') }}
          </div>
          <form @submit.prevent="submitForm">
            <div class="form-ask-item">
              <label for="ht">{{ $t('Contact.Firstname') }} <span class="fooAsk">*</span></label>
              <input
                id="ht"
                type="text"
                :placeholder="$t('Contact.EnterName')"
                required
                @blur="validateRequired"
              >
            </div>
            <div class="form-ask-colum">
              <div class="sdt">
                <label for="sdt">{{ $t('Contact.PhoneNumber') }} <span class="fooAsk">*</span></label>
                <input
                  id="sdt"
                  type="text"
                  :placeholder="$t('Contact.sdt')"
                  required
                  @blur="validateRequired"
                >
              </div>
              <div class="city">
                <label for="tp">{{ $t('Contact.ChooseTheCity') }} <span class="fooAsk">*</span></label>
                <dropdown
                  v-model="item.key"
                  :data="records"
                  :prop-key="item.key"
                  :prop-value="item.value"
                  :placeholder="placeholder"
                  @blur="validateRequired"
                />
              </div>
            </div>
            <div class="form-ask-item">
              <label for="email">{{ $t('Contact.EmailAddress') }} <span class="fooAsk">*</span></label>
              <input
                id="email"
                v-model="email"
                type="email"
                :placeholder="$t('Contact.address')"
                required
                @blur="validateRequired"
              >
            </div>
            <div class="agree">
              <div class="btn-radio">
                <input
                  id="checkBok"
                  v-model="isChecked"
                  type="checkbox"
                  form="checkForm"
                >
                <div class="agree-txt">
                  {{ $t('Contact.IAlreadyRead') }}<span class="checkbox-txt">{{ $t('Contact.Privacy') }}</span> {{ $t('Contact.agree') }}<span class="checkbox-txt">Mirae Asset Prévoir</span> {{ $t('Contact.productsOrServices') }}
                </div>
              </div>
            </div>
            <div class="btnSubmit">
              <button
                class="btn-submit"
                :class="{ clicked: isChecked }"
                type="submit"
                :disabled="!isChecked"
              >
                {{ $t('Contact.information') }}
              </button>
            </div>
          </form>
        </div>
        <div class="colum-item">
          <img src="~/assets/img/lienhe.png" alt="errorLienhe">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dropdown from '~/components/base/dropdown.vue'
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
  data() {
    return {
      frontVN: null,
      item: {},
      selectedLocale: 'vn'
    }
  },
  computed: {
    // truyền data cho Combobox
    records() {
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
    productPage() {
      return this.$store.state.productImage
    }
  },
  created() {
  },
  mounted() {
    /**
     * @description: product
     * Author: NSDThinh 21/02/2023
     */
    this.$store.dispatch('setProduct')
  },
  methods: {
    validateRequired() {
      const value = event.currentTarget.value
      if (!value) {
        // them border mầu đỏ cho mã nhân viên hiện tại
        event.currentTarget.classList.add('validateInput')
        // them attr thông báo lỗi cho input hiện tại
        event.currentTarget.setAttribute(
          'title',
          'thông tin này không được phép để trống!'
        )
      } else {
        event.currentTarget.classList.remove('validateInput')
      }
    }
  }

}
</script>
<style lang="scss">
@import "../../assets/scss/main";
.validateInput {
  border-color: red;
}
.btn-submit[disabled] {
  opacity: 0.5;
}

.btn-submit:not([disabled]) {
  opacity: 1;
}
</style>
