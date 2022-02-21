import { createReducer } from "typesafe-actions";
import { IToDoBoardProps } from "../../interface/IToDo";
import {
  ADD_CARD,
  NOT_SAME_BOARD_CARD_CHANGE,
  SAME_BOARD_CARD_CHANGE,
} from "./actions";
import { TCardChangeAction } from "./types";

const initialState: IToDoBoardProps = {
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

const cardChange = createReducer<IToDoBoardProps, TCardChangeAction>(
  initialState,
  {
    [ADD_CARD]: (state, action) => {
      return {
        ...state,
        [action.payload.boardId]: [
          ...state[action.payload.boardId],
          action.payload.newToDo,
        ],
      };
    },

    [SAME_BOARD_CARD_CHANGE]: (state, action) => {
      const {
        payload: { source, destination },
      } = action;

      const boardCopy = [...state[source.droppableId]];
      const taskObj = boardCopy[source.index];
      boardCopy.splice(source.index, 1);
      boardCopy.splice(destination?.index as number, 0, taskObj);

      return {
        ...state,
        [action.payload.destination?.droppableId as string]: boardCopy,
      };
    },
    [NOT_SAME_BOARD_CARD_CHANGE]: (state, action) => {
      const {
        payload: { source, destination },
      } = action;
      const sourceBoard = [...state[source.droppableId]];
      const destinationBoard = [...state[destination?.droppableId as string]];
      const taskObj = sourceBoard[source.index];
      sourceBoard.splice(source.index, 1);
      destinationBoard.splice(destination?.index as number, 0, taskObj);

      return {
        ...state,
        [source.droppableId]: sourceBoard,
        [destination?.droppableId as string]: destinationBoard,
      };
    },
  }
);

export default cardChange;
