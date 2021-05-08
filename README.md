# React-Redux-Boilerplate
Barebones Demo project that outlines how to setup redux store and action creators for a react project

Step by step setup and configuration of going from create-react-app to a functional redux store with 
mapped action creators and state shared across any/all components

App.js Comments
******************************************************************************************************************
App.js, when using create-react-app, and you want to use redux in your new project couple of first items here
in terminal,  npm install react-redux

and in app.js you will import react-redux
and include your "redux store" above 
this will be in the folder src/redux/store.js

next you need to wrap your project in the redux provider
<Provider></Provider>

that should take care of App.js
******************************************************************************************************************

I used a wrapper component to make managing the provider a bit easier and housing the whole project in a overarching 
component.
Here is wrapper.js comments
*************************************************************************************************
/*
wrapper.js (or ANY component using the redux provider from app.js), 
import connect from react-redux
and import your dispacth actioncreators from eventActions
import { templateFunction, call2, call3, ... } from "../redux"
and list all the dispatch calls here

make sure props is passed into component
-function Wrapper(props){}

then we will wrap the export default in the connect routine
-export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)

THEN...
we will establish the map state and dispatch to your component props

const mapStateToProps = (state) => {
  return {
    loadingFlag: state.loadingFlag,
    statevalue1: state.statevalue1,
    statevalue2: state.statevalue2,
    etc....
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    templateFunction: (payload) => dispatch(templateFunction(payload)),
    call2: (payload) => dispatch(call2(payload)),
    call3: (payload) => dispatch(call3(payload)),
    etc...
  }
}

Finally, to "use" either the state or the dispatch, you reference props in your JSX or your JS code

to pull in state value: props.statevalue1 

or to dispatch event:  props.call2(data)

*/

The Redux store is kept separate from the components
It uses under src directory

/src/redux/
index.js
store.js

/src/redux/events
eventActions.js
eventReducer.js
eventTypes.js

each file is commented in the project on how to use
store.js doesn't need modified, just to be present

eventActions.js comments
******************************************************************

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
********************************************************************************
eventTypes.js
********************************************************************************
This is where all your types are defined and the CAPS named action creators are tied to the camelCase calls

each one needs listed here

export const CAPS_NAME = "camelCaseName"
export const CALL_NUM1 = "callNumOne"
export const CALL_NUM2 = "callNumTwo"
**********************************************************************************************************
eventReducer.js
*********************************************************************************************************
/* event reducer
This is where all the heavy lifting of redux is

2 things:  

first the initialstate OBJECT is defined here,
this creates all the "variables" that are stored in state
which gets mapped to props in each component

Secondly, this is where the action dispatches come into a big switch
statement and you "modify" state here... 
which in all actuality, isn't modifying state, but creating a copy and 
mutating the new version appropriately



