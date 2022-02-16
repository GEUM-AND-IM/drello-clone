import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoAtom } from "./store/atoms";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3=1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 5px;
  margin-bottom: 5px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoAtom);

  const onDragEnd = ({
    draggableId,
    destination,
    source,
  }: DropResult): void => {
    if (!destination) return;
    setToDos((prev) => {
      const copyToDo = [...prev];
      copyToDo.splice(source.index, 1);
      copyToDo.splice(destination?.index as number, 0, draggableId);
      return copyToDo;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((item, idx) => {
                  return (
                    <Draggable key={item} draggableId={item} index={idx}>
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
                })}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
