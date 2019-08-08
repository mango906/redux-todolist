import * as types from "./ActionTypes";

export function add(text) {
  return {
    type: types.add,
    text
  };
}

export function update(id, text) {
  return {
    type: types.update,
    id,
    text
  };
}

export function del(id) {
  return {
    type: types.del,
    id
  };
}
