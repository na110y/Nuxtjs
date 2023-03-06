<template>
  <div>
    <div class="" />
  </div>
</template>
<script>

export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {
    /**
     * @description: hàm này dùng để lấy dữ liệu khách hàng từ store
     * Author: NSDThinh 21/02/2023
     */
    homeCl () {
      return this.$store.state.clientPage
    }
  },
  created () {
  },
  mounted () {
    /**
     * @description: client ( khách hàng )
     * Author: NSDThinh 24/02/2023
     */
    this.$store.dispatch('setClient')
  },
  methods: {
    // biến đổi sang dạng json
    jsonParse (value) {
      try {
        if (value) {
          return JSON.parse(value)
        }
        return ''
      } catch (err) {
        console.error(`Failed to parse JSON data: ${err.message}`)
        return null
      }
    },
    isType (string) {
      try {
        JSON.parse(string)
        {
          const obj = JSON.parse(string)
          return obj.vn
        }
      } catch (err) {
        console.error(`Failed to parse JSON data: ${err.message}`)
        return null
      }
    }
  }
}
</script>
