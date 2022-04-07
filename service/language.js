const setLanguage = data => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang_store', JSON.stringify(data))
  }
}

const getLanguage = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('lang_store'))
  }
}

const language = {
  setLanguage, getLanguage
}

export default language