<!--<template>-->
<!--  <carousel :per-page="perPage" :autoplay="autoplay">-->
<!--    <slide>-->
<!--      <div class="list-video">-->
<!--        <img-->
<!--          id="imageVideo"-->
<!--          :src="'https://api-map-life.grooo.com.vn/files/media/base/' +-->
<!--            jsonParse(item.poster)[0]"-->
<!--          alt="errorImage"-->
<!--        >-->
<!--        <div class="list_icon-title">-->
<!--          {{ isType(item.name) }}-->
<!--        </div>-->
<!--      </div>-->
<!--    </slide>-->
<!--  </carousel>-->
<!--</template>-->

<!--<script>-->
<!--import { Carousel, Slide } from 'vue-carousel'-->

<!--export default {-->
<!--  components: {-->
<!--    Carousel,-->
<!--    Slide-->
<!--  },-->

<!--  props: {-->
<!--    item: {-->
<!--      type: String,-->
<!--      required: true-->
<!--    },-->
<!--    slides: {-->
<!--      type: Array,-->
<!--      required: true-->
<!--    },-->
<!--    perPage: {-->
<!--      type: Number,-->
<!--      default: 1-->
<!--    },-->
<!--    autoplay: {-->
<!--      type: Boolean,-->
<!--      default: true-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    jsonParse (value) {-->
<!--      if (value) {-->
<!--        return JSON.parse(value)-->
<!--      }-->
<!--      return ''-->
<!--    },-->
<!--    isType (string) {-->
<!--      JSON.parse(string)-->
<!--      {-->
<!--        const obj = JSON.parse(string)-->
<!--        return obj.vn-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
