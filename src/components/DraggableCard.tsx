import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

interface IDraggableCardProps {
  item: string;
  idx: number;
}

const DraggableCard: React.FC<IDraggableCardProps> = ({ item, idx }) => {
  return (
    <Draggable draggableId={item} index={idx}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {item}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
