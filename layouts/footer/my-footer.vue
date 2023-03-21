<template>
  <div class="footer">
    <div class="footer-aboutMe">
      <ul class="footer-aboutMe_txt">
        <li class="aboutMe_column aboutMe_column1">
          <div class="aboutMe_column-title">
            {{ $t('footer.TNHH') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Address') }}
          </div>
          <div class="aboutMe_column-number">
            <img src="@/assets/img/number.png" alt="error-number">
          </div>
          <div class="aboutMe_column-gmail">
            <img src="@/assets/img/gmail.png" alt="error-gmail">
          </div>
          <div class="aboutMe_column-phone">
            <img src="@/assets/img/phone.png" alt="error-phone">
          </div>
          <div class="aboutMe_column-inter">
            <a href="#">
              <img id="fb" src="@/assets/img/facebook.png" alt="error-fb">
            </a>
            <a href="#">
              <img id="zalo" src="@/assets/img/zalo.png" alt="error-zalo">
            </a>
            <a href="">
              <img id="yb" src="@/assets/img/youtube.png" alt="error-ytb">
            </a>
          </div>
        </li>
        <li class="aboutMe_column aboutMe_column2 columnDev">
          <div v-b-toggle href="#example-collapse" class="aboutMe_column-title toggleMobile" @click.prevent>
            {{ $t('footer.product') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.LiveStrong') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Talent') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Sustainable') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.investment') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Peaceful') }}
          </div>
        </li>
        <li class="aboutMe_column aboutMe_column3 columnDev">
          <div v-b-toggle href="#example-collapse" class="aboutMe_column-title toggleMobile" @click.prevent>
            {{ $t('footer.service') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Promotions') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.portal') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Insurance') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.insuranceBenefits') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.InsuranceTerm') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.rateInfor') }}
          </div>
        </li>
        <li class="aboutMe_column aboutMe_column2 columnDev">
          <div v-b-toggle href="#example-collapse" class="aboutMe_column-title toggleMobile" @click.prevent>
            {{ $t('footer.about') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.AboutUs') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Financial') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.General') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.Distribution') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.opportunities') }}
          </div>
          <div class="aboutMe_column-adder">
            {{ $t('footer.PressRelease') }}
          </div>
        </li>

        <li class="aboutMe_column aboutMe_column2 column__Mobile">
          <a v-b-toggle href="#example-collapse" class="aboutMe_column-title toggleMobile" @click.prevent>
            {{ $t('footer.product') }}
          </a>
          <b-collapse id="example-collapse">
            <b-card>
              <div class="aboutMe_column-adder">
                {{ $t('footer.LiveStrong') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.Talent') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.Sustainable') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.investment') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.Peaceful') }}
              </div>
            </b-card>
          </b-collapse>
        </li>
        <li class="aboutMe_column aboutMe_column3 column__Mobile">
          <a v-b-toggle href="#example-collapse" class="aboutMe_column-title toggleMobile" @click.prevent>
            {{ $t('footer.service') }}
          </a>
          <b-collapse id="example-collapse">
            <b-card>
              <div class="aboutMe_column-adder">
                {{ $t('footer.Promotions') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.portal') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.Insurance') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.insuranceBenefits') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.InsuranceTerm') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.rateInfor') }}
              </div>
            </b-card>
          </b-collapse>
        </li>
        <li class="aboutMe_column aboutMe_column2 column__Mobile">
          <a v-b-toggle href="#example-collapse" class="aboutMe_column-title toggleMobile" @click.prevent>
            {{ $t('footer.about') }}
          </a>
          <b-collapse id="example-collapse">
            <b-card>
              <div class="aboutMe_column-adder">
                {{ $t('footer.AboutUs') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.Financial') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.General') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.Distribution') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.opportunities') }}
              </div>
              <div class="aboutMe_column-adder">
                {{ $t('footer.PressRelease') }}
              </div>
            </b-card>
          </b-collapse>
        </li>
      </ul>
    </div>
    <div class="footer-client">
      <div class="footer-client_txt">
        {{ $t('footer.MobileApplication') }}
      </div>
      <div class="footer-client_shop">
        <a href="#" class="client_shop-AppStor">
          <img id="app" src="@/assets/img/gooterApp.png" alt="error-app">
        </a>
        <a href="#" class="client_shop-AppStor">
          <img id="google" src="@/assets/img/footerGoogle.png" alt="error-google">
        </a>
      </div>
    </div>
    <div class="footer-last">
      <div class="footer-last_year">
        © 2020 MAP Life. All rights reserved
      </div>
      <div class="footer-last_rules">
        <div class="rules-title">
          <a href="#" class="txt-footer">
            {{ $t('footer.termsOfUse') }}
          </a>
          <div class="rules-border" />
        </div>
        <div class="rules-title">
          <a href="#" class="txt-footer"> {{ $t('footer.license') }} </a>
          <div class="rules-border" />
        </div>
        <div class="rules-title">
          <a href="#" class="txt-footer"> {{ $t('footer.PrivacyPolicy') }} </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/main.scss";
</style>
