<template>
  <div class="about">
    <div class="aboutSlide">
      <div class="aboutSlide-img">
        <div class="aboutme">
          <img id="aboutme" src="@/assets/img/image2.png" alt="error-img">
        </div>
        <div class="aboutme-opa" />
        <div class="aboutme-txt">
          <div class="txt-aboutme">
            {{ $t('maganer.AboutUs') }}
          </div>
        </div>
      </div>
      <div class="aboutSlide-txt">
        <div class="aboutSlide-txt_img">
          <img
            id="aboutSlide-txt_img"
            src="@/assets/img/img-contentLast.png"
            alt="error-img"
          >
        </div>
        <div class="aboutSlide-txt_txt">
          <div class="txt-title">
            {{ $t('maganer.About') }}
          </div>
          <div class="container">
            <div class="txt-p">
              {{ $t('maganer.AsMember') }}
              <br>
              <br>
              {{ $t('maganer.MiraeAsset') }}
            </div>
          </div>
        </div>
      </div>
      <div class="manganer">
        <div class="manganer-target">
          <div class="manganer-target_title">
            {{ $t('maganer.name') }}
          </div>
        </div>
        <div class="maganer-Icon">
          <div class="container">
            <div class="bod-wrap">
              <carousel
                :per-page="1"
                :pagination-enabled="false"
                :navigation-enabled="true"
                :navigation-next-icon="'bi bi-chevron-right'"
                :navigation-prev-icon="'fas fa-chevron-right'"
                :vue-carousel-slide-center="true"
              >
                <slide
                  v-for="(use,index) in manganerAbout.data"
                  :key="index"
                >
                  <div class="bod-slider">
                    <div class="bod-slider_img" @click="btnShowModal(use)">
                      <img
                        id="iconManganer"
                        :src="'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(use.image)[0]"
                        alt="error-manganer"
                        class="carousel-image"
                      >
                    </div>

                    <div class="bod-slider_info">
                      <div class="bod-slider_title">
                        {{ $t($validate.isType(use.name,$i18n.locale)) }}
                      </div>
                      <div class="bod-slider_txt">
                        {{ $t($validate.isType(use.position,$i18n.locale)) }}
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
          <my-modal :is-show-modal="isShowModal" :item-selected-i-d="itemSelectedID" @closeModal="showModal" />
        </div>
      </div>
      <div class="about-distribution">
        <div class="distribution_txt">
          <div class="distribution-title">
            {{ $t('bank.Distribution') }}
          </div>
        </div>
        <div class="btn_bank">
          <b-tabs card>
            <b-tab :title="$t('bank.bankTitle')">
              <b-card-text>
                <div class="container">
                  <ul

                    class="bankAbout-List"
                  >
                    <li
                      v-for="(bank,index) in bankAboutApi?.data?.[0].channels"
                      :key="index"
                      class="bankAbout-item"
                    >
                      <nuxt-link :to="`/about/bankList/${ $t($validate.isType(bank.slug,$i18n.locale))}`">
                        <img
                          id="iconBank"
                          :src="'https://api-map-life.grooo.com.vn/files/media/base/'
                            + $validate.jsonParse(bank.image)"
                          alt="errorBank"
                        >
                      </nuxt-link>
                      <div class="bankAbout-info">
                        <div class="bankAbout-title">
                          {{ $t($validate.isType(bank.name,$i18n.locale)) }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab :title="$t('bank.Financial')">
              <b-card-text>
                <div class="container">
                  <ul class="bankAbout-List">
                    <li
                      v-for="(bankFinance,index) in bankAboutApi?.data?.[1].channels"
                      :key="index"
                      class="bankAbout-item"
                    >
                      <nuxt-link :to="`/about/bankList/${ $t($validate.isType(bankFinance.slug,$i18n.locale))}`">
                        <img
                          id="iconBank"
                          :src="'https://api-map-life.grooo.com.vn/files/media/base/'
                            + $validate.jsonParse(bankFinance.image)"
                          alt="errorBank"
                        >
                      </nuxt-link>
                      <div class="bankAbout-info">
                        <div class="bankAbout-title">
                          {{ $t($validate.isType(bankFinance.name,$i18n.locale)) }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </b-card-text>
            </b-tab>
            <b-tab :title="$t('bank.Business')">
              <b-card-text>
                <div class="container">
                  <ul class="bankAbout-List">
                    <li
                      v-for="(bankItem,index) in bankAboutApi?.data?.[2].channels"
                      :key="index"
                      class="bankAbout-item"
                    >
                      <nuxt-link :to="`/about/bankList/${ $t($validate.isType(bankItem.slug,$i18n.locale))}`">
                        <img
                          id="iconBank"
                          :src="'https://api-map-life.grooo.com.vn/files/media/base/'
                            + $validate.jsonParse(bankItem.image)"
                          alt="errorBank"
                        >
                      </nuxt-link>
                      <div class="bankAbout-info">
                        <div class="bankAbout-title">
                          {{ $t($validate.isType(bankItem.name,$i18n.locale)) }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </div>
        <div class="abou-Notification">
          <div class="abou-Notification_txt">
            <div class="Notificati-title">
              {{ $t('common.Press') }}
            </div>
          </div>
          <div class="abou-Notification_img">
            <ul class="Notification-img">
              <li v-for="(notifi, index) in pressReleaseAbout.data" :key="index" class="list-Notification">
                <div
                  class="Notification-ttxt"
                >
                  <img
                    id="Notification-img"
                    :src="'https://api-map-life.grooo.com.vn/files/media/base/' +
                      $validate.jsonParse(notifi.image)[0]"
                    alt="error-ncb"
                  >
                  <div class="Notification-content">
                    <nuxt-link
                      v-bind="$attrs"
                      :title="$t($validate.isType(notifi.title,$i18n.locale))"
                      :to="`/about/notificationList/${ $t($validate.isType(notifi.slug,$i18n.locale))}`"
                    >
                      <div class="ncb-title Notification-title">
                        {{ $validate.isTypeLang(notifi.title) }}
                      </div>
                    </nuxt-link>
                    <div class="ncb-txt Notification-txt">
                      {{ $t($validate.isType(notifi.description,$i18n.locale)) }}
                    </div>
                    <nuxt-link
                      :to="`/about/notificationList/${ $t($validate.isType(notifi.slug,$i18n.locale))}`"
                      class="Notification_link"
                    >
                      <div class="Notification-last_txt">
                        {{ $t('content.SeeDetails') }}
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </li>
            </ul>
            <div class="NotificationAll">
              <nuxt-link to="/about/notificationList/">
                <a href="#" class="allNotifion">{{ $t('common.SeeAll') }}</a>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="finance">
          <ul class="finance-img">
            <li class="list-finance">
              <div class="finance-colum">
                <div class="finance-colum_img">
                  <img src="https://map-life.grooo.com.vn/images/svg/finance.svg" alt="error-finance">
                </div>
                <div class="finance-colum_title">
                  {{ $t('footer.Financial') }}
                </div>
                <nuxt-link to="/about/financialReportList/">
                  <div class="finance-colum_txt">
                    {{ $t('content.SeeDetails') }}
                  </div>
                </nuxt-link>
              </div>
            </li>
            <li class="list-finance">
              <div class="finance-colum">
                <div class="finance-colum_img">
                  <img src="https://map-life.grooo.com.vn/images/svg/award.svg" alt="error-finance">
                </div>
                <div class="finance-colum_title">
                  {{ $t('common.Prize') }}
                </div>
                <nuxt-link to="/about/prizeList/">
                  <div class="finance-colum_txt">
                    {{ $t('content.SeeDetails') }}
                  </div>
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="aboutvideo">
          <div class="aboutvideo-item">
            <div class="about-video">
              <div class="about-title">
                {{ $t('common.Videos') }}
              </div>
            </div>
            <carousel
              id="listvideo"
              :per-page="1"
              :pagination-enabled="true"
            >
              <slide
                v-for="(videoItem,index) in listVideo"
                id="itemVideo"
                :key="index"
              >
                <div class="list-video">
                  <nuxt-link :to="`/about/video/${ $t($validate.isType(videoItem.slug,$i18n.locale))}`">
                    <img
                      id="imageVideo"
                      :src="'https://api-map-life.grooo.com.vn/files/media/base/' +
                        $validate.jsonParse(videoItem.poster)[0]"
                      alt="errorImage"
                    >
                  </nuxt-link>
                  <nuxt-link :to="`/about/video/${ $t($validate.isType(videoItem.slug,$i18n.locale))}`" class="list_icon-title">
                    <div class="list_icon-title" :title="$t($validate.isType(videoItem.name,$i18n.locale))">
                      {{ $t($validate.isType(videoItem.name,$i18n.locale)) }}
                    </div>
                  </nuxt-link>
                </div>
              </slide>
            </carousel>
            <div class="NotificationAll">
              <nuxt-link to="/about/video/listVideo/">
                <div class="centerAllVideo">
                  <span class="allNotifion">{{ $t('common.SeeAll') }}</span>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Carousel, Slide } from 'vue-carousel'
import MyModal from '~/plugins/base/modal.vue'

export default {
  components: {
    MyModal,
    Carousel,
    Slide
  },
  data() {
    return {
      listVideo: [],
      itemSelectedID: null,
      itemSelected: {},
      isShowModal: false,
      navigationNextLabel: null,
      currentTab: 0
    }
  },
  computed: {
    manganerAbout() {
      return this.$store.state.manganer
    },
    pressReleaseAbout() {
      return this.$store.state.pressRelease
    },
    bankAboutApi() {
      return this.$store.state.bankAbout
    }
  },
  mounted() {
    this.$store.dispatch('setManganAbout')
    this.$store.dispatch('setPressRelease')
    this.$store.dispatch('setBank')
  },
  created() {
    this.getListVideo()
  },
  methods: {
    btnClickItem(index) {
      this.itemSelected = this.listVideo[index]
      this.$router.push({ query: { slug: index } })
    },
    showModal(isShowModal) {
      this.isShowModal = isShowModal
    },
    // hàm này dùng để hiển thị chi tiết giám đốc khi chọn
    btnShowModal(use) {
      this.itemSelected = use
      this.itemSelectedID = use.id
      this.showModal(true)
    },
    async getListVideo() {
      const res = await this.$axios.get(
        process.env.baseApiUrl + '/library/fe-get-libraries?limit=9')
      this.listVideo = res.data.data.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layouts/content/myAbout.scss";
</style>
