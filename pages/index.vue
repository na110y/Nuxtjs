<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/image.png" class="d-block w-100" alt="error">
      </div>
      <div class="carousel-item ">
        <img src="../assets/img/image2.png" class="d-block w-100" alt="error">
      </div>
    </div>
    <button class="carousel-control-prev btn-right" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon " aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next btn-left" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon " aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<script>
export default {
  name: 'my-home',
  components: {},

  data () {
    return {
      onSwiper: null,
      onSlideChange: null,

    }
  },
  computed: {},

}
</script>
<style lang="scss" scoped>
@import "./assets/scss/main";
</style>
