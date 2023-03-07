<template>
  <div class="header">
    <my-header />
    <nuxt-child />
    <my-footer />
  </div>
</template>
<script>
import myFooter from './footer/my-footer.vue'
import myHeader from './header/my-header.vue'

export default {
  name: 'Default',
  components: { myFooter, myHeader }
}
</script>
