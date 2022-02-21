import { combineReducers } from "redux";
import CardChange from "./CardChange";

export type TRootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  CardChange,
});

export default rootReducer;
