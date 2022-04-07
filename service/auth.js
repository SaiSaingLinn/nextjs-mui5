const setAuth = data => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'user_info')
  
    localStorage.setItem('auth_store', ciphertext.toString())
  }
}

const getAuth = () => {
  if (typeof window !== 'undefined') {
    let CryptoJS = require('crypto-js')
    let sessi = localStorage.getItem('auth_store')
    if (!sessi) return false
    let bytes = CryptoJS.AES.decrypt(sessi, 'user_info')
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    return decryptedData
  }
}

const removeAuth = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_store')
  }
}

export default {
  setAuth,
  getAuth,
  removeAuth,
}