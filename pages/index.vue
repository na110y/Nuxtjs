<template>
  <div>
    <b-carousel
      id="carousel-fade"
      fade
      img-width="1920"
      img-height="450"
    >
      <b-carousel-slide
        img-src="../assets/img/image.png"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="../assets/img/image2.png"
      ></b-carousel-slide>
    </b-carousel>

  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {}
  },
  methods: {}
}
</script>
<script>
export default {
  name: 'my-home',
  components: {},

  data () {
    return {}
  },
  methods: {},
  computed: {},

}
</script>
<style lang="scss" scoped>
@import "./assets/scss/main";
</style>
