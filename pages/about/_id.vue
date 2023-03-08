<template>
  <div class="modal">
    <div class="container">
      <div class="banner-header">
        Ban giám đốc
      </div>
      <div class="banner-body">
        <img
          id="img-column"
          :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(item.image)[0]"
          alt="error-imgFamily"
        >
        <ul class="banner-use">
          <li class="banner-info">
            <div class="banner-name">
              {{ $validate.isType(item.name) }}
            </div>
            <div class="banner-position">
              {{ $validate.isType(item.position) }}
            </div>
            <div class="banner-txt" v-html="$validate.isType(item.content)" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  name: 'Managaner',
  props: {},
  data () {
    return {
      item: {}
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.getDataProductDetail()
  },
  methods: {
    async getDataProductDetail () {
      const res = await this.$axios
        .get(process.env.baseApiUrl +
          `/bod/fe-list-bod?id=${this.$route.params.id}`)
      if (res) {
        this.item = res.data.data[0]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables";
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: .5;
}
</style>
