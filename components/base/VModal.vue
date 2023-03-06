<template>
  <div v-if="isShow" class="showModal">
    <div class="HeaderModal">
      <div class="iconHeader">
        {{ modal.title }}
      </div>
      <div class="modalContent">
        <div class="modalImage">
          <img :src="modal.image" alt="">
        </div>
        <div class="modal-info">
          <div class="modal-title">
            {{ modal.name }}
          </div>
          <div class="modal-name">
            {{ modal.txt }}
          </div>
          <div class="modal-name">
            {{ modal.message }}
          </div>
        </div>
      </div>
      <div class="toastClose btn-close-white" @click="isShowCloseToast">
        <!-- <i class="bi bi-x-lg btn-close-white" id="toastClose"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Object,
      default: function () {
        return {
          modal: {
            title: '',
            message: '',
            txt: '',
            image: '',
            name: ''
          },
          position: ''
        }
      }
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  methods: {
    isShowCloseModal () {
      this.$emit('isShowModal', false)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/variables";
.showModal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  background-color: $bgc-modal;
}
</style>
