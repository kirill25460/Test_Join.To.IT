import styled from "styled-components";

export const ToolbarWrapper = styled.div`
  display: flex;
  flex-direction:column;

  align-items: center;
  margin-bottom: 15px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const Wrap = styled.div`
display:flex;
justify-content: space-between;
width:100%;
`;
export const Wrap2 = styled.div`
display:flex;
width:100%;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 5px 12px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f9fafb;
  }

  &.active {
    background: #f3f4f6;
  }
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
`;