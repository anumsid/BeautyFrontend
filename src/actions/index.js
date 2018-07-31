import RestfulAdapter from "../adapters";

const GET_LIPSTICKS = "GET_LIPSTICKS"
const CHANGE_SKINTONE = "CHANGE_SKINTONE"
const RENDER_IMAGE = "RENDER_IMAGE"
//action is a function that returns an object w/ type or value
//classes in JS need to be instances in order for methods to be invoked on them
//anywhere

const adapter = new RestfulAdapter()
export const getLipsticks = (lipsticksArray) => {
  return {
    type: GET_LIPSTICKS,
    payload: lipsticksArray
  }
}

export const changeSkinTone = (skintone) => {
  //console.log(skintone);
  return {
    type: CHANGE_SKINTONE,
    payload: skintone
  }
}

export const renderImage = (lipstick) => {
  return {
    type: RENDER_IMAGE,
    payload: lipstick
  }
}


export const fetchLipsticks = () => {
  return (dispatch) => {
    return adapter.fetchProducts()
    .then(lipsticks => dispatch(getLipsticks(lipsticks))
    )
  }
}
