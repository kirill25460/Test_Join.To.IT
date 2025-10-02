import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e5e7eb;
  margin-left:260px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 6px 12px;
  width: 280px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: #374151;
  flex: 1;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #6b7280;
  font-size: 18px;

  &:hover {
    color: #111827;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
