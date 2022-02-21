import { createReducer } from "typesafe-actions";
import { IToDoAtomProps } from "../../interface/IToDo";
import { NOT_SAME_BOARD_CARD_CHANGE, SAME_BOARD_CARD_CHANGE } from "./actions";
import { TCardChangeAction } from "./types";

const initialState: IToDoAtomProps = {
  미완료: [
    { id: 1, text: "리덕스 사가 공부하기" },
    { id: 2, text: "JEST 공부하기" },
    { id: 3, text: "리액트 테스팅 라이브러리 공부하기" },
  ],
  "진행 중": [
    { id: 4, text: "모이자 api 통신 끝내기" },
    { id: 5, text: "조은 프로그래머 실무 가이드 시청하기" },
  ],
  완료: [],
};

const cardChange = createReducer<IToDoAtomProps, TCardChangeAction>(
  initialState,
  {
    [SAME_BOARD_CARD_CHANGE]: (state, action) => {
      const boardCopy = [...state[action.payload.source.droppableId]];
      const taskObj = boardCopy[action.payload.source.index];
      boardCopy.splice(action.payload.source.index, 1);
      boardCopy.splice(action.payload.destination?.index as number, 0, taskObj);

      return {
        ...state,
        [action.payload.destination?.droppableId as string]: boardCopy,
      };
    },
    [NOT_SAME_BOARD_CARD_CHANGE]: (state, action) => state,
  }
);

export default cardChange;
