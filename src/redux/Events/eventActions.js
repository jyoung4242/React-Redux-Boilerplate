import { TEMPLATE_FUNCTION, UPDATE_NUMBER, APPEND_ARRAY, DELETE_ARRAY, UPDATE_ARRAY } from "./eventTypes"

/*
this is where all the action creators are managed

at the top, you must import all your ACTION_CREATOR names here
next setup your action creators below in this format

export const actionCreatorNameHere = (data) =>{
  return{
    type: NAME_OF_ACTION_CREATOR,
    payload: data,
  }
}

notice the distinction between what is in all caps and what is camelCase
*/

export const templateFunction = (data) => {
  return {
    type: TEMPLATE_FUNCTION,
    payload: data,
  }
}

export const updateNumber = (data) => {
  return {
    type: UPDATE_NUMBER,
    payload: data,
  }
}

export const appendArray = (data) => {
  return {
    type: APPEND_ARRAY,
    payload: data,
  }
}

export const deleteArray = (data) => {
  return {
    type: DELETE_ARRAY,
    payload: data,
  }
}

export const updateArray = (data) => {
  return {
    type: UPDATE_ARRAY,
    payload: data,
  }
}
