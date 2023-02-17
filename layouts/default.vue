<template>
  <div>
    <my-header/>
    <nuxt-child />
  </div>
</template>
<script>
import myHeader from '../layouts/header/myHeader.vue'

export default {
  name: 'default',
  components: { myHeader }
}
</script>
