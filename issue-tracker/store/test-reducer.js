const initialState = {
  text:'heres the text',
  loggedIn: true,
}

const todos = (state = initialState, action) => {
  switch (action.type) {

    case 'LOGGED_IN':
      return {...state, loggedIn:true}
      
    case 'LOGGED_OUT':
      return{...state,loggedIn:false}
      
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export default todos