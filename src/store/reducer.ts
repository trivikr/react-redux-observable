import { Reducer } from "redux";
import { StoreState, StoreActionType } from "./types";

const initialState: StoreState = {
  whiskies: [], // for this example we'll make an app that fetches and lists whiskies
  isLoading: false,
  error: ""
};

const rootReducer: Reducer<StoreState> = (state = initialState, action) => {
  switch (action.type) {
    case StoreActionType.FETCH_WHISKIES:
      return {
        ...state,
        // whenever we want to fetch the whiskies, set isLoading to true to show a spinner
        isLoading: true,
        error: ""
      };
    case StoreActionType.FETCH_WHISKIES_SUCCESS:
      return {
        whiskies: [...action.payload],
        // whenever the fetching finishes, we stop showing the spinner and then show the data
        isLoading: false,
        error: ""
      };
    case StoreActionType.FETCH_WHISKIES_FAILURE:
      return {
        whiskies: [],
        isLoading: false,
        // same as FETCH_WHISKIES_SUCCESS, but instead of data we will show an error message
        error: action.payload
      };
    default:
      return state;
  }
};

export { rootReducer };
