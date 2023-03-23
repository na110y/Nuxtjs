<template>
  <div class="service">
    <div class="slideProduct">
      <img id="productIM" src="../../assets/img/productImg.png" alt="errorProduct">
      <div class="slide-txt">
        <div class="slideProductOpa" />
        <div class="slideProduct-txt">
          <div class="slide-title">
            {{ $t('service.KhangAn') }}
          </div>
          <div class="slide-txt">
            {{ $t('service.business') }}
          </div>
        </div>
      </div>
    </div>
    <b-card no-body>
      <b-tabs card>
        <b-tab :title="$t('productDetail.ProductFeatures')" active>
          <b-card-text>
            <div class="contener">
              <div class="product-features">
                <div class="product-features_title">
                  {{ $t('service.ProductFeatures') }}
                </div>
                <div class="product-features_item">
                  <ul class="product-item_features">
                    <li class="item_features">
                      <div class="item_features-icon">
                        <img src="~/assets/img/product1.svg" alt="erorProduct">
                      </div>
                      <div class="item_features-title">
                        {{ $t('service.FinancialSecurity') }}
                      </div>
                      <div class="item_features-txt">
                        {{ $t('service.LetChildren') }} <span>{{ $t('service.Educational') }}</span> { $t('service.InsuranceMoney') }}
                      </div>
                    </li>
                    <li class="item_features">
                      <div class="item_features-icon">
                        <img src="~/assets/img/product2.svg" alt="erorProduct">
                      </div>
                      <div class="item_features-title">
                        {{ $t('service.Securing') }}
                      </div>
                      <div class="item_features-txt">
                        {{ $t('service.continueComplete') }}<span>{{ $t('service.InsurancePolicy') }}</span>
                      </div>
                    </li>
                    <li class="item_features">
                      <div class="item_features-icon">
                        <img src="~/assets/img/product3.svg" alt="erorProduct">
                      </div>
                      <div class="item_features-title">
                        {{ $t('service.Safety') }}
                      </div>
                      <div class="item_features-txt">
                        {{ $t('service.protectionBoth') }} <span>{{ $t('service.parents') }}</span> {{ $t('service.and') }}<span>con</span> {{ $t('service.untilGrowUp') }}
                      </div>
                    </li>
                    <li class="item_features">
                      <div class="item_features-icon">
                        <img src="~/assets/img/product4.svg" alt="erorProduct">
                      </div>
                      <div class="item_features-title">
                        {{ $t('service.Motivatekids') }}
                      </div>
                      <div class="item_features-txt">
                        {{ $t('service.rewardYour') }} <span>{{ $t('service.equivalent') }}</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="condition">
              <div class="condition-list">
                <div class="condition-title">
                  {{ $t('productDetail.Conditions') }}
                </div>
                <div class="condition-txt">
                  <ul class="condition-txt_item">
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Primary') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.days') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Insurance') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.yearsOld') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Contract') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.insuredPerson') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.paymentDeadline') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.PrimaryInsured') }}
                      </div>
                    </li>
                    <li class="colum">
                      <div class="item_condition">
                        {{ $t('service.premiumPayment') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.Quarter') }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="insurance">
              <div class="condition-list">
                <div class="condition-title">
                  {{ $t('productDetail.InsuranceBenefits') }}
                </div>
                <div class="condition-txt">
                  <ul class="condition-txt_item">
                    <li class="colum colum-border">
                      <div class="item_condition insurance-item">
                        {{ $t('Contact.Building') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition item-colum_txt">
                        {{ $t('Contact.Primary') }}
                      </div>
                      <div class="item_condition item-colum_txt">
                        {{ $t('productDetail.InsuranceBenefits') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('Contact.Annual') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('Contact.settlement') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('Contact.educational') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('Contact.insured') }}
                      </div>
                    </li>
                    <li class="colum">
                      <div class="item_condition">
                        {{ $t('Contact.benefits') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('Contact.sumInsured') }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="protect">
              <div class="condition-list">
                <div class="condition-title">
                  {{ $t('service.uncertainties') }}
                </div>
                <div class="condition-txt">
                  <ul class="condition-txt_item">
                    <li class="colum colum-border">
                      <div class="item_condition item-colum_txt">
                        {{ $t('service.InsuranceBuyer') }}
                      </div>
                      <div class="item_condition item-colum_txt">
                        {{ $t('productDetail.InsuranceBenefits') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition ">
                        {{ $t('service.TTTBBVV') }}
                      </div>
                      <div class="item_condition ">
                        {{ $t('service.premium') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.accident') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.settlement') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.educational') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.paymentTerm') }}
                      </div>
                    </li>
                    <li class="colum flex colum-border">
                      <div class="colum">
                        <div class="item_condition">
                          {{ $t('service.Enrollment') }}
                        </div>
                        <div class="item_condition">
                          {{ $t('service.insured') }}
                        </div>
                      </div>
                      <div class="colum">
                        <div class="item_condition item-colum_txt">
                          {{ $t('service.Insuredperson') }}
                        </div>
                        <div class="item_condition item-colum_txt">
                          {{ $t('productDetail.InsuranceBenefits') }}
                        </div>
                      </div>
                      <div class="colum">
                        <div class="item_condition">
                          {{ $t('service.TTTBBVV') }}
                        </div>
                        <div class="item_condition">
                          {{ $t('service.SumInsured') }}
                        </div>
                      </div>
                    </li>
                    <li class="colum flex-end">
                      <div class="item_condition">
                        {{ $t('service.educationalBenefits') }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="receive-subsidies">
              <div class="condition-list">
                <div class="condition-title">
                  {{ $t('Contact.Receive') }}
                </div>
                <div class="condition-txt">
                  <ul class="condition-txt_item">
                    <li class="colum colum-border">
                      <div class="item_condition item-colum_txt">
                        {{ $t('Contact.Insured') }}
                      </div>
                      <div class="item_condition item-colum_txt">
                        {{ $t('Contact.Guaranteed') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition ">
                        18
                      </div>
                      <div class="item_condition ">
                        30
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        19
                      </div>
                      <div class="item_condition">
                        35
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        20
                      </div>
                      <div class="item_condition">
                        40
                      </div>
                    </li>
                    <li class="colum">
                      <div class="item_condition">
                        21
                      </div>
                      <div class="item_condition">
                        45
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="receive-firtLast">
              <img src="~/assets/img/txt-firlLast.png" alt="">
            </div>
            <div class="product-last">
              <img id="imageWS" src="~/assets/img/productBottom.png" alt="error">
              <div class="product-last_fixed">
                <div class="website">
                  <div class="title">
                    {{ $t('Contact.Documents') }}
                  </div>
                  <div class="prodict-posotion">
                    <div class="website-img">
                      <img src="~/assets/img/btn1.png" alt="errorBTN">
                      <img src="~/assets/img/btn2.png" alt="errorBTN">
                      <img src="~/assets/img/btn3.png" alt="errorBTN">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-ask">
              <contact />
            </div>
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('productDetail.condition')">
          <b-card-text>
            <div class="condition">
              <div class="condition-list">
                <div class="condition-title">
                  {{ $t('productDetail.Conditions') }}
                </div>
                <div class="condition-txt">
                  <ul class="condition-txt_item">
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Primary') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.days') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Insurance') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.yearsOld') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Contract') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.insuredPerson') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.paymentDeadline') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.PrimaryInsured') }}
                      </div>
                    </li>
                    <li class="colum">
                      <div class="item_condition">
                        {{ $t('service.premiumPayment') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.Quarter') }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('productDetail.power')">
          <b-card-text>
            <div class="insurance">
              <div class="condition-list">
                <div class="condition-title">
                  {{ $t('productDetail.Conditions') }}
                </div>
                <div class="condition-txt">
                  <ul class="condition-txt_item">
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Primary') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.days') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Insurance') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.yearsOld') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.Contract') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.insuredPerson') }}
                      </div>
                    </li>
                    <li class="colum colum-border">
                      <div class="item_condition">
                        {{ $t('service.paymentDeadline') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.PrimaryInsured') }}
                      </div>
                    </li>
                    <li class="colum">
                      <div class="item_condition">
                        {{ $t('service.premiumPayment') }}
                      </div>
                      <div class="item_condition">
                        {{ $t('service.Quarter') }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab id="tuvan" :title="$t('productDetail.ConsultNow')">
          <b-card-text>
            <div class="product-ask">
              <contact />
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
    <div class="scrollTop" @click="scrollToTop">
      <img src="~/assets/img/scrollTop.svg" alt="error">
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import contact from '~/components/base/contact.vue'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: {
    contact
  },
  data() {
    return {
      item: {}
    }
  },
  computed: {
  },
  mounted() {
    this.setProduct() // sản phẩm nổi bật
    this.setSlideHome() // slide page
  },
  methods: {
    ...mapActions({
      setSlideHome: 'setSlideHome',
      setProduct: 'setProduct'
    }),
    submitForm() {},
    //  sau khi click trang sẽ được di chuyển lên đầu
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

  }

}
</script>
<style lang="scss" scoped>
@import "assets/scss/main";
@import "assets/scss/variables";
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
