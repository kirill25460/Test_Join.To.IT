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
} from "./Header.styles";

import { FiSearch, FiGlobe, FiMessageCircle, FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <HeaderWrapper>
      {/* Поиск */}
      <SearchBox>
        <FiSearch size={16} color="#9CA3AF" />
        <SearchInput placeholder="Search transactions, invoices or help" />
      </SearchBox>

      {/* Справа */}
      <IconsWrapper>
        <IconButton>
          <FiGlobe size={18} />
        </IconButton>
        <IconButton>
          <FiMessageCircle size={18} />
        </IconButton>
        <IconButton>
          <FiBell size={18} />
        </IconButton>

        <UserWrapper>
          <UserName>John Doe</UserName>
          <Avatar
            src="https://i.pravatar.cc/40" // можно заменить на реальную аватарку
            alt="user"
          />
        </UserWrapper>
      </IconsWrapper>
    </HeaderWrapper>
  );
}
