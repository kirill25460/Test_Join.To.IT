
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventModal from "../EventModal/EventModal";

const Calendar = () => {
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
    <div style={{ padding: "20px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "today prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        eventDrop={(info) => {
          setEvents((prev) =>
            prev.map((ev) =>
              ev.id === info.event.id
                ? { ...ev, start: info.event.startStr }
                : ev
            )
          );
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
    </div>
  );
};

export default Calendar;
