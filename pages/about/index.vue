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
            Về chúng tôi
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
            Về Mirae Asset Prévoir
          </div>
          <div class="container">
            <div class="txt-p">
              Là thành viên của Công ty bảo hiểm nhân thọ Mirae Asset (Hàn Quốc) và Tập đoàn Prévoir (Pháp), Mirae Asset
              Prévoir là công ty bảo hiểm nhân thọ hàng đầu, cung cấp tập hợp các giải pháp tài chính toàn diện và bền
              vững cho khách hàng và đối tác.
              <br>
              <br>
              Mirae Asset Prévoir tập trung nâng cao sự hiểu biết sâu sắc về nhu cầu của khách hàng, xây dựng nền tảng
              vững mạnh về tài chính và tăng cường xây dựng các kênh phân phối đa dạng giúp khách hàng đưa ra quyết định
              dễ dàng hơn và sống tốt hơn với phương châm “Cho ngày mai tốt hơn, từ hôm nay".
            </div>
          </div>
        </div>
      </div>
      <div class="manganer">
        <div class="manganer-target">
          <div class="manganer-target_title">
            Ban Giám đốc
          </div>
        </div>
        <div class="maganer-Icon">
          <div class="container">
            <div class="bod-wrap">
              <carousel
                :per-page="3"
                :autoplay-timeout="4000"
                :autoplay="true"
                :navigation-next-label="true"
                :navigation-prev-label="true"
                :pagination-enabled="false"
              >
                <slide
                  v-for="(use,index) in manganerAbout.data"
                  :key="index"
                >
                  <div class="bod-slider">
                    <div class="bod-slider_img">
                      <img
                        id="iconManganer"
                        :src="'https://api-map-life.grooo.com.vn/files/media/base/' + jsonParse(use.image)[0]"
                        alt="error-manganer"
                      >
                    </div>
                    <div class="bod-slider_info">
                      <div class="bod-slider_title">
                        {{ isType(use.name) }}
                      </div>
                      <div class="bod-slider_txt">
                        {{ isType(use.position) }}
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
      <div class="about-distribution">
        <div class="distribution_txt">
          <div class="distribution-title">
            Kênh phân phối
          </div>
        </div>
        <div class="btn_bank">
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Kênh hợp tác ngân hàng" active>
                <b-card-text>
                  <div class="container">
                    <ul class="bankAbout-List">
                      <li
                        v-for="bank in bankAboutApi"
                        :key="bank"
                        class="bankAbout-item"
                      >
                        <nuxt-link to="">
                          <img id="iconBank" :src="bank.img" alt="errorBank">
                        </nuxt-link>
                        <div class="bankAbout-info">
                          <div class="bankAbout-title">
                            {{ bank.title }}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Tổ chức tài chính">
                <b-card-text>
                  <div class="container">
                    <nuxt-link to="">
                      <img id="iconBank" src="@/assets/img/f88.png" alt="errorBank">
                    </nuxt-link>
                    <div class="bankAbout-info">
                      <div class="bankAbout-title">
                        Công ty CP Kinh doanh F88
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Tổ chức doanh nghiệp">
                <b-card-text>
                  <div class="container">
                    <nuxt-link to="">
                      <img id="iconBank" src="@/assets/img/abv.png" alt="errorBank">
                    </nuxt-link>
                    <div class="bankAbout-info">
                      <div class="bankAbout-title">
                        TẬP ĐOÀN ÂN BÌNH VIÊN
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
        <div class="abou-Notification">
          <div class="abou-Notification_txt">
            <div class="Notificati-title">
              Thông cáo báo chí
            </div>
          </div>
          <div class="abou-Notification_img">
            <carousel
              :per-page="3"
              :autoplay-timeout="false"
              :autoplay="false"
              :navigation-next-label="true"
              :navigation-prev-label="true"
              :pagination-enabled="false"
            >
              <slide
                v-for="(notifi, index) in pressReleaseAbout.data"
                :key="index"
              >
                <ul class="Notification-img">
                  <li class="list-Notification">
                    <div
                      class="Notification-ttxt"
                    >
                      <img
                        id="Notification-img"
                        :src="'https://api-map-life.grooo.com.vn/files/media/base/' +
                          jsonParse(notifi.image)[0]"
                        alt="error-ncb"
                      >
                      <nuxt-link :to="`/about/${isType(notifi.slug)}`">
                        <div class="ncb-title Notification-title">
                          {{ isType(notifi.title) }}
                        </div>
                      </nuxt-link>
                      <div class="ncb-txt Notification-txt">
                        {{ isType(notifi.description) }}
                      </div>
                    </div>
                  </li>
                </ul>
              </slide>
            </carousel>
            <div class="NotificationAll">
              <nuxt-link to="/about/pressReleaseList">
                <a href="#" class="allNotifion">Xem tất cả</a>
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
                  Báo cáo tài chính
                </div>
                <nuxt-link to="#">
                  <div class="finance-colum_txt">
                    Xem chi tiết
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
                  Giải thưởng
                </div>
                <nuxt-link to="/about/prizeList/">
                  <div class="finance-colum_txt">
                    Xem chi tiết
                  </div>
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
        <!--        <div class="aboutvideo">-->
        <!--          <div class="aboutvideo-item">-->
        <!--            <div class="about-video">-->
        <!--              <div class="about-title">-->
        <!--                Videos & ảnh-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <ul class="about-video">-->
        <!--              <li-->
        <!--                v-for="(item,index) in videoAboutApi"-->
        <!--                :key="index"-->
        <!--                class="list-video"-->
        <!--              >-->
        <!--                <img-->
        <!--                  :src="'https://api-map-life.grooo.com.vn/files/media/base/' +-->
        <!--                      jsonParse(notifi.image)[0]"-->
        <!--                  alt="errorImage"-->
        <!--                >-->
        <!--                <div class="list_icon-title">-->
        <!--                  {{ isType(item.title) }}-->
        <!--                </div>-->
        <!--              </li>-->
        <!--              <li>-->
        <!--                <div class="NotificationAll">-->
        <!--                  <nuxt-link to="">-->
        <!--                    <div class="allNotifion">-->
        <!--                      Xem tất cả-->
        <!--                    </div>-->
        <!--                  </nuxt-link>-->
        <!--                </div>-->
        <!--              </li>-->
        <!--            </ul>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
    }
  },
  computed: {
    /**
     * @description: hàm này dùng để lấy giá trị từ store
     * Author: NSDThinh 28/02/2023
     */
    manganerAbout () {
      return this.$store.state.manganer
    },
    pressReleaseAbout () {
      return this.$store.state.pressRelease
    },
    bankAboutApi () {
      return this.$store.state.bankAbout
    },
    videoAboutApi () {
      return this.$store.state.videoApi
    }
  },
  mounted () {
    /**
     * @description: manganer ( giám đốc )
     * Author: NSDThinh 28/02/2023
     */
    this.$store.dispatch('setManganAbout')
    this.$store.dispatch('setPressRelease')
    this.$store.dispatch('setVideoApi')
  },
  created () {
  },
  methods: {
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
@import "@/assets/scss/layouts/content/myAbout.scss";
</style>
