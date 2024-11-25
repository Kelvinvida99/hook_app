const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra de Alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todo = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar piedra del poder",
  done: false,
};

const newAction = {
  type: "[TODO] add todo",
  payload: newTodo,
}

todo = todoReducer(todo, newAction);

console.log(todo)