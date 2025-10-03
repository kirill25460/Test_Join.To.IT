import React from "react";
import {
  HeaderWrapper,
  SearchBox,
  SearchInput,
  IconsWrapper,
  UserWrapper,
  Avatar,
  UserName,
  IconButton,
  Divider,
} from "./Header.styles";

import { FiSearch, FiGlobe, FiMessageCircle, FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <HeaderWrapper>
      <SearchBox>
        <FiSearch size={16} color="#9CA3AF" />
        <SearchInput placeholder="Search transactions, invoices or help" />
      </SearchBox>
      <IconsWrapper>
        <IconButton>
          <FiGlobe size={16} />
        </IconButton>
        <IconButton>
          <FiMessageCircle size={16} />
        </IconButton>
        <IconButton>
          <FiBell size={16} />
        </IconButton>
<Divider></Divider>
        <UserWrapper>
          <UserName>John Doe</UserName>
          <Avatar
            src="https://i.pravatar.cc/40" 
            alt="user"
          />
        </UserWrapper>
      </IconsWrapper>
    </HeaderWrapper>
  );
}
