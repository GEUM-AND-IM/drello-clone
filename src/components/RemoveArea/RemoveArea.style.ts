import styled, { css } from "styled-components";

export const RemoveAreaWrap = styled.div<{ isDraggingOver: boolean }>`
  width: 100%;
  height: 64px;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 100%;
  transition: 1s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isDraggingOver &&
    css`
      transition: 0.5s ease-in-out;
      background-color: red;
      box-shadow: 1px 10px 90px 10px red;
    `}

  img {
    width: 50%;
  }
`;
