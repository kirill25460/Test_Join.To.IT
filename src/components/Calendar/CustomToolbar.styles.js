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
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
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
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;

export const ButtonGroup = styled.div`
border: 1px solid #d9d9d9;
border-radius: 6px;
overflow: hidden;
`;

export const Button = styled.button`
  background: #fff;
  border: none;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Разделительная линия между кнопками */
  & + & {
    border-left: 1px solid #d9d9d9;
  }

  &:hover {
    color: #3B86FF;
  }

  &.active {
    
    color: #3B86FF;
  }
`;

