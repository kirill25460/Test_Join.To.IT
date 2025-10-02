import styled from "styled-components";

export const Backdrop = styled.div`
  position: absolute;
 
  width: 201px;
  height: 275px;
  background: #fff;
  box-shadow: 0px 3px 18px #00000029;
  border: 1px solid #43425D;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #fff;
  height: 275px;
  width: 201px;
  box-shadow: 0px 6px 20px rgba(0,0,0,0.1);
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #888;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const Input = styled.input`
  width: 148px;
  padding: 10px 34px 10px 0;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;

export const TextArea = styled.textarea`
  width: 148px;
  padding: 10px 0;
  border: none;
  outline: none;
  font-size: 14px;
  background: transparent;
  resize: none;
  color: #333;
  border-bottom: 1px solid #e0e0e0;

  &::placeholder {
    color: #aaa;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 0;
  color: #bbb;
  font-size: 16px;
  pointer-events: none;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 12px;
`;

export const SaveButton = styled.button`
  background: transparent;
  border: none;
  color: #3b82f6;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  border: none;
  color: #ef4444;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #ef4444;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  margin-right: auto;

  &:hover {
    text-decoration: underline;
  }
`;
