const defaultState = {
   lipstickList: [],
   selectedLipstick: {},
   selectedSkinTone: 'dark',
   reviews: [],
   user: {}
   // cartView: true


}

export default function beautyReducer (state = defaultState, action) {
  //console.log(action);
   switch (action.type){
     case "GET_LIPSTICKS":
     return {...state, lipstickList: action.payload}
     case "CHANGE_SKINTONE":
     return {...state, selectedSkinTone: action.payload}
     case "RENDER_IMAGE":
     //console.log(action);
     return {...state, selectedLipstick: action.payload}

     case "POST_REVIEW":
     return {...state, reviews: action.payload }

     case "SIGNUP_USER":
     console.log(action.payload);
     return {...state, user: action.payload}

     case "LOGIN_USER":
     console.log(action.payload);
     return {...state, user: action.payload}

  default:
    return state
  }
}
