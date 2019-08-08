import * as types from "../actions/ActionTypes";
let id = 0;

export default function todo(state = [], action) {
  switch (action.type) {
    case types.add:
      return [
        ...state,
        {
          id: ++id,
          text: action.text
        }
      ];
    case types.update:
      return state.map(s => (s.id === action.id ? { ...s, text: action.text } : s));
    case types.del:
      return state.filter(s => s.id !== action.id);
    default:
      return state;
  }
}
