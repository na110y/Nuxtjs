<template>
    <div class="product-detail">
        <h3>product {{ product?.name }}</h3>
        <div>product {{ product?.id }} </div>
    </div>

</template>
<script >
// import axios from 'axios'
export default {
  name: 'product-detail',
  components: {},
  props: [
    'modelValue'
  ],
  asyncData (context) {
    // console.log(`https://api-map-life.grooo.com.vn/featured-product-categories?id=${context.params.id}`)
    // return axios
    //   .get(`https://api-map-life.grooo.com.vn/featured-product-categories12313123?id=${context.params.id}`)
    //   .then((response) => {
    //     console.log(response)
    //     return {
    //       product: response.data
    //     }
    //   })
    //   .catch((e) => {
    //     context.error(e)
    //   })
  },
  data () {
    return {
      product: {}
    }
  },
  /**
   * @description: Hàm này dùng để theo dõi sự thay đổi khi click vào sản phẩm
   * Author: NSDThinh - 25/02/2023
   */
  watch: {},
  computed: {
    /**
     * @description: hàm này dùng để lấy danh sách các sản phẩm trong store
     * Author: NSDThinh 21/02/2023
     */
    // eslint-disable-next-line vue/no-dupe-keys
    // productDetail () {
    //   return this.$store.state.productDetail
    // }
  },
  created () {

  },
  mounted () {
    /**
     * @description: product
     * Author: NSDThinh 21/02/2023
     */
    this.getDataDetail()
  },
  methods: {
    async getDataDetail () {
      const res = await this.$axios
        .get(process.env.baseApiUrl + '/featured-product-categories', { params: { id: this.$route.params.id } })
      console.log(2, res)
      if (res) {
        this.product = res.data.data[0]
      }
    },
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
.product-detail {
  margin-top: 93px;
}
</style>
