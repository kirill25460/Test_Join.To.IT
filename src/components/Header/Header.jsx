import React from "react";
import {
  HeaderWrapper,
  Logo,
  Wrap,
  WrapRight,
  SearchBox,
  SearchInput,
  IconsWrapper,
  UserWrapper,
  Avatar,
  UserName,
  Divider,
  Arrow,
  Search,
  Globe,
  Message,
  Bell,
} from "./Header.styles";



export default function Header() {
  return (
    <HeaderWrapper>
      <Wrap>
      <Logo>IMPEKABLE</Logo>
       </Wrap>
       <WrapRight>
      <SearchBox>
        <Search/>
        <SearchInput placeholder="Search transactions, invoices or help" />
      </SearchBox>
      <IconsWrapper>
        <Globe/>
        <Message/>
        <Bell/>
<Divider></Divider>
        <UserWrapper>
          <UserName>John Doe</UserName>
          <Arrow />
          <Avatar
            src="https://i.pravatar.cc/40" 
            alt="user"
          />
        </UserWrapper>
      </IconsWrapper>
     </WrapRight>
    </HeaderWrapper>
  );
}
