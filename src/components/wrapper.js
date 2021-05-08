import React from "react"
import { connect } from "react-redux"
import { templateFunction } from "../redux"
import "./style.css"

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

import Dispatches from "./dispatches"
import StateIndicators from "./states"

function Wrapper(props) {
  return (
    <div className="wrapper">
      <Dispatches />
      <StateIndicators />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loadingFlag: state.loadingFlag,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    templateFunction: (payload) => dispatch(templateFunction(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
