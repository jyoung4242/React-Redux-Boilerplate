import React, { useRef } from "react"
import { connect } from "react-redux"
import { templateFunction, updateNumber, appendArray, updateArray, deleteArray } from "../redux"

/*
Dispatches.js is the left div of the wrapper page
its intentions are to house all the user interface elements 
that are tied to different "dispatches" for the redux
reducer
*/

function Dispatches(props) {
  var toggle
  const inpRef1 = useRef(null)
  const inpRef2 = useRef(null)

  /*
  handleClick
  passes a true/false to props dispatch
  to set boolean value in state
  */
  function handleClick() {
    toggle = !toggle
    props.templateFunction(toggle)
  }

  /*
  handleChange
  passes an integer to props dispatch
  to set numeric value in state
  */
  function handleChange(event) {
    var num = event.target.value
    props.updateNumber(num)
  }

  /*
  handleAppend
  button press event that set's up an object
  to be passed to dispatch to append to 
  an array in state
  data is dummy data
  */
  function handleAppend() {
    var num = props.numItems
    num++
    var num2 = Math.random()
    var num3 = Math.random()
    props.appendArray({
      ID: num,
      random1: num2,
      random2: num3,
    })
  }

  /*
  handleEdit
  button press event that set's up an index number
  to dispatch to edit the array of data at that
  index in state
  data is dummy data
  */
  function handleEdit() {
    var num2 = Math.random()
    var num3 = Math.random()
    var num1 = parseInt(inpRef1.current.value)
    props.updateArray({
      ID: num1,
      random1: num2,
      random2: num3,
    })
  }

  /*
  handleDelete
  button press event that set's up an index number
  to dispatch to delete the element of an array of data at that
  index in state  
  */
  function handleDelete() {
    props.deleteArray(parseInt(inpRef2.current.value))
  }

  //JSX
  return (
    <div className="dispatches">
      <h1>Dispatches</h1>
      <div>
        <button onClick={handleClick} className="buttons" id="button1">
          Click me to Toggle State
        </button>
      </div>
      <div>
        <input onChange={(e) => handleChange(e)} type="number" defaultValue="0" />
      </div>
      <div>
        <div>
          <span>ARRAY management</span>
        </div>

        <button onClick={handleAppend}>Append</button>

        <div>
          <label>index to edit</label>
          <input ref={inpRef1} min="0" defaultValue="0" type="number" />
          <button onClick={handleEdit}>Edit</button>
        </div>

        <div>
          <label>index to delete</label>
          <input ref={inpRef2} min="0" defaultValue="0" type="number" />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numItems: state.numItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    templateFunction: (payload) => dispatch(templateFunction(payload)),
    updateNumber: (payload) => dispatch(updateNumber(payload)),
    appendArray: (payload) => dispatch(appendArray(payload)),
    deleteArray: (payload) => dispatch(deleteArray(payload)),
    updateArray: (payload) => dispatch(updateArray(payload)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dispatches)
