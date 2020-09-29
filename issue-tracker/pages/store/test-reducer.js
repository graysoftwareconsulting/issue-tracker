const initialState = {
  text:'heres the text',
  loggedIn: true,
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_UPDATED':
      return(state.loggedIn === true ? state.loggedIn=false : state.loggedIn = true)
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