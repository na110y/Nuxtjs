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
              Là thành viên của Công ty bảo hiểm nhân thọ Mirae Asset (Hàn Quốc) và Tập đoàn Prévoir (Pháp), Mirae Asset Prévoir là công ty bảo hiểm nhân thọ hàng đầu, cung cấp tập hợp các giải pháp tài chính toàn diện và bền vững cho khách hàng và đối tác.
              <br>
              <br>
              Mirae Asset Prévoir tập trung nâng cao sự hiểu biết sâu sắc về nhu cầu của khách hàng, xây dựng nền tảng vững mạnh về tài chính và tăng cường xây dựng các kênh phân phối đa dạng giúp khách hàng đưa ra quyết định dễ dàng hơn và sống tốt hơn với phương châm “Cho ngày mai tốt hơn, từ hôm nay".
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
              <div
                v-for="(use,index) in manganerAbout.data"
                :key="index"
                class="bod-slider">
                <div class="bod-slider_img">
                  <img
                    id="iconManganer"
                    :src="'https://api-map-life.grooo.com.vn/files/media/base/' + jsonParse(use.image)[0]"
                    alt="error-manganer">
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
            </div>
          </div>
        </div>
      </div>
      <div class="about-distribution">
        <div class="distribution_txt">
          <div class="distribution-title">
            Kênh phân phối
          </div>
          <div class="distribution-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio tincidunt cum
            risus morbi adipiscing mauris non.
          </div>
        </div>
        <div class="btn_bank">
          <button class="btn-bank">
            Kênh hợp tác ngân hàng
          </button>
          <button class="btn-bank">
            Tổ chức tài chính
          </button>
          <button class="btn-bank">
            Tổ chức doanh nghiệp
          </button>
        </div>
        <div class="about-bank">
          <ul class="bank-about">
            <li class="list-bank">
              <div v-for="(item, index) in bank" :key="index" class="ncb-bank">
                <div class="bank-nc">
                  <img id="ncb-img" :src="item.img" alt="error-ncb">
                  <div class="ncb-title">
                    {{ item.title }}
                  </div>
                  <div class="ncb-txt">
                    {{ item.txt }}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="abou-Notification">
          <div class="abou-Notification_txt">
            <div class="Notification-title">
              Thông cáo báo chí
            </div>
          </div>
          <div class="abou-Notification_img">
            <ul class="Notification-img">
              <li class="list-Notification">
                  <div class="Notification-ttxt" v-for="(item, index) in pressReleaseAbout"
                       :key="index">
                    <img id="Notification-img" :src="'https://api-map-life.grooo.com.vn/files/media/base/' + jsonParse(item.image)[0]" alt="error-ncb">
                    <div class="ncb-title Notification-title">
                      {{ isType(item.title) }}
                    </div>
                    <div class="ncb-txt Notification-txt">
                      {{ isType(item.description) }}
                    </div>
                    <div class="icon-chiteit">
                      <div class="chitiet-txt">
                        {{ item.chitiet }}
                      </div>
                      <div class="chitiet-icon">
                        <img :src="item.icon" alt="">
                      </div>
                    </div>
                  </div>
              </li>
              <div class="NotificationAll">
                <a href="#" class="allNotifion">Xem tất cả</a>
              </div>
            </ul>
          </div>
        </div>
        <div class="finance">
          <ul class="finance-img">
            <li v-for="(item, index) in finance" :key="index" class="list-finance">
              <div class="finance-colum">
                <div class="finance-colum_img">
                  <img :src="item.img" alt="error-finance">
                </div>
                <div class="finance-colum_title">
                  {{ item.title }}
                </div>
                <div class="finance-colum_txt">
                  {{ item.txt }}
                </div>
                <div class="finance-colum_detail">
                  <div class="colum_detail-txt">
                    {{ item.detail }}
                  </div>
                  <div class="colum_detail-img">
                    <img :src="item.icon" alt="">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="aboutvideo">
          <div class="aboutvideo-item">
            <div class="about-video">
              <div class="about-title">
                Videos & ảnh
              </div>
              <div class="about-txt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate amet
                sit.
              </div>
            </div>
            <ul class="about-video">
              <li class="list-video">
              </li>
              <div class="NotificationAll">
                <div class="video-nextIcon">
                  <ul class="dots">
                  </ul>
                </div>
                <a href="#" class="allNotifion">Xem tất cả</a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

// const $ = require("jquery");
// window.$ = $;
export default {
  components: {

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
    }
  },
  mounted () {
    /**
     * @description: manganer ( giám đốc )
     * Author: NSDThinh 28/02/2023
     */
    this.$store.dispatch('setManganAbout')
    this.$store.dispatch('setPressRelease')
  },
  created () {},
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
