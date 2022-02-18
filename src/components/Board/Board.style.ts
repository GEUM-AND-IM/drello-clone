import styled, { css } from "styled-components";

export const BoardBox = styled.div<{ isDraggingOver: boolean }>`
  width: 400px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 20px;
  height: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #d8d2cb;
  overflow: hidden;
  overflow-y: scroll;
  ${(props) =>
    props.isDraggingOver &&
    css`
      transition: 0.2s ease-in-out;
      margin-top: -10px;
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoardHeaderWrap = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #d8d2cb;
  position: sticky;
  top: 0px;
  h1 {
    font-weight: bold;
  }
`;

export const BoardInputWrap = styled.form`
  width: 100%;
  display: flex;
  padding: 0px 10px;
  box-sizing: border-box;
  column-gap: 10px;
  margin-bottom: 5px;

  input {
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    border: 1px;
    outline: none;
    cursor: pointer;
    padding: 5px 10px;
    box-sizing: border-box;
    font-size: 100%;
  }
`;

export const BoardItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  padding-top: 0px;
`;
