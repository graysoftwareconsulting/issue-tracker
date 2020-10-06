import Login from '../components/login.js'
import {Provider} from 'react-redux';
import rootReducer from '../store/test-reducer.js'
import { createStore } from 'redux'

const store = createStore(rootReducer)

export default function Home() {
  return (

    <Provider store = {store}>
    <Login></Login>

    </Provider>
  )
}
