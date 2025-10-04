import {
  SidebarWrapper,
  Menu,
  MenuItem,
  IconWrapper,
  Label,
} from "./SideBar.styled";

import { NavLink } from "react-router-dom";
import {
  Home,
  BarChart2,
  Mail,
  Package,
  FileText,
  Users,
  MessageSquare,
  Calendar,
  HelpCircle,
  Settings,
} from "lucide-react";


const SideBar = () => {

  const menuItems = [
    { name: "Home", icon: <Home size={16} />, path: "/" },
    { name: "Dashboard", icon: <BarChart2 size={16} />, path: "/dashboard" },
    { name: "Inbox", icon: <Mail size={16} />, path: "/inbox" },
    { name: "Products", icon: <Package size={16} />, path: "/products" },
    { name: "Invoices", icon: <FileText size={16} />, path: "/invoices" },
    { name: "Customers", icon: <Users size={16} />, path: "/customers" },
    { name: "Chat Room", icon: <MessageSquare size={16} />, path: "/chat" },
    { name: "Calendar", icon: <Calendar size={16} />, path: "/calendar" },
    { name: "Help Center", icon: <HelpCircle size={16} />, path: "/help" },
    { name: "Settings", icon: <Settings size={16} />, path: "/settings" },
  ];
  

  return (
    <SidebarWrapper>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            as={NavLink}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <IconWrapper>{item.icon}</IconWrapper>
            <Label>{item.name}</Label>
          </MenuItem>
        ))}
      </Menu>
    </SidebarWrapper>
  );
};

export default SideBar;