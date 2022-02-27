import styled from "styled-components";

export const SideBarWrap = styled.div`
  width: 95px;
  height: 100vh;
  position: absolute;
  right: 0px;
  top: 0px;
  border-left: 1px solid #d8d2cb;
`;

export const SideBarItemsWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.subColor};
  padding: 15px;
  position: relative;
  box-sizing: border-box;
`;
