import styled, { css } from "styled-components";

export const Card = styled.div<{ isDragging: boolean }>`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  background-color: #eeeeee;
  border-radius: 5px;
  margin-bottom: 5px;
  box-sizing: border-box;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  ${(props) => props.isDragging && css``}

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
