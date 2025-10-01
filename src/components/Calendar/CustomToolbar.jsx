import React from "react";
import {ToolbarWrapper, ButtonGroup,Button ,Label,Wrap,Wrap2} from './CustomToolbar.styled';

export default function CustomToolbar({ label, onNavigate, onView, view }) {
  return (
    <ToolbarWrapper>
        <Wrap>
        <h2>Calendar View</h2>
      <ButtonGroup>
        <Button
          className={view === "month" ? "active" : ""}
          onClick={() => onView("month")}
        >
          Month
        </Button>
        <Button
          className={view === "week" ? "active" : ""}
          onClick={() => onView("week")}
        >
          Week
        </Button>
        <Button
          className={view === "day" ? "active" : ""}
          onClick={() => onView("day")}
        >
          Day
        </Button>
        <Button
          className={view === "agenda" ? "active" : ""}
          onClick={() => onView("agenda")}
        >
          Agenda
        </Button>
      </ButtonGroup></Wrap>
        <Wrap2><ButtonGroup>
        <Button onClick={() => onNavigate("TODAY")}>Today</Button>
        <Button onClick={() => onNavigate("PREV")}>Back</Button>
        <Button onClick={() => onNavigate("NEXT")}>Next</Button>
      </ButtonGroup>
      <Label>{label}</Label></Wrap2>
      
    </ToolbarWrapper>
  );
}
