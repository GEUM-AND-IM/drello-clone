import { DropResult } from "react-beautiful-dnd";

export const ADD_CARD = "cardChange/ADD_CARD" as const;

export const DELETE_CARD = "cardChange/DELETE_CARD" as const;

export const SAME_BOARD_CARD_CHANGE =
  "cardChange/SAME_BOARD_CARD_CHANGE" as const;
export const NOT_SAME_BOARD_CARD_CHANGE =
  "cardChange/NOT_SAME_BOARD_CARD_CHANGE" as const;

export const addCard = (boardId: string, id: number, text: string) => ({
  type: ADD_CARD,
  payload: {
    boardId,
    newToDo: {
      id,
      text,
    },
  },
});

export const deleteCard = (boardId: string, index: number) => ({
  type: DELETE_CARD,
  payload: {
    boardId,
    index,
  },
});

export const sameBoardCardChange = ({ destination, source }: DropResult) => ({
  type: SAME_BOARD_CARD_CHANGE,
  payload: {
    destination,
    source,
  },
});

export const notSameBoardCardChange = ({
  destination,
  source,
}: DropResult) => ({
  type: NOT_SAME_BOARD_CARD_CHANGE,
  payload: {
    destination,
    source,
  },
});
