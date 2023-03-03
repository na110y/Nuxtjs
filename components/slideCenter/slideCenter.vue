<template>
  <carousel :per-page="perPage" :autoplay="autoplay">
    <slide v-for="(slide, index) in slides" :key="index">
      <img :src="slide.image">
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  props: {
    slides: {
      type: Array,
      required: true
    },
    perPage: {
      type: Number,
      default: 1
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  }
}
</script>
