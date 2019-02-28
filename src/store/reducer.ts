import { Reducer } from "redux";
import { StoreState } from "./types";

const initialState: StoreState = {
  whiskies: [], // for this example we'll make an app that fetches and lists whiskies
  isLoading: false,
  error: ""
};

const rootReducer: Reducer<StoreState> = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export { rootReducer };
