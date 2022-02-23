import styled from "styled-components";

export const RemoveAreaWrap = styled.div<{ isDraggingOver: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${(props) => (props.isDraggingOver ? "200px" : "150px")};
  height: ${(props) => (props.isDraggingOver ? "200px" : "150px")};
  background: ${(props) =>
    props.isDraggingOver &&
    `linear-gradient(to bottom right, #e30000 , ${props.theme.subColor})`};
  transition: 1s;
  border-bottom-right-radius: 100%;
`;
