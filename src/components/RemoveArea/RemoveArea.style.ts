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
      top: 0px;
      right: 0px;
      transform-origin: top right;
      position: absolute;
      width: 180px;
      height: 180px;
      transition: 1s;
    `}

  img {
    width: 50%;
  }
`;
