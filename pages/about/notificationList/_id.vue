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
            <div class="newsList-body">
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
  data () {
    return {
      itemNews: {},
      listNews: []

    }
  },
  mounted () {
    this.getDataNewDetail()
    this.getListPagingNews()
  },
  methods: {
    btnClickItem (index) {
      this.itemNews = this.listNews[index]
      this.$router.push({ path: `/about/notificationList/${this.isType(this.itemNews.slug)}` })
      console.log(this.$router.push({ path: `/about/notificationList/${this.isType(this.itemNews.slug)}` }))
    },
    async getListPagingNews () {
      const me = this
      const res = await me.$axios.get(
        process.env.baseApiUrl + '/post/fe-latest-press-release')
      me.listNews = res.data.data
    },
    async getDataNewDetail () {
      const res = await this.$axios
        // eslint-disable-next-line no-undef
        .get(process.env.baseApiUrl + `/post/fe-press-release-detail?slug=${this.$route.params.id}`)
      if (res) {
        this.itemNews = res.data.data
      }
    },
    isType (string) {
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
}

.newsItem-thumbnail_img {
  margin-top: 35px;
  width: 30%;
}

.newsItem-thumbnail-column {
  width: 70%;
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
}
.newsItem-thumbnail__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: $titleListID;
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
