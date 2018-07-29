const defaultState = {
   lipstickList: [],
   selectedLipstick: {},
   selectedSkinTone: 'dark'
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

  default:
    return state
  }
}
