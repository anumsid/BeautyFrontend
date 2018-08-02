import RestfulAdapter from "../adapters";

const GET_LIPSTICKS = "GET_LIPSTICKS"
const CHANGE_SKINTONE = "CHANGE_SKINTONE"
const RENDER_IMAGE = "RENDER_IMAGE"
const POST_REVIEW = "POST_REVIEW"
const SIGNUP_USER = "SIGNUP_USER"
const LOGIN_USER = "LOGIN_USER"
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

export const postReview = (review, id) => {
   return (dispatch) => {
     fetch(`http://localhost:3000/api/v1/products/${id}/reviews`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
         'accept': 'application/json'
       },
       body: JSON.stringify(review)
     })
     .then(resp => resp.json())
     .then(result => dispatch({
       type: POST_REVIEW,
       payload: result
     }))
   }
 }

 export const signupUser = (user) => {
   console.log(user);
   return (dispatch) => {
     fetch(`http://localhost:3000/api/v1/users`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
         'accept': 'application/json'
       },
       body: JSON.stringify(user)
     })
     .then(resp => resp.json())
     .then(result => dispatch({
       type: SIGNUP_USER,
       payload: result
     }))

   }
 }

 export const LoginUser = (user) => {
   // console.log(user);
   return (dispatch) => {
     fetch(`http://localhost:3000/api/v1/auth`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
         'accept': 'application/json'
       },
       body: JSON.stringify(user)
     })
     .then(resp => resp.json())
     .then(result => dispatch({
       type: LOGIN_USER,
       payload: result
     }))

   }
 }

export const fetchLipsticks = () => {
  return (dispatch) => {
    return adapter.fetchProducts()
    .then(lipsticks => dispatch(getLipsticks(lipsticks))
    )
  }
}
