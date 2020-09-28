import React from 'react';
import {connect} from 'react-redux';


let If = (props) => {return !!props.condition ? props.children : null};

//it will be a bit of a hassle to remember but we might consider using 'prop-types', it would help us control the shape of the data moving around and stop unexpected bugs later. 

function Login(props){

  let state = {
    title:'Connection!',
    loggedIn:true,
  }

  function handleChange(event){
    this.setState
  }

function logIn(event){
  event.preventDefault()

  console.log(event.target)
  if(event.name === 'userName' && event.password === 'password'){
    //bring in a function to handle logins into the actual server
    //for now...
    loggedIn = !loggedIn;
    return true
  }
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