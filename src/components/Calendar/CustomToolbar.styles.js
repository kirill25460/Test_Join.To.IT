// CustomToolbar.styles.js
import styled from "styled-components";

export const ToolbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto auto;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  margin: 0px 0px 15px 0px;
 font-family: var(--font-main);
  font-size: var(--fs-18);
  font-weight: 400; 
  color: var(--color-gray);
  line-height: var(--lh-13);
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: start;
`;

export const RightWrap = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
`;

export const NavWrap = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: flex-start;
  
`;

export const Label = styled.span`
  grid-column: 2;
  grid-row: 2;
  text-align: center;
  font-family: var(--font-main);
  font-size: var(--fs-18);
  font-weight: 400; 
  color: var(--color-gray);
  line-height: var(--lh-13);
`;

export const ButtonGroup = styled.div`
box-shadow: 0px 2px 3px #0000000D;
border: 1px solid #D7DAE2;
border-radius: 4px;
opacity: 1;
overflow: hidden;
`;

export const Button = styled.button`
  background: #fff;
  border: none;
  padding: 6px 14px;
  font-family: var(--font-main);
  font-size: var(--fs-13);
  font-weight: 400; 
  color: var(--color-gray);
  line-height: var(--lh-20);
  cursor: pointer;
  transition: all 0.2s ease;

  /* Разделительная линия между кнопками */
  & + & {
    border-left: 1px solid #d9d9d9;
  }

  &:hover {
    color: var(--color-blue);
  }

  &.active {
    color: var(--color-blue);
  }
`;

