import Wrapper from "./components/wrapper"
import { Provider } from "react-redux"
import store from "./redux/store"

/*
App.js, when using create-react-app, and you want to use redux in your new project couple of first items here
in terminal,  npm install react-redux

and in app.js you will import react-redux
and include your "redux store" above 
this will be in the folder src/redux/store.js

next you need to wrap your project in the redux provider
<Provider></Provider>

that should take care of App.js

*/

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper />
      </div>
    </Provider>
  )
}

export default App
