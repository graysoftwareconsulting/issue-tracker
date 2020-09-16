
const initialState = {
  {
  },
  {
  count: 3,
  text: 'true',
  },
};

// this is the creation of the reducer to pass into the store. (in store.js)
export default (state = initialState,action) => {
  const {payload,type} =action; //need to double check how to write this in long form

  switch(type){
// this is called an action, they are just plain js objects that have a 'type' property and a payload property. type is checked in the switch to determine the action. the payload is whatever data.
  case 'COUNT': 
    return payload;
  default: return state;
  }

};