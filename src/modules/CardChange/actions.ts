import { DropResult } from "react-beautiful-dnd";

export const SAME_BOARD_CARD_CHANGE =
  "cardChange/SAME_BOARD_CARD_CHANGE" as const;
export const NOT_SAME_BOARD_CARD_CHANGE =
  "cardChange/NOT_SAME_BOARD_CARD_CHANGE" as const;

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
