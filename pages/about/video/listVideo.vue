<template>
  <div class="newsList">
    <div class="newsSlide">
      <img id="newsSlideList" src="@/assets/img/news.png" alt="error-SlideNews">
      <div class="banner__title">
        <div class="newsSlide-title">
          Thư viện
        </div>
      </div>
    </div>
    <div class="contener">
      <div class="newsList_img">
        <div v-for="(news,index) in filteredList" :key="index" class="news_imgage-column">
          <div class="newsList-column">
            <img
              id="img-column"
              :src="'https://api-map-life.grooo.com.vn/files/media/base/' +
                $validate.jsonParse(news.poster)[0]"
              alt="error-imgFamily"
            >
          </div>
          <div class="newsList-body">
            <div class="newsList-item">
              <nuxt-link :to="`/about/video/${ $validate.isType(news.slug)}`">
                <div class="newsList-title">
                  {{ $validate.isType(news.name) }}
                </div>
              </nuxt-link>
            </div>
            <a href="#" class="post-item__link">
              <nuxt-link :to="`/about/video/${ $validate.isType(news.slug)}`">
                <div class="post-item__link-txt">Xem chi tiết</div>
              </nuxt-link>
            </a>
          </div>
        </div>
      </div>
      <div class="overflow-auto">
        <b-pagination
          v-model="current_page"
          :total-rows="rows"
          :per-page="pageSize"
          aria-controls="my-table"
        />
        <b-table
          id="my-table"
          :per-page="pageSize"
          :current-page="current_page"
          small
        />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {
  },
  props: {},
  data () {
    return {
      listNews: [],
      current_page: 1,
      pageSize: 5
    }
  },
  computed: {
    rows () {
      return this.listNews.length
    },
    filteredList () {
      const star = (this.current_page - 1) * this.pageSize
      const end = this.current_page * this.pageSize
      const result = this.listNews.slice(star, end)
      return result
    }
  },
  created () {
    this.getListPagingNews()
  },
  mounted () {},
  methods: {
    async getListPagingNews () {
      const me = this
      try {
        const res = await me.$axios.get(
          process.env.baseApiUrl + '/library/fe-about-library')
        me.listNews = res.data.data
      } catch (error) {
        console.log(error)
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
.newsSlide {
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
  height: 210px;
}
.newsList-column {
  width: 25%;
}
#img-column {
  width: 100%;
  height: 210px;
  object-fit: cover;
}
.post-item__link {
  color: $body-column-title;
}
.post-item__link-txt {
  color: $body-column-title;
  &::after {
    position: absolute;
    content: "";
    width: 7px;
    height: 7px;
    background: transparent;
    border-right: 2px solid $body-column-title;
    border-bottom: 2px solid $body-column-title;
    transform: rotate(-45deg);
    margin-top: -3px;
    top: 50%;
    left: 90px;
    font-weight: 400;
  }
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
  &:hover {
    transition: all .5s ease-in-out;
    color: $text-colorRank;
  }
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
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  margin-bottom: 50px;
}
::v-deep .pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 0 8px;
}
::v-deep .page-item:not(:first-child) .page-link {
  background-color: $bgc-body;
  color: $news-title;
  border-radius: 4px;
}
::v-deep .page-item.active .page-link {
  background-color: $text-color;
  color: $bgc-body;
  border-color: $text-color;
}
::v-deep .page-item:not(:first-child) .page-link .active {
  background-color: $bgc-body;
  color: $news-title;
  border-radius: 4px;
}
::v-deep .active > .page-link {
  background-color: $text-color;
  color: $bgc-body;
  border-radius: 4px;
  border-color: $border;
  box-shadow: none;
}
</style>
