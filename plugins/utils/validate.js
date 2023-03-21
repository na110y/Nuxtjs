/**
 * @description: hàm này dùng để validate
 * Author: NSDThinh 22/02/2023
 */
export default ({ app }, inject) => {
  inject('validate', {
    isTypeLang(string) {
      try {
        JSON.parse(string)
        {
          const obj = JSON.parse(string)
          return obj.vn
        }
      } catch (err) {
      }
    },
    isType(string, language) {
      try {
        const obj = JSON.parse(string)
        return obj[language]
      } catch (err) {
        console.log(err)
      }
    },
    // lấy giá trị ảnh từ api
    jsonParse(value) {
      try {
        if (value) {
          return JSON.parse(value)
        }
        return ''
      } catch (err) {
      }
    },
    // hàm này dùng để validEmail
    isEmail(email) {
      // eslint-disable-next-line no-useless-escape
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    },
    // hàm này dùng để validate number
    isNumber(value, positive = false) {
      if (positive) {
      // eslint-disable-next-line no-useless-escape
        return /^\d+$/.test(value) && value > 0
      }
      // eslint-disable-next-line no-useless-escape
      return /^\d+$/.test(value)
    },
    /**
     * @description: Hàm này dùng để Format Date (ngày tháng năm)
     * @param {Object} dob - gán sự kiện để format theo dạng ngày tháng năm
     */
    formatDate(dob) {
      if (dob) {
        dob = new Date(dob)
        // Lấy ra ngày:
        let date = dob.getDate()
        date = date < 10 ? `0${date}` : date
        // Lấy ra tháng:
        let month = dob.getMonth() + 1
        month = month < 10 ? `0${month}` : month
        // Lấy ra năm:
        const year = dob.getFullYear()
        dob = `${date}/${month}/${year}`
      } else {
        dob = ''
      }
      return dob
    },
    // hàm này dùng để format giá trị key của value
    formatEnum(key) {
      switch (key) {
        case 1:
          return 'Sản phẩm nổi bật'
        case 2:
          return 'Tin tức mới nhất'
        case 3:
          return 'Dịch vụ khách hàng'
        case 4:
          return 'Về Mirae Asset Presvoir'
      }
    }
  })
}
