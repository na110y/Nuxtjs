<template>
  <div class="contac">
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
</template>
<script>
import dropdown from '../../components/base/dropdown.vue'
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
      item: {},
      email: '',
      isChecked: false
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
    }
  },
  mounted() {
  },
  methods: {
    submitForm() {},
    // thực hiện validate dữ liệu
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
<style lang="scss" scoped>
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
::v-deep .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  background-color: $bgc-product;
  border: none;
}
.product-features {
  margin-top: 50px;
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
</style>
