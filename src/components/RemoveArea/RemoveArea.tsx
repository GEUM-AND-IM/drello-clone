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
        >
          <img
            src={
              "https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
            }
            alt="trash"
          />
        </RemoveAreaWrap>
      )}
    </Droppable>
  );
};

export default RemoveArea;
