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
              <div class="bank-img">
                <img
                  id="img-column"
                  :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(itemNews.image)"
                  alt="error-imgFamily"
                >
              </div>
              <div class="bank-txt">
                {{ $validate.isType(itemNews.introduction) }}
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="Điều kiện">
          <b-card-text>
            <div class="contener">
              <div class="bank-contact">
                {{ $validate.isType(itemNews.contact_info) }}
              </div>
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
      itemNews: {}
    }
  },
  computed: {
    productImage () {
      return this.$store.state.productImage
    }
  },
  mounted () {
    this.$store.dispatch('setSlideHome')
  },
  methods: {
    async getDataNewDetail () {
      const res = await this.$axios
        // eslint-disable-next-line no-undef
        .get(process.env.baseApiUrl + `/distributor/fe-get-detail?slug=${this.$route.params.id}`)
      if (res) {
        this.itemNews = res.data.data
      }
    }

  }

}
</script>
<style lang="scss" scoped>
</style>
