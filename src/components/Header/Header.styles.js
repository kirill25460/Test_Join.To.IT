import styled from "styled-components";
import { FiSearch, FiGlobe, FiMessageCircle, FiBell } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export const HeaderWrapper = styled.div`
  height: 70px;
  background: transparent;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
`;
export const Wrap = styled.div`

  background: #2f2e41;
  width:260px;
`;
export const WrapRight = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
justify-content: space-between; 
padding: 0 20px;
`;
export const Logo = styled.h1`
padding:25px 0px 25px 20px;
 font-family: var(--font-main);
  font-size: var(--fs-15);
  font-weight: 700; 
  color: var(--color-white);
  line-height: var(--lh-21);
  letter-spacing: 3px;
  margin: 0;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  border-radius: 6px;

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
  margin-left: auto; 
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.h2`
  font-family: var(--font-main);
  font-size: var(--fs-13);
  font-weight: 400; 
  color: var(--color-gray);
  line-height: var(--lh-20);
  margin:0px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Divider =styled.div`
width:1px;
height:28px;
background-color:#EBEBF2;
margin-right:20px;
`;

export const Search = styled(FiSearch)`
  cursor: pointer;
  padding: 0px ;
  color: #BCBCCB;
   &:hover {
    color: #111827;
  }
`;
export const Globe = styled(FiGlobe)`
  cursor: pointer;
  padding: 0px ;
  color: #BCBCCB;
  margin-right:30px;
   &:hover {
    color: #111827;
  }
`;
export const Message = styled(FiMessageCircle)`
  cursor: pointer;
  padding: 0px ;
  color: #BCBCCB;
  margin-right:30px;
   &:hover {
    color: #111827;
  }
`;
export const Bell = styled(FiBell)`
  cursor: pointer;
  padding: 0px ;
  color: #BCBCCB;
  margin-right:20px;
   &:hover {
    color: #111827;
  }
`;
export const Arrow = styled(IoIosArrowDown)`
  cursor: pointer;
  padding: 0px ;
  color: #BCBCCB;
  margin:0px 11px 0px 15px;
   &:hover {
    color: #111827;
  }
`;