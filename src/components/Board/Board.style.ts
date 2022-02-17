import styled, { css } from "styled-components";

export const BoardBox = styled.div<{ isDraggingOver: boolean }>`
  width: 400px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #d8d2cb;
  overflow: hidden;
  border: 1px solid #dbdbdb;
`;

export const BoardHeaderWrap = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    font-weight: 300;
  }
`;

export const BoardItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px;
  padding-top: 0px;
`;
