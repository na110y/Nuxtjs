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
    <div class="contener">
      <div class="newsList_img">
        <div v-for="(item,index) in filteredList" :key="index" class="news_imgage-column">
          <div class="newsList-column">
            <img
              id="img-column"
              :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(item.image)[0]"
              alt="error-imgFamily"
            >
          </div>
          <div class="newsList-body">
            <div class="newsList-item">
              <nuxt-link :to="`/about/notificationList/${ $validate.isType(item.slug)}`">
                <div class="newsList-title">
                  {{ $validate.isType(item.title) }}
                </div>
              </nuxt-link>
              <div class="newsList-txt">
                {{ $validate.isType(item.description) }}
              </div>
            </div>
            <a href="#" class="post-item__link">
              <nuxt-link :to="`/about/notificationList/${ $validate.isType(item.slug) }`">
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
  data() {
    return {
      listNews: [],
      current_page: 1,
      pageSize: 5
    }
  },
  computed: {
    rows() {
      return this.listNews.length
    },
    filteredList() {
      const star = (this.current_page - 1) * this.pageSize
      const end = this.current_page * this.pageSize
      const result = this.listNews.slice(star, end)
      return result
    }
  },
  created() {
    this.getListPagingNews()
  },
  mounted() {},
  methods: {
    async getListPagingNews() {
      const me = this
      const res = await me.$axios.get(
        process.env.baseApiUrl + '/post/fe-list-press-release')
      me.listNews = res.data.data.data
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/variables";
@import "assets/scss/mixins";
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
  margin-top: 30px;
  display: flex;
  gap: 0 30px;
  margin-bottom: 30px;
  @include deptop1024 {
    margin-top: 30px;
    display: flex;
    gap: 0 30px;
    margin-bottom: 30px;
  }
  @include deptop920 {
    margin-top: 30px;
    display: flex;
    gap: 0 30px;
    margin-bottom: 30px;
  }
  @include deptop820 {
    margin-top: 30px;
    display: flex;
    gap: 0 30px;
    margin-bottom: 30px;
  }
  @include deptop412 {
    margin-top: 20px;
    display: block;
    gap: 0 20px;
    margin-bottom: 20px;
  }
  @include deptop390 {
    margin-top: 20px;
    display: block;
    gap: 0 20px;
    margin-bottom: 20px;
  }
  @include deptop375 {
    margin-top: 20px;
    display: block;
    gap: 0 20px ;
    margin-bottom: 20px;
  }
  @include deptop360 {
    margin-top: 20px;
    display: block;
    gap: 0 20px;
    margin-bottom: 20px;
  }
}
.newsList-column {
  width: 25%;
  @include deptop1024 {
    width: 25%;
  }
  @include deptop920 {
    width: 25%;
  }
  @include deptop820 {
    width: 25%;
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
#img-column {
  width: 100%;
  height: 210px;
  object-fit: cover;
  @include deptop1024 {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }
  @include deptop920 {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @include deptop820 {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @include deptop412 {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @include deptop390 {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @include deptop375 {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @include deptop360 {
    width: 100%;
    height: auto;
    object-fit: cover;
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
  @include deptop1024 {
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
  @include deptop920 {
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
  @include deptop820 {
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
  @include deptop412 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $news-title;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    height: 60px;
  }
  @include deptop390 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $news-title;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    height: 60px;
  }
  @include deptop375 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $news-title;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    height: 60px;
  }
  @include deptop360 {
    margin-top: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    color: $news-title;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    height: 60px;
  }
}
.newsList-body {
  width: 75%;
  @include deptop1024 {
    width: 75%;
  }
  @include deptop920 {
    width: 75%;
  }
  @include deptop820 {
    width: 75%;
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
  @include deptop1024 {
    margin-top: 8px;
    font-size: 14px;
    line-height: 21px;
    color: $text-colorRank;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-bottom: 30px;
  }
  @include deptop920 {
    margin-top: 8px;
    font-size: 14px;
    line-height: 21px;
    color: $text-colorRank;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-bottom: 30px;
  }
  @include deptop820 {
    margin-top: 8px;
    font-size: 14px;
    line-height: 21px;
    color: $text-colorRank;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-bottom: 30px;
  }
  @include deptop412 {
    margin-top: 8px;
    font-size: 12px;
    line-height: 21px;
    color: $text-colorRank;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-bottom: 10px;
  }
  @include deptop390 {
    margin-top: 8px;
    font-size: 12px;
    line-height: 21px;
    color: $text-colorRank;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-bottom: 10px;
  }
  @include deptop375 {
    margin-top: 8px;
    font-size: 12px;
    line-height: 21px;
    color: $text-colorRank;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-bottom: 10px;
  }
  @include deptop360 {
    margin-top: 8px;
    font-size: 12px;
    line-height: 21px;
    color: $text-colorRank;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 2;
    margin-bottom: 10px;
  }
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
