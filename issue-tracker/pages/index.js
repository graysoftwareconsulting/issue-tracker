import Login from '../components/login.js'
import {Provider} from 'react-redux';
import store from '../pages/store/store.js'

export default function Home() {
  return (

    <Provider store = {store}>
    <Login></Login>

    </Provider>
  )
}
