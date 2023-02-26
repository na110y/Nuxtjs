<template>
  <div class="newsList">
    <div class="newsSlide">
      <img src="@/assets/img/news.png" alt="error-SlideNews" id="newsSlideList">
      <div class="banner__title">
        <div class="container">
          <div class="newsSlide-title">
            Tin tức
          </div>
        </div>
      </div>

    </div>
    <div class="contener">
      <div class="newsList_img">
        <div class="news_imgage-column" v-for="(news,index) in newsPage.data" :key="index">
          <div class="newsList-column">
            <img
              :src="'https://api-map-life.grooo.com.vn/files/media/base/' + jsonParse(news.image)[0]"
              alt="erro-imgFamily"
              id="img-column"
            />
          </div>
          <div class="newsList-body">
            <div class="newsList-item">
              <div class="newsList-title">{{ isType(news.title) }}</div>
              <div class="newsList-txt">{{ isType(news.description) }}</div>
            </div>
            <a href="#" class="post-item__link">
              <nuxt-link :to="`/news/${news.id}`">
                <div class="post-item__link-txt">Xem chi tiết</div>
              </nuxt-link>
            </a>
          </div>
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
    return {}
  },
  computed: {
    /**
     * @description: hàm này dùng để giá trị từ store
     * Author: NSDThinh 25/02/2023
     */
    newsPage () {
      return this.$store.state.newsPage
    }
  },
  created () {
  },
  mounted () {
    /**
     * @description: news ( tin tức mới nhất )
     * Author: NSDThinh 25/02/2023
     */
    this.$store.dispatch('setNewsPage')
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
@import "assets/scss/variables";
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
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.contener {
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
  width: 25%;
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
  width: 75%;
}
.newsList-txt {
  margin-top: 8px;
  font-size: 14px;
  line-height: 21px;
  color: $text-colorRank;
  display: -webkit-box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin-bottom: 50px;
}
</style>
