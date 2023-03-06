/**
 * @description: hàm này dùng để validate
 * Author: NSDThinh 22/02/2023
 */
// thay đổi kiểu giá trị của chữ
function isType (string) {
  JSON.parse(string)
  {
    const obj = JSON.parse(string)
    obj.vn = undefined
    return obj.vn
  }
}
function jsonParse (value) {
  if (value) {
    return JSON.parse(value)
  }
  return ''
}
// hàm này dùng để validEmail
function isEmail (email) {
  // eslint-disable-next-line no-useless-escape
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
}
export default {
  isType,
  isEmail,
  jsonParse
}
