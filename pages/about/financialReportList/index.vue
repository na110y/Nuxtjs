<template>
  <div class="financialReport">
    <div class="newsSlide">
      <img id="newsSlideList" src="@/assets/img/taichinh.jpg" alt="error-SlideNews">
      <div class="banner__title">
        <div class="newsSlide-title">
          Báo cáo tài chính
        </div>
      </div>
      <div class="banner__txt">
        Báo cáo tài chính
      </div>
      <div class="banner__item">
        <table class="banner__item-list">
          <tbody v-for="(finItem,index) in financialApi.data" :key="index" class="banner__item-link">
            <tr class="banner__item-icon">
              <td>
                <div class="body-header">
                  <img src="@/assets/img/pdf.svg" alt="error-pdf">
                  <a :href="'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(finItem.file_report)">
                    <div class="banner__item-name">
                      {{ $validate.isType(finItem.name) }}
                    </div>
                  </a>
                </div>
              </td>
            </tr>
            <tr class="space-between">
              <td>
                <div class="banner__item-date">
                  {{ $validate.formatDate(finItem.updated_at) }}
                </div>
              </td>
              <td>
                <a :href="'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(finItem.file_report)">
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
  data () {
    return {
    }
  },
  computed: {
    financialApi () {
      return this.$store.state.financialReport
    }
  },
  created () {},
  mounted () {
    this.$store.dispatch('setFinancial')
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/variables";
.banner__item {
  max-width: 1170px;
  margin: auto;
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
}
.financialReport {
  margin-top: 93px;
}
.newsSlide-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  color: $bgc-body;
}
#newsSlideList {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
}
</style>
