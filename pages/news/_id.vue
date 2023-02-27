<template>
  <div class="newsList">
    <div class="newsSlide">
      <img id="newsSlideList" src="@/assets/img/news.png" alt="error-SlideNews">
      <div class="banner__title">
        <div class="container">
          <div class="newsSlide-title">
            Tin tức
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="newsList-thumbnail">
        <div class="newsItem-thumbnail_img">
          <img
            id="thumbnail_img"
            :src="
              'https://api-map-life.grooo.com.vn/files/media/base/' + itemNews.image"
            alt="errorItem"
          >
        </div>
        <div class="newsItem-thumbnail-column">
          <div class="newsItem-thumbnail_title">
            {{ isType(itemNews.title) }}
          </div>
          <div class="newsItem-thumbnail_txt">
            {{ isType(itemNews.description) }}
          </div>
          <div class="newsItem-thumbnail_txt" v-html="isType(itemNews.content)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      news: {},
      itemNews: {}

    }
  },
  computed: {},
  created () {},
  mounted () {
    /**
     * @description: news ( tin tức mới nhất )
     * Author: NSDThinh 25/02/2023
     */
    this.getDataNewDetail()
  },
  methods: {
    async getDataNewDetail () {
      const res = await this.$axios
        // eslint-disable-next-line no-undef
        .get(process.env.baseApiUrl + '/post/fe-get-detail?slug=' + `${this.isType(itemNews.slug)}`, { params: { id: this.$route.params.slug } })
      if (res) {
        this.itemNews = res.data.data.data.slug
        console.log(this.itemNews)
      }
    },
    jsonParse (value) {
      if (value) {
        return JSON.parse(value)
      }
      return ''
    },
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
@import "assets/scss/variables";
::v-deep .container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
  --bs-gutter-x: 0;
}
.newsList-thumbnail {
  display: flex;
  margin: 50px 0;
  gap: 0 30px;
}
.newsItem-thumbnail_img {
  width: 25%;
}
.newsItem-thumbnail-column {
  width: 75%;
}
.newsItem-thumbnail_title {
  font-size: 24px;
  font-family: $font;
  color: $news-title;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 32px;
}
.newsItem-thumbnail_txt {
  font-size: 14px;
  font-family: $font;
  color: $text-colorRank;
  font-weight: 400;
  margin-bottom: 24px;
  line-height: 24px;
}
::v-deep span {
  color: $text-colorRank;
  font-weight: 400;
}
::v-deep p {
  margin-bottom: 8px;
}
::v-deep table {
  margin: 24px 0;
}
::v-deep a {
  color: $text-colorRank;
}
#thumbnail_img {
  width: 100%;
  height: 210px;
  //object-fit: cover;
}
#newsSlideList {
  width: 100%;
  height: auto;
  object-fit: cover;
  position: relative;
}
.banner__title {
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container {
  max-width: 1170px;
  margin: auto;
}
.newsSlide-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  line-height: 48px;
  color: $bgc-body;
}
.newsList {
  margin-top: 93px;
}
.contener {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}
.news_imgage-column {
  margin-top: 30px;
  display: flex;
  gap: 0 30px;
  margin-bottom: 30px;
}
.newsList-column {
  width: 40%;
}
#img-column {
  width: 100%;
  height: 210px;
}
.newsList-title {
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: $news-title;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  height: 60px;
}
.newsList-body {
  width: 60%;
}
.newsList-txt {
  margin-top: 8px;
  font-size: 14px;
  line-height: 21px;
  color: $text-colorRank;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin-bottom: 50px;
}
</style>
