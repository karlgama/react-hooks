export default function reducer(state, action) {
    switch (action.type) {
      case "add2":
        return {
          ...state,
          number: state.number + 2,
        };
      case "login":
        return { ...state, user: { name: action.payload } };
      default:
        return state;
    }
  }