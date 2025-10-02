import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React, { useState, useEffect } from "react";
import {CalcWrap } from './Calendar.styles';
import CustomToolbar from "./CustomToolbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";
import EventModal from "../EventModal/EventModal";

const localizer = momentLocalizer(moment);


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
  const [events, setEvents] = useState([
    { id: "1", title: "Event name", start: "2025-01-02", color: "#3788d8" },
    { id: "2", title: "Event name", start: "2025-01-05", color: "#3788d8" },
  ]);

const [modalOpen, setModalOpen] = useState(false);
const [selectedEvent, setSelectedEvent] = useState(null);
const [selectedDate, setSelectedDate] = useState(null);

 // Открыть модал при клике по дате
 const handleDateClick = (info) => {
  setSelectedDate(info.dateStr);
  setSelectedEvent(null);
  setModalOpen(true);
};

// Открыть модал при клике по событию
const handleEventClick = (info) => {
  const event = events.find((e) => e.id === info.event.id);
  setSelectedEvent(event);
  setSelectedDate(event.start);
  setModalOpen(true);
};

// Добавить или обновить событие
const handleSaveEvent = (eventData) => {
  if (selectedEvent) {
    // редактирование
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === selectedEvent.id ? { ...ev, ...eventData } : ev
      )
    );
  } else {
    // добавление
    const newEvent = {
      id: String(Date.now()),
      ...eventData,
    };
    setEvents((prev) => [...prev, newEvent]);
  }
  setModalOpen(false);
};

// Удаление события
const handleDeleteEvent = () => {
  if (selectedEvent) {
    setEvents((prev) => prev.filter((ev) => ev.id !== selectedEvent.id));
  }
  setModalOpen(false);
};
  return (
    <CalcWrap>
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventClick={handleEventClick}
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
      {modalOpen && (
        <EventModal
          event={selectedEvent}
          date={selectedDate}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
          onClose={() => setModalOpen(false)}
        />
      )}
    </CalcWrap>
  );
}
