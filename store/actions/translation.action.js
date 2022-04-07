const getLangData = (type, data) => {
  return ({
    type,
    data
  })
}

const setLangStore = (type, data) => {
  return ({
    type,
    data
  })
}

export const translation = {
  setLangStore,
  getLangData
}