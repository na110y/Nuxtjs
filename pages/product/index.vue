<template>
  <div class="product">
    <div class="product-list">
      <div class="product-list_img">
        <img id="spbanner" src="~/assets/img/spbanner.png" alt="error-SPBanner">
        <div class="product-list_title">
          {{ $t('productDetail.ProductPortfolio') }}
        </div>
      </div>
    </div>
    <div class="SP-list_column">
      <div
        v-for="(item,index) in productPage.data"
        :key="index.id"
        class="SP-list-link"
      >
        <div class="SP-list-image" tabindex="1" @keydown.enter="handleProduct(item, $event)">
          <img
            id="body_column-image"
            :src=" 'https://api-map-life.grooo.com.vn/files/media/base/' + $vali.jsonParse(item.image) "
            alt="error-image"
          >
        </div>
        <div class="list_column-txt">
          <nuxt-link :to="`/product/${ $t($vali.isType(item.slug,$i18n.locale))}`" :attrs="{ tabindex: '1' }">
            <div class="list_sp-title" tabindex="1" @keydown.enter="handleProduct(item, $event)">
              {{ $t( $vali.isType(item.name,$i18n.locale)) }}
            </div>
          </nuxt-link>
          <div class="list_sp-txt">
            {{ $t($vali.isType(item.description,$i18n.locale)) }}
          </div>
        </div>
      </div>
    </div>
    <div class="product-ask">
      <contact />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import contact from '~/components/base/contact.vue'
export default {
  name: 'ProductList',
  components: {
    contact
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      frontVN: null,
      item: {}
    }
  },
  computed: {
    ...mapState({
      productPage: state => state.productImage // dùng để giá trị sản phẩm từ store
    }),
    /**
     * @description: hàm này dùng để lấy ảnh sản phẩm từ store
     * Author: NSDThinh 21/02/2023
     */
    // eslint-disable-next-line vue/no-dupe-keys
    productPage() {
      return this.$store.state.productImage
    }

  },
  created() {
  },
  mounted() {
    this.setProduct() // sản phẩm nổi bật
  },
  methods: {
    handleProduct(item, event) {
      if (event.keyCode === 13) {
        this.$router.push('/product/' + this.$t(this.$vali.isType(item.slug, this.$i18n.locale)))
      }
    },
    ...mapActions({
      setProduct: 'setProduct'
    })
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/main";
.validateInput {
  border-color: red;
}
.btn-submit[disabled] {
  opacity: 0.5;
}

.btn-submit:not([disabled]) {
  opacity: 1;
}
</style>
