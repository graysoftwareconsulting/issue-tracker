import React from 'react';
import {connect} from 'react-redux';

function Login(props){

  let state = {
    title:'Connection!'

  }
  return(
    <h1>We've got {state.title} </h1>
    )

}


//example of how to bring state to a component

const mapStateToProps = (state) => ({
  item:state.item      // this part breaks state apart so you don't have to use state.example for everything. this page is still missing pieces though so bad example atm. 
})
export default Login