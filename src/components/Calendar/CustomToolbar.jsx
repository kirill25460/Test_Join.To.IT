import React from "react";
import { ToolbarWrapper, ButtonGroup, Button, Label, NavWrap, RightWrap, Title } from "./CustomToolbar.styles";

export default function CustomToolbar({ label, onNavigate, onView, view }) {
  return (
    <ToolbarWrapper>
      <Title>Calendar View</Title>
      <RightWrap>
        <ButtonGroup>
          <Button className={view === "month" ? "active" : ""} onClick={() => onView("month")}>Month</Button>
          <Button className={view === "week" ? "active" : ""} onClick={() => onView("week")}>Week</Button>
          <Button className={view === "day" ? "active" : ""} onClick={() => onView("day")}>Day</Button>
          <Button className={view === "agenda" ? "active" : ""} onClick={() => onView("agenda")}>Agenda</Button>
        </ButtonGroup>
      </RightWrap>

      <NavWrap>
        <ButtonGroup>
          <Button onClick={() => onNavigate("TODAY")}>Today</Button>
          <Button onClick={() => onNavigate("PREV")}>Back</Button>
          <Button onClick={() => onNavigate("NEXT")}>Next</Button>
        </ButtonGroup>
      </NavWrap>

      <Label>{label}</Label>
    </ToolbarWrapper>
  );
}
