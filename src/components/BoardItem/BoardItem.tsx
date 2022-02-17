import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card } from "./BoardItem.style";

interface IDraggableCardProps {
  item: string;
  idx: number;
}

const DraggableCard: React.FC<IDraggableCardProps> = ({ item, idx }) => {
  return (
    <Draggable draggableId={item} index={idx}>
      {(provided, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
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
