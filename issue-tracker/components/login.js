import React from 'react';
import {connect} from 'react-redux';
import store from '../pages/store/store.js'


let If = (props) => {return !!props.condition ? props.children : null};

//it will be a bit of a hassle to remember but we might consider using 'prop-types', it would help us control the shape of the data moving around and stop unexpected bugs later. 

function Login(props){

  let state = {

  }

  function handleChange(e){
    e.preventDefault();
    this.setState({[e.target.name]:[e.target.value]})
  }

function handleSubmit(e){
  e.preventDefault()
  store.dispatch({type:'LOGIN_UPDATED'})

  console.log('ping')
  console.log(props)
}
  return(
    <>
    <If condition = {loggedIn}> 
    <form onSubmit = {logIn}>
      <input name = 'userName' placeholder = 'Username'></input>
      <input name = 'password' placeholder = 'Password'></input>
      <button type = 'submit'> Login</button>
    </form>
    </If>
    <h1>We've got {JSON.stringify(props.text)} </h1>
    </>

    )

}


//example of how to bring state to a component
function mapStateToProps(state){
  return{
    text:state.text,
    loggedIn:state.loggedIn
  }
}
export default connect(mapStateToProps)(Login)