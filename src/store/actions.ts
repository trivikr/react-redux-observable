import { StoreActionType, WhiskeyType } from "./types";

export const fetchWhiskies = () => ({
  type: StoreActionType.FETCH_WHISKIES
});

export const fetchWhiskiesSuccess = (whiskies: WhiskeyType[]) => ({
  type: StoreActionType.FETCH_WHISKIES_SUCCESS,
  payload: whiskies
});

export const fetchWhiskiesFailure = (message: string) => ({
  type: StoreActionType.FETCH_WHISKIES_FAILURE,
  payload: message
});
