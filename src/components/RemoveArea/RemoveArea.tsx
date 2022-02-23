import { Droppable } from "react-beautiful-dnd";
import { RemoveAreaWrap } from "./RemoveArea.style";

interface IRemoveArea {
  droppableId: string;
}

const RemoveArea: React.FC<IRemoveArea> = ({ droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <RemoveAreaWrap
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
          {...provided.droppableProps}
          style={{ background: `${snapshot.isDraggingOver ? "" : "none"}` }}
        ></RemoveAreaWrap>
      )}
    </Droppable>
  );
};

export default RemoveArea;
