export default class Validator {
  validateUsername(str) {
      return /^[a-zA-Z][\d{0,3}a-zA-Z-_]*[a-zA-Z]$/.test(str)
  }
}



