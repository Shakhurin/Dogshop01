export const REDUX_LC = 'redux_superStore'

export const myInitialState = {
  user:{},
  filter:{
    search: ""
  },
}

export const getInitialData = () => {
  const dataFormLC = localStorage.getItem(REDUX_LC)

  return dataFormLC ? JSON.parse(dataFormLC) : myInitialState
}