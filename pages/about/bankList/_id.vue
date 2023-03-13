<template>
  <div class="bankItem">
    <div class="newsSlide">
      <img id="newsSlideList" src="@/assets/img/bankImg.jpg" alt="error-SlideNews">
      <div class="banner__title">
        <div class="container">
          <div class="newsSlide-title">
            Kênh hợp tác ngân hàng
          </div>
        </div>
      </div>
    </div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Đặc điểm sản phẩm" active>
          <b-card-text>
            <div class="contener">
              <div class="bank-Item">
                <div class="bank-img">
                  <img
                    id="img-column"
                    :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(bankItem.image)"
                    alt="error-imgBank"
                  >
                </div>
                <div class="bank-txt" v-html="$validate.isType(bankItem.introduction)" />
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="Điều kiện">
          <b-card-text>
            <div class="contener">
              <div class="bank-contact" v-html="$validate.isType(bankItem.contact_info)" />
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      bankItem: {}
    }
  },
  computed: {
  },
  mounted () {
    this.getDataNewDetail()
  },
  methods: {
    async getDataNewDetail () {
      const res = await this.$axios
        .get(process.env.baseApiUrl + `/distributor/fe-get-detail?slug=${this.$route.params.id}`)
      if (res) {
        this.bankItem = res.data.data
      }
    }

  }

}
</script>
<style lang="scss" scoped>
@import "assets/scss/variables";
.newsSlide {
  position: relative;
}
#newsSlideList {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.bank-contact {
  color: $text-colorRank;
  margin: 50px 0;

}
.bank-Item {
  display: flex;
  gap: 0 30px;
  margin: 50px 0;
}
.bank-txt {
  color: $text-colorRank;
}
#img-column {
  width: 170px;
  height: auto;
  max-height: 350px;
  max-width: unset;
}
::v-deep .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  background-color: $bgc-product;
  border: none;
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

.banner__title {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.newsSlide-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  color: $bgc-body;
}
</style>
