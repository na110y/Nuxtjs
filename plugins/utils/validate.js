/**
 * @description: hàm này dùng để validate
 * Author: NSDThinh 22/02/2023
 */
export default ({ app }, inject) => {
  inject('validate', {
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
    },
    // thay đổi kiểu giá trị của chữ
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
    // hàm này dùng để validEmail
    isEmail (email) {
      // eslint-disable-next-line no-useless-escape
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    },
    /**
     * @description: Hàm này dùng để Format Date (ngày tháng năm)
     * @param {Object} dob - gán sự kiện để format theo dạng ngày tháng năm
     */
    formatDate (dob) {
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
    }
  })
}
