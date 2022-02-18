import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "./BoardItem.style";

interface IDraggableCardProps {
  idx: number;
  toDoId: number;
  toDoText: string;
}

const DraggableCard: React.FC<IDraggableCardProps> = ({
  toDoId,
  toDoText,
  idx,
}) => {
  return (
    <Draggable draggableId={toDoId + ""} index={idx}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
};

export default React.memo(DraggableCard);
