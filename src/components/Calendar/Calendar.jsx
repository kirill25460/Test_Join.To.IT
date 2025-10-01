import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {CalcWrap } from './Calendar.styled';
import CustomToolbar from "./CustomToolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";

// локализатор через moment
const localizer = momentLocalizer(moment);

// Тестовые события
const today = new Date();
const events = [
  {
    title: "Event name",
    start: moment(today).toDate(),
    end: moment(today).toDate(),
  },
  {
    title: "Event name",
    start: moment(today).add(2, "days").toDate(),
    end: moment(today).add(2, "days").toDate(),
  },
  {
    title: "Event name",
    start: moment(today).add(5, "days").toDate(),
    end: moment(today).add(5, "days").toDate(),
  },
];

export default function MyCalendar() {
  return (
    <CalcWrap>
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        defaultDate={moment().toDate()} 
        views={["month", "week", "day", "agenda"]}
        components={{
          toolbar: CustomToolbar,
        }}
        style={{
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          padding: "20px 20px 35px 20px",
        }}
      />
    </CalcWrap>
  );
}
