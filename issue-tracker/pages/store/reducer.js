
const initialState = {
  count: 3,
  text: 'Heres the text'   ,
};

// this is the creation of the reducer to pass into the store. (in store.js)
export default (state = initialState, action) => {

  switch(action.type){
// this is called an action, they are just plain js objects that have a 'type' property and a payload property. type is checked in the switch to determine the action. the payload is whatever data.
  case 'COUNT': 
    return payload;
    
  default: return state;
  }

};