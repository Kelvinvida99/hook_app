export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.playload]

    default:
      return initialState;
  }
};
