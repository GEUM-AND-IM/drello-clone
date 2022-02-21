import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Board from "./components/Board";
import { TRootState } from "./modules";
import {
  notSameBoardCardChange,
  sameBoardCardChange,
} from "./modules/CardChange";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
