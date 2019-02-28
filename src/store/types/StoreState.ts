import { WhiskeyType } from "./WhiskeyType";

export interface StoreState {
  whiskies: WhiskeyType[];
  isLoading: boolean;
  error: string;
}
