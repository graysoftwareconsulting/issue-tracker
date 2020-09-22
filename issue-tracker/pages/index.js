import Login from '../components/login.js'
import {Provider} from 'react-redux';
// import store from '../pages/store/store.js'
import rootReducer from '../pages/store/test-reducer.js'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default function Home() {
  return (

    <Provider store = {store}>
    <Login></Login>

    </Provider>
  )
}
