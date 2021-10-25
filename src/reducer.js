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
    case SET_STORIES:
      return {
        ...state,
        loading: false,
        hits: action.payload.hits,
        numberPages: action.payload.numberPages,
      };
    case REMOVE_STORY:
      const filteredHits = state.hits.filter(
        (hit) => hit.objectID !== action.payload
      );

      return {
        ...state,
        hits: filteredHits,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };
    case HANDLE_PAGE:
      if (action.payload === "decrease") {
        let previousPage = state.page - 1;
        if (previousPage < 0) previousPage = state.numberPages - 1;

        return { ...state, page: previousPage };
      }

      if (action.payload === "increase") {
        let nextPage = state.page + 1;
        if (nextPage > state.numberPages - 1) nextPage = 0;

        return { ...state, page: nextPage };
      }

      break;

    default:
      throw new Error(`no matching reducer for action type ${action.type}`);
  }
};
export default reducer;
