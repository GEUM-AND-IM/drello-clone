import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Board from "./components/Board";
import RemoveArea from "./components/RemoveArea";
import { TRootState } from "./modules";
import {
  deleteCard,
  notSameBoardCardChange,
  sameBoardCardChange,
} from "./modules/CardChange";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const Boards = styled.div`
  display: flex;
  column-gap: 20px;
`;

const App = () => {
  const toDos = useSelector((state: TRootState) => state.CardChange);

  const dispatch = useDispatch();

  const onDragEnd = (info: DropResult): void => {
    const { destination, source } = info;
    console.log(info);
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      dispatch(sameBoardCardChange(info));
      return;
    }
    if (destination.droppableId === "delete") {
      dispatch(deleteCard(source.droppableId, source.index));
      return;
    }
    dispatch(notSameBoardCardChange(info));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} items={toDos[boardId]} key={boardId} />
          ))}
        </Boards>
        <RemoveArea droppableId="delete" />
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
