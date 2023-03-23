<template>
  <div class="financialReport">
    <div class="newsSlide">
      <img id="newsSlideList" src="@/assets/img/taichinh.jpg" alt="error-SlideNews">
      <div class="banner__title">
        <div class="newsSlide-title">
          {{ $t('footer.Financial') }}
        </div>
      </div>
      <div class="banner__txt">
        {{ $t('footer.Financial') }}
      </div>
      <div class="banner__item">
        <table class="banner__item-list">
          <tbody v-for="(finItem,index) in financialApi.data" :key="index" class="banner__item-link">
            <tr class="banner__item-icon">
              <td>
                <div class="body-header">
                  <img src="@/assets/img/pdf.svg" alt="error-pdf">
                  <a :href="'https://api-map-life.grooo.com.vn/files/media/base/' + $vali.jsonParse(finItem.file_report)">
                    <div class="banner__item-name">
                      {{ $t($vali.isType(finItem.name,$i18n.locale)) }}
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr class="space-between">
              <td>
                <div class="banner__item-date">
                  {{ $vali.formatDate(finItem.updated_at) }}
                </div>
              </td>
              <td>
                <a :href="'https://api-map-life.grooo.com.vn/files/media/base/' + $vali.jsonParse(finItem.file_report)">
                  <div class="export">
                    <img src="@/assets/img/execl.svg" alt="error-export">
                  </div>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: { },
  props: {},
  data() {
    return {
    }
  },
  computed: {
    financialApi() {
      return this.$store.state.financialReport
    }
  },
  created() {},
  mounted() {
    this.$store.dispatch('setFinancial')
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/variables";
@import "assets/scss/mixins";
.banner__item {
  max-width: 1170px;
  margin: auto;
  @include deptop1024 {
    padding: 0 30px;
  }
  @include deptop920 {
    padding: 0 30px;
  }
  @include deptop820 {
    padding: 0 30px;
  }
  @include deptop412 {
    padding: 0 20px;

  }
  @include deptop390 {
    padding: 0 20px;
  }
  @include deptop375 {
    padding: 0 20px;
  }
  @include deptop360 {
    padding: 0 20px;
  }
}
table {
  width: 100%;
  margin-bottom: 50px;
}
.space-between {
  display: flex;
  gap: 0 50px;
}
.banner__item-name {
  color: #2B79F7;
  cursor: pointer;
  &:hover {
    transition: all .5s ease-in-out;
    color: $text-color;
  }
}
.banner__item-link {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom:1px solid $border ;
}
.export {
  cursor: pointer;
}
.banner__txt {
  max-width: 1170px;
  margin: auto;
  font-size: 32px;
  line-height: 48px;
  font-weight: 700;
  color: $news-title;
  padding: 80px 0;
  @include deptop1024 {
    max-width: 1170px;
    margin: auto;
    font-size: 30px;
    line-height: 48px;
    font-weight: 700;
    color: $news-title;
    padding: 50px 30px;
  }
  @include deptop920 {
    max-width: 1170px;
    margin: auto;
    font-size: 24px;
    line-height: 48px;
    font-weight: 700;
    color: $news-title;
    padding: 50px 30px;
  }
  @include deptop820 {
    max-width: 1170px;
    margin: auto;
    font-size: 20px;
    line-height: 48px;
    font-weight: 700;
    color: $news-title;
    padding: 50px 30px;
  }
  @include deptop412 {
    max-width: 1170px;
    margin: auto;
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    color: $news-title;
    padding:20px;
  }
  @include deptop390 {
    max-width: 1170px;
    margin: auto;
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    color: $news-title;
    padding:20px;
  }
  @include deptop375 {
    max-width: 1170px;
    margin: auto;
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    color: $news-title;
    padding:20px;
  }
  @include deptop360 {
    max-width: 1170px;
    margin: auto;
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    color: $news-title;
    padding:20px;
  }
}
tbody {
  display: flex;
}
.body-header {
  display: flex;
  gap: 0 15px;
}

ol, ul, dl {
  padding-left: 0;
  margin-bottom: 0;
}
.banner__title {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include deptop1280 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 32%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include deptop1024 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include deptop920 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 14%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include deptop820 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include deptop412 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include deptop390 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 13%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include deptop375 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 17%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include deptop360 {
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.financialReport {
  margin-top: 93px;
  @include deptop1024 {
    margin-top: 65px;
  }
  @include deptop920 {
    margin-top: 65px;
  }
  @include deptop820 {
    margin-top: 65px;
  }
  @include deptop412 {
    margin-top: 65px;
  }
  @include deptop390 {
    margin-top: 65px;
  }
  @include deptop375 {
    margin-top: 65px;
  }
  @include deptop360 {
    margin-top: 65px;
  }
}
.newsSlide-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  color: $bgc-body;
  @include deptop1024 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop920 {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    line-height: 48px;
    color: $bgc-body;
  }
  @include deptop820 {
    text-align: center;
    font-size: 20px;
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
#newsSlideList {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
}
</style>
