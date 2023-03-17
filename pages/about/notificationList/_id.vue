<template>
  <div class="newsList">
    <div class="newsSlide">
      <img id="newsSlideList" src="@/assets/img/news.png" alt="error-SlideNews">
      <div class="banner__title">
        <div class="container">
          <div class="newsSlide-title">
            Thông cáo báo chí
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="newsList-thumbnail">
        <div class="newsItem-thumbnail_img">
          <div class="newsItem-thumbnail__title">
            Thông cáo báo chí gần đây
          </div>
          <div v-for="(item,index) in listNews" :key="index" class="news_imgage-column">
            <div class="newsList-column">
              <img
                id="img-column"
                :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(item.image)"
                alt="error-imgFamily"
              >
            </div>
            <div class="newsList-body" @click="scrollToTop">
              <div class="newsList-item">
                <nuxt-link :to="`/about/notificationList/${$validate.isType(item.slug)}`">
                  <div class="newsList-title" @click.prevent="btnClickItem(index)">
                    {{ $validate.isType(item.title) }}
                  </div>
                </nuxt-link>
                <div class="newsList-txt">
                  {{ $validate.formatDate(item.public_date) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="newsItem-thumbnail-column">
          <div class="newsItem-thumbnail_title">
            {{ $validate.isType(itemNews.title) }}
          </div>
          <div class="newsItem-thumbnail_txt">
            {{ $validate.isType(itemNews.description) }}
          </div>
          <div class="newsItem-thumbnail_txt" v-html="$validate.isType(itemNews.content)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      itemNews: {},
      listNews: []

    }
  },
  mounted() {
    this.getDataNewDetail()
    this.getListPagingNews()
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    btnClickItem(index) {
      try {
        this.itemNews = this.listNews[index]
        const newSlug = this.isType(this.itemNews.slug)
        const newRoute = {
          name: 'notificationList-id',
          params: { id: newSlug }
        }
        this.$router.replace(newRoute)
      } catch (error) {
        console.log(error)
      }
    },
    async getListPagingNews() {
      const me = this
      const res = await me.$axios.get(
        process.env.baseApiUrl + '/post/fe-latest-press-release')
      me.listNews = res.data.data
    },
    async getDataNewDetail() {
      const res = await this.$axios
        // eslint-disable-next-line no-undef
        .get(process.env.baseApiUrl + `/post/fe-press-release-detail?slug=${this.$route.params.id}`)
      if (res) {
        this.itemNews = res.data.data
      }
    },
    isType(string) {
      try {
        JSON.parse(string)
        {
          const obj = JSON.parse(string)
          return obj.vn
        }
      } catch (err) {
        console.error(`Failed to parse JSON data: ${err.message}`)
        return null
      }
    }

  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/variables";
@import "assets/scss/mixins";
::v-deep .container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
  --bs-gutter-x: 0;
}

#img-column {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: unset;
}

.newsList-thumbnail {
  display: flex;
  margin: 50px 0;
  gap: 0 30px;
  @include deptop1024 {
    display: flex;
    margin: 30px;
    gap: 0 30px;
  }
  @include deptop920 {
    display: flex;
    margin: 30px;
    gap: 0 30px;
  }
  @include deptop820 {
    display: flex;
    margin: 30px;
    gap: 0 30px;
  }
  @include deptop412 {
    display: flex;
    margin: 20px;
    gap: 0 20px;
    flex-wrap: wrap-reverse;
  }
  @include deptop390 {
    display: flex;
    margin: 20px;
    gap: 0 20px;
    flex-wrap: wrap-reverse;
  }
  @include deptop375 {
    display: flex;
    margin: 20px;
    gap: 0 20px;
    flex-wrap: wrap-reverse;
  }
  @include deptop360 {
    display: flex;
    margin: 20px;
    gap: 0 20px;
    flex-wrap: wrap-reverse;
  }
}

.newsItem-thumbnail_img {
  margin-top: 35px;
  width: 30%;
  @include deptop1024 {
    margin-top: 35px;
    width: 30%;
  }
  @include deptop920 {
    margin-top: 35px;
    width: 30%;
  }
  @include deptop820 {
    margin-top: 35px;
    width: 30%;
  }
  @include deptop412 {
    margin-top: 20px;
    width: 100%;
  }
  @include deptop390 {
    margin-top: 20px;
    width: 100%;
  }
  @include deptop375 {
    margin-top: 20px;
    width: 100%;
  }
  @include deptop360 {
    margin-top: 20px;
    width: 100%;
  }
}

.newsItem-thumbnail-column {
  width: 70%;
  @include deptop1024 {
    width: 70%;
  }
  @include deptop920 {
    width: 70%;
  }
  @include deptop820 {
    width: 70%;
  }
  @include deptop412 {
    width: 100%;
  }
  @include deptop390 {
    width: 100%;
  }
  @include deptop375 {
    width: 100%;
  }
  @include deptop360 {
    width: 100%;
  }
}

.newsItem-thumbnail_title {
  font-size: 24px;
  font-family: $font;
  color: $news-title;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 32px;
  @include deptop1024 {
    font-size: 20px;
    font-family: $font;
    color: $news-title;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 32px;
  }
  @include deptop920 {
    font-size: 20px;
    font-family: $font;
    color: $news-title;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 32px;
  }
  @include deptop820 {
    font-size: 16px;
    font-family: $font;
    color: $news-title;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 32px;
  }
  @include deptop412 {
    font-size: 16px;
    font-family: $font;
    color: $news-title;
    font-weight: 700;
    margin-bottom: 24px;
    line-height: 24px;
  }
  @include deptop390 {
    font-size: 16px;
    font-family: $font;
    color: $news-title;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 24px;
  }
  @include deptop375 {
    font-size: 16px;
    font-family: $font;
    color: $news-title;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 24px;
  }
  @include deptop360 {
    font-size: 16px;
    font-family: $font;
    color: $news-title;
    font-weight: 700;
    margin-bottom: 15px;
    line-height: 24px;
  }
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.container {
  max-width: 1170px;
  margin: auto;
}
.newsSlide {
  position: relative;
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
.newsItem-thumbnail__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: $titleListID;
  @include deptop1024 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: $titleListID;
  }
  @include deptop920 {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: $titleListID;
  }
  @include deptop820 {
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: $titleListID;
  }
  @include deptop412 {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $titleListID;
  }
  @include deptop390 {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $titleListID;
  }
  @include deptop375 {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $titleListID;
  }
  @include deptop360 {
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $titleListID;
  }
}

.newsList {
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

.contener {
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
}

.news_imgage-column {
  margin-top: 8px;
  display: flex;
  gap: 0 15px;
  margin-bottom: 15px;
}

.newsList-column {
  width: 40%;
}

.newsList-title {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: $news-title;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin-bottom: 8px;
  cursor: pointer;
  &:hover {
    transition: all .5s ease-in-out;
    color: $text-color;
  }
}

.newsList-body {
  width: 60%;
}

.newsList-txt {
  font-size: 12px;
  line-height: 21px;
  color: $text-colorRank;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin-bottom: 10px;
}
</style>
