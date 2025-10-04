import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const SidebarWrapper = styled.div`
  width: 260px;
  height: 1132px;
  background-color: #2f2e41;
  color: #cbd5e0;
  display: flex;
  flex-direction: column;
  position:absolute;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
   background-color: #43425D;
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
height:53px;
padding-left:25px;
margin-bottom:6px;
  cursor: pointer;
  text-decoration: none;
  color: #cbd5e0;
  border-left: 3px solid transparent;
  transition: background 0.2s ease, border 0.2s ease;

  &:hover {
    background-color: #2f2e41;
  }

  &.active {
    background-color: #2f2e41;
    border-left: 3px solid #A3A0FB;
    color: #ffffff;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right:11px;
    &.active {
    
    color: #6c63ff;
  }
`;

export const Label = styled.span`
  font-family: var(--font-main);
  font-size: var(--fs-15);
  font-weight: 400; 
  color: var(--color-white);
  line-height: var(--lh-19);
`;
