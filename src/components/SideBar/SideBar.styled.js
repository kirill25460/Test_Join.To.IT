import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const SidebarWrapper = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #2f2e41;
  color: #cbd5e0;
  display: flex;
  flex-direction: column;
  position:absolute;
`;

export const Logo = styled.h1`
  padding: 20px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
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
  gap: 12px;
  padding: 12px 20px;
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
    border-left: 3px solid #6c63ff;
    color: #ffffff;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 14px;
`;
