import { Droppable } from "react-beautiful-dnd";
import { RemoveAreaWrap } from "./RemoveArea.style";

interface IRemoveArea {
  droppableId: string;
}

const RemoveArea: React.FC<IRemoveArea> = ({ droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <RemoveAreaWrap
          ref={provided.innerRef}
          {...provided.droppableProps}
        ></RemoveAreaWrap>
      )}
    </Droppable>
  );
};

export default RemoveArea;
