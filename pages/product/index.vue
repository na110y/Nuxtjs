<template>
  <div>
    <div class="slideProduct">
      <img src="../../assets/img/productImg.png" alt="errorProduct" id="productIM">
      <div class="slidee-txt">
        <div class="slideProductOpa"></div>
        <div class="slideProduct-txt">
          <div class="slide-title">Khang an thành tài</div>
          <div class="slide-txt">giúp bạn an tâm tận hưởng cuộc sống trọn vẹn bằng cách đảm bảo tương lai của con bạn, tạo
            dựng cho con trẻ điểm tựa vững chắc để tự tin lập nghiệp
          </div>
        </div>
      </div>
    </div>
    <div class="border-title">
      <ul class="border-item">
        <li class="border-link">
          Đặc điểm sản phẩm
        </li>
        <li class="border-link">
          Điều kiện
        </li>
        <li class="border-link">
          Quyền lợi
        </li>
        <li class="border-link">
          Tài liệu & biểu mẫu
        </li>
        <li class="border-link">
          Hỏi đáp
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {

    /**
     * @description: hàm này dùng để lấy ảnh slide page từ store
     * Author: NSDThinh 21/02/2023
     */
    homeSlide () {
      return this.$store.state.homeSlide
    },
    /**
     * @description: hàm này dùng để lấy ảnh sản phẩm từ store
     * Author: NSDThinh 21/02/2023
     */
    productImage () {
      return this.$store.state.productImage
    }
  },
  created () {
  },
  mounted () {
    /**
     * @description: homeslide
     * Author: NSDThinh 21/02/2023
     */
    this.$store.dispatch('setSlideHome')
    /**
     * @description: product
     * Author: NSDThinh 21/02/2023
     */
    this.$store.dispatch('setProduct')
  },
  methods: {
    /**
     * @description: hàm này dùng để hiển thị hết tất cả dòng chữ của text
     * Author: NSDThinh 21/02/2023
     */
    activeClickType (id) {
      this.activeClick = id
    },
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
  },
  components: {

    // validate
  }
}
</script>
<style lang="scss" scoped>
@import "./assets/scss/main";
</style>
