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
        <b-tab :title="$t('productDetail.ProductFeatures')" active>
          <b-card-text>
            <div class="contener">
              <div class="bank-Item">
                <div class="bank-img">
                  <img
                    id="img-column"
                    :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $vali.jsonParse(bankItem.image)"
                    alt="error-imgBank"
                  >
                </div>
                <div class="bank-txt" v-html="$t($vali.isType(bankItem.introduction,$i18n.locale))" />
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab :title="$t('productDetail.condition')">
          <b-card-text>
            <div class="contener">
              <div class="bank-contact" v-html="$t($vali.isType(bankItem.contact_info,$i18n.locale))" />
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
  data() {
    return {
      bankItem: {}
    }
  },
  computed: {
  },
  mounted() {
    this.getDataNewDetail()
  },
  methods: {
    async getDataNewDetail() {
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
@import "assets/scss/mixins";
.newsSlide {
  position: relative;
  @include deptop1024 {
    position: relative;
  }
  @include deptop920 {
    position: relative;
  }
  @include deptop820 {
    position: relative;
  }
  @include deptop412 {
    position: relative;
    margin-top: 65px;
  }
  @include deptop390 {
    position: relative;
    margin-top: 65px;
  }
  @include deptop375 {
    position: relative;
    margin-top: 65px;
  }
  @include deptop360 {
    position: relative;
    margin-top: 65px;
  }
}
#newsSlideList {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.bank-contact {
  color: $text-colorRank;
  margin: 50px 0;
  @include deptop1024 {
    margin: 30px 20px;
  }
  @include deptop920 {
    margin: 30px 20px;
  }
  @include deptop820 {
    margin: 30px 20px;
  }
  @include deptop412 {
    margin: 30px 20px;
  }
  @include deptop390 {
    margin: 30px 20px;
  }
  @include deptop375 {
    margin: 30px 20px;
  }
  @include deptop360 {

  }
}
.bank-Item {
  display: flex;
  gap: 0 30px;
  margin: 50px 0;
  @include deptop1024 {
    display: flex;
    gap: 0 30px;
    margin: 30px 20px;
  }
  @include deptop920 {
    display: flex;
    gap: 0 30px;
    margin: 30px 20px;
  }
  @include deptop820 {
    display: flex;
    gap: 0 30px;
    margin: 30px 20px;
  }
  @include deptop412 {
    display: flex;
    gap: 0 30px;
    margin: 30px 20px;
  }
  @include deptop390 {
    display: flex;
    gap: 0 30px;
    margin: 30px 20px;
  }
  @include deptop375 {
    display: flex;
    gap: 0 30px;
    margin: 30px 20px;
  }
  @include deptop360 {

  }
}
.bank-txt {
  color: $text-colorRank;
}
#img-column {
  width: 170px;
  height: auto;
  max-height: 350px;
  max-width: unset;
  @include deptop1024 {
    width: 170px;
    height: auto;
    max-height: 350px;
    max-width: unset;
  }
  @include deptop920 {
    width: 170px;
    height: auto;
    max-height: 350px;
    max-width: unset;
  }
  @include deptop820 {
    width: 170px;
    height: auto;
    max-height: 350px;
    max-width: unset;
  }
  @include deptop412 {
    width: 130px;
    height: auto;
    max-height: 350px;
    max-width: unset;
  }
  @include deptop390 {
    width: 120px;
    height: auto;
    max-height: 350px;
    max-width: unset;
  }
  @include deptop375 {
    width: 120px;
    height: auto;
    max-height: 350px;
    max-width: unset;
  }
  @include deptop360 {
    width: 120px;
    height: auto;
    max-height: 350px;
    max-width: unset;
  }
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
::v-deep span {
  color: $text-colorRank;
}
::v-deep p {
  color: $text-colorRank;
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
  @include deptop1024 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop920 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop820 {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop412 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop390 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop375 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop360 {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
}
</style>
