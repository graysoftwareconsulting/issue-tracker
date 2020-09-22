import React from 'react';
import {connect} from 'react-redux';

//it will be a bit of a hassle to remember but we might consider using 'prop-types', it would help us control the shape of the data moving around and stop unexpected bugs later. 

function Login(props){

  let state = {
    title:'Connection!'

  }
  return(
    <h1>We've got {props.text} </h1>
    )

}


//example of how to bring state to a component

const mapStateToProps = (state) => ({
  text:state.todos.text,      // this part breaks state apart so you don't have to use state.example for everything. this page is still missing pieces though so bad example atm. 
})
export default connect(mapStateToProps)(Login)