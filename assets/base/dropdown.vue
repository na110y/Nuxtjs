<template>
  <div>
    <div class="combobox">
      <input
        id="tp"
        v-model="item.key"
        type="text"
        :placeholder="placeholder"
        @click="toggleDrop"
      >
      <div v-if="isShowDrop" class="StyleCombobox">
        <ul
          v-for="item in data"
          :key="item.key"
          class="listDrop"
          :value="item.key"
        >
          <li class="listItem" @click="selectItem(item.key)">
            {{ item.value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyCombobox',
  props: {
    data: {
      type: Array
    },
    propKey: {
      // Key của dữ liệu
      required: false,
      default: 'key'
    },
    propValue: {
      // Value của dữ liệu
      required: false,
      default: 'value'
    },
    propApi: {
      // Nếu có api thì lấy dữ liệu từ api
      type: String,
      required: false,
      default: null
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      dataApi: [], // dữ liệu lấy từ api
      isShowDrop: false,
      item: {}
    }
  },
  methods: {
    isToggle (isShowDrop) {
      this.isShowDrop = isShowDrop
    },
    toggleDrop () {
      this.isToggle(true)
    },
    /**
     * @description: Hàm này để hiển thị danh sách thành phố
     */
    selectItem (key) {
      this.item.key = key
      // this.item('update:modelValue', key)
      this.item.key = this.formatEnum(key)
      console.log(this.item.key)
      this.isToggle(false)
    },
    formatEnum (key) {
      switch (key) {
        case 1:
          return 'Hà Nội'
        case 2:
          return 'Đà Nẵng'
        case 3:
          return 'Sài Gòn'
        case 4:
          return 'Nha Trang'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/_variables.scss";
.combobox {
  position: relative;
}
.fooAsk {
  margin-left: 4px;
  color: #F41436;
}
label {
  color: $news-title;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
input {
  outline: none;
  width: 100%;
  border: 1px solid #D7D9E2;
  border-radius: 4px;
  height: 45px;
  margin: 8px 0 16px 0;
  padding: 12px;
  font-family: $font;
  color:$text-colorRank ;
}
.listItem {
  padding: 10px 20px;
  font-family: sans-serif;
}

ul {
  list-style: none;
  width: 100%;
  z-index: 1;
  li {
    max-width: 260px;
    width: 100%;
    z-index: 1;
  }
}
.StyleCombobox .listDrop {
  list-style: none;
  width: 100%;
  z-index: 1;
}

.StyleCombobox {
  position: absolute;
  border: 1px solid #d7d9e2;
  width: 199px;
  cursor: pointer;
  top: 60px;
  z-index: 1;
  background-color: #fff;
  color: #7e7e84;
  .listDrop {
    &:hover {
      background-color: $border;
      color: #fff;
    }
  }
}
* {
  padding: 0;
  margin: 0;
}
</style>
