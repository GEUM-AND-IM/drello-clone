import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IToDoItem } from "../../interface/IToDo";
import { addCard } from "../../modules/CardChange";
import BoardItem from "../BoardItem";
import {
  BoardItemWrap,
  BoardBox,
  BoardHeaderWrap,
  BoardInputWrap,
} from "./Board.style";

interface IBoardProps {
  boardId: string;
  items: IToDoItem[];
}

interface IForm {
  toDo: string;
}

const Board: React.FC<IBoardProps> = ({ boardId, items }) => {
  const dispatch = useDispatch();

  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    dispatch(addCard(boardId, Date.now(), toDo));
    setValue("toDo", "");
  };

  return (
    <Droppable droppableId={boardId}>
      {(provided, snapshot) => (
        <BoardBox isDraggingOver={snapshot.isDraggingOver}>
          <BoardHeaderWrap>
            <h1>{boardId}</h1>
          </BoardHeaderWrap>
          <BoardInputWrap onSubmit={handleSubmit((prev) => onValid(prev))}>
            <input
              {...register("toDo", { required: true })}
              type="text"
              placeholder={`${boardId}에 추가하기`}
            />
          </BoardInputWrap>
          <BoardItemWrap ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, idx) => {
              return (
                <BoardItem
                  toDoId={item.id}
                  toDoText={item.text}
                  idx={idx}
                  key={item.id}
                />
              );
            })}
            {provided.placeholder}
          </BoardItemWrap>
        </BoardBox>
      )}
    </Droppable>
  );
};

export default React.memo(Board);
