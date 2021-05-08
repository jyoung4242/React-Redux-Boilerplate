import { TEMPLATE_FUNCTION, UPDATE_NUMBER, APPEND_ARRAY, DELETE_ARRAY, UPDATE_ARRAY } from "./eventTypes"
import produce from "immer" //immer is here for the funky difficult

/* event reducer
This is where all the heavy lifting of redux is

2 things:  

first the initialstate OBJECT is defined here,
this creates all the "variables" that are stored in state
which gets mapped to props in each component
*/
const initialState = {
  loadingFlag: false,
  generalNumber: 0,
  generalObject: [],
  numItems: 0,
}

/*
Secondly, this is where the action dispatches come into a big switch
statement and you "modify" state here... 
which in all actuality, isn't modifying state, but creating a copy and 
mutating the new version appropriately
*/

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    //Terrible name, but this passes and sets the loading flag to the true/false
    //value passed through the dispatch
    case TEMPLATE_FUNCTION:
      return {
        ...state,
        loadingFlag: action.payload,
      }
    //this passes and sets the generalNumber to the numeric
    //value passed through the dispatch
    case UPDATE_NUMBER:
      return {
        ...state,
        generalNumber: action.payload,
      }

    //this passes and appends an object to an array
    case APPEND_ARRAY:
      return {
        ...state,
        generalObject: [...state.generalObject, action.payload],
        numItems: state.numItems + 1,
      }
    //this passes an index value and deletes an element from an array
    case DELETE_ARRAY:
      return {
        ...state,
        generalObject: state.generalObject.filter((item) => item.ID !== action.payload),
      }
    //this passes an object, and by index value,  updates the data in the array element
    case UPDATE_ARRAY:
      var object = action.payload

      var x = state.generalObject.findIndex((element) => element.ID === object.ID)

      return produce(state, (draft) => {
        draft.generalObject[x].ID = object.ID
        draft.generalObject[x].random1 = object.random1
        draft.generalObject[x].random2 = object.random2
      })

    default:
      return state
  }
}

export default eventReducer
