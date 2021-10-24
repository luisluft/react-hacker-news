import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
      break;

    default:
      throw new Error(`no matching reducer for action type ${action.type}`);
      break;
  }
};
export default reducer;
