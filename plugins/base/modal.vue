<template>
  <div v-if="isShowModal" class="modalItem">
    <div class="modal-use">
      <div class="modalheader">
        Ban giám đốc
      </div>
      <div class="modal-body">
        <div class="modal-img">
          <img id="itemImg" :src="'https://api-map-life.grooo.com.vn/files/media/base/' + $validate.jsonParse(use.image)[0]" alt="">
        </div>
        <div class="modal-info">
          <div class="modal-name">
            {{ $validate.isType(use.name) }}
          </div>
          <div class="modal-position">
            <div class="overflow">
              {{ $validate.isType(use.position) }}
            </div>
          </div>
          <div class="modal-content" v-html="$validate.isType(use.content)" />
        </div>
      </div>
      <div class="modal-end">
        <div class="closeModal" @click="btnCloseModal">
          Đóng
        </div>
      </div>
    </div>
    <div class="modal-dialong" />
  </div>
</template>
<script>
export default {
  name: 'MyModal',
  props: [
    'isShowModal',
    'itemSelectedID'
  ],
  data () {
    return {
      use: {}
    }
  },
  watch: {
    itemSelectedID (value) {
      if (value) {
        this.$axios
          .get(process.env.baseApiUrl + `/bod/fe-list-bod?id=${this.itemSelectedID}`)
          .then((response) => {
            this.use = response.data.data[0]
          })
          .catch((res) => {
            console.log(res)
          })
      }
    }
  },
  methods: {
    btnCloseModal () {
      this.$emit('closeModal', false)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/variables";
.modalItem {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.modal-body {
  display: flex;
  gap: 0 30px;
  margin-top: 30px;
  padding: 0 25px;
}
.modal-img {
  width: 30%;
}
#itemImg {
  width: 100%;
}
.modal-info {
  width: 70%;
}
.modal-name {
  font-size: 16px;
  line-height: 24px;
  color: $body-column-title;
  font-weight: bold;
  margin-bottom: 8px;
}
.modal-position {
  font-size: 14px;
  line-height: 21px;
  color: $text-color--maganer;
  font-weight: 500;
  margin-bottom: 8px;

}

.modal-dialong {
  position: fixed;
  bottom: 0;
  right: 0;
  top:0;
  left:0;
  opacity: 0.5;
  background-color: #000;
}
.modal-end {
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  padding:20px;

}
.modal-content {

  font-size: 14px;
  color: $text-colorRank !important;
  height: 220px;
  overflow-y: auto;
  padding-right: 30px;
  text-align: justify;
}
::v-deep span {
  font-size: 14px;
  color: $text-colorRank !important;
  overflow: auto;
  margin-top: 10px;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
}
::-webkit-scrollbar-thumb {
  background-color: $text-color;
  cursor: pointer;

}
.closeModal {
  color: $bgc-body;
  height: 45px;
  font-size: 14px;
  line-height: 150%;
  font-weight: 700;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: $text-colorRank;
}
.modal-use{
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  max-width: 900px;
  height: auto;
  background-color: #fff;
  z-index: 999;
  opacity: 1;
  border-radius: 0.3rem;
  .modalheader {
    color: $news-title;
    font-size: 20px;
    line-height: 30px;
    background-color: $text-color;
    padding: 1rem;
    font-weight: bold;
  }
}
</style>
