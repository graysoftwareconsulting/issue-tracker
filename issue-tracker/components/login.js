import React from 'react';
import {connect} from 'react-redux';

//it will be a bit of a hassle to remember but we might consider using 'prop-types', it would help us control the shape of the data moving around and stop unexpected bugs later. 

function Login(props){

  let state = {
    title:'Connection!'

  }
  return(
    <h1>We've got {JSON.stringify(props.text)} </h1>
    )

}


//example of how to bring state to a component

function mapStateToProps(state){
  return{
    text:state.text
  }
}
export default connect(mapStateToProps)(Login)