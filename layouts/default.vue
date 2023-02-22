<template>
  <div>
    <my-header/>
    <nuxt-child />
    <my-footer />
  </div>
</template>
<script>
import myHeader from '../layouts/header/myHeader.vue'
import myFooter from '../layouts/footer/myFooter.vue'

export default {
  name: 'default',
  components: { myFooter, myHeader }
}
</script>
