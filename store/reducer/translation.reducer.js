import { langLocalStore } from 'service'

const initialState = {
  error: null,
  isLoading: false,
  langData: null,
  langStore: langLocalStore.getLanguage() ?
    langLocalStore.getLanguage() :
    { 
      lang: 'English', 
      code: 'en',
    }
}

const translate = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRANSLATION_OBJ':
      return {
        ...state,
        langData: action.data
      }
    case 'LANG_CODE_OBJ':
      langLocalStore.setLanguage(action.data)
      return {
        ...state,
        langStore: action.data
      }
    default:
      return state
  }
}

export default translate