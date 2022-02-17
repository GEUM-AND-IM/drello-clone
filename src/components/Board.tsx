import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DraggableCard";

const BoardBox = styled.div`
  width: 400px;
  padding: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const BoardTitle = styled.h1`
  color: black;
  font-size: 24px;
  margin-bottom: 5px;
`;

interface IBoardProps {
  boardId: string;
  items: string[];
}

const Board: React.FC<IBoardProps> = ({ boardId, items }) => {
  return (
    <Droppable droppableId={boardId}>
      {(provided) => (
        <BoardBox ref={provided.innerRef} {...provided.droppableProps}>
          <BoardTitle> {boardId} </BoardTitle>
          {items.map((item, idx) => {
            return <DraggableCard item={item} idx={idx} key={item} />;
          })}
          {provided.placeholder}
        </BoardBox>
      )}
    </Droppable>
  );
};

export default Board;
