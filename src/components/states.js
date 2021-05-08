import React, { useRef, useEffect } from "react"
import { connect } from "react-redux"
import {} from "../redux"

/*
states.js is the right div of the wrapper page
its intentions are to house all the indicator elements 
that are tied to different states in the redux
reducer
*/

function StateIndicators(props) {
  const chkboxRef = useRef(null)

  //useEffect that monitors for changes in state
  //loading flag, when it changes, the useRef for the
  //checkbox is modified
  useEffect(() => {
    chkboxRef.current.checked = props.loadingFlag
  }, [props.loadingFlag])

  //JSX
  return (
    <div className="indicators">
      <h1>State Indicators</h1>
      <div>
        <input ref={chkboxRef} type="checkbox" id="scales" name="scales" />
        <label htmlFor="scales">Boolean Flag</label>
      </div>
      {/*This is tying the redux state to the innerHtml of an element on the DOM */}
      <div>
        <label htmlFor="">{props.generalNumber}</label>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Item #</th>
              <th>Number 1</th>
              <th>Number 2</th>
            </tr>
          </thead>
          <tbody>
            {/*This is iterating over an array in the redux store and creating a table entry for each element */}
            {props.generalObject.map((obj, index) => (
              <tr key={obj.ID}>
                <td>{obj.ID}</td>
                <td>{Math.floor(obj.random1 * 100)}</td>
                <td>{Math.floor(obj.random2 * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loadingFlag: state.loadingFlag,
    generalNumber: state.generalNumber,
    generalObject: state.generalObject,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(StateIndicators)
