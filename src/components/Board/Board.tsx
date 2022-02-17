import React from "react";
import { Droppable } from "react-beautiful-dnd";
import BoardItem from "../BoardItem";
import { BoardItemWrap, BoardBox, BoardHeaderWrap } from "./Board.style";

interface IBoardProps {
  boardId: string;
  items: string[];
}

const Board: React.FC<IBoardProps> = ({ boardId, items }) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <BoardBox isDraggingOver={snapshot.isDraggingOver}>
          <BoardHeaderWrap>
            <h1>{boardId}</h1>
          </BoardHeaderWrap>
          <BoardItemWrap ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, idx) => {
              return <BoardItem item={item} idx={idx} key={item} />;
            })}
            {provided.placeholder}
          </BoardItemWrap>
        </BoardBox>
      )}
    </Droppable>
  );
};

export default React.memo(Board);
