import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Color = styled.input`
  width: 50px;
  height: 35px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const SaveButton = styled.button`
  background: #3788d8;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background: red;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
