export const REDUX_STATE_LC = 'redux_superStore'

export const myInitialState = {
  user:{},
  filter:{
    search: ""
  },
  cart: [],
  favourite: []
}

export const getInitialData = () => {
  const dataFormLC = localStorage.getItem(REDUX_STATE_LC)

  return dataFormLC ? JSON.parse(dataFormLC) : myInitialState
}