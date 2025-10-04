import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React, { useState } from "react";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { CalcWrap,Text } from "./Calendar.styles";
import CustomToolbar from "./CustomToolbar";
import EventModal from "../EventModal/EventModal";
import "./Calendar.css";
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default function MyCalendar() {
  const [events, setEvents] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const formats = {
    dayFormat: (date, culture, localizer) =>
      localizer.format(date, "D", culture), // без ведущего 0
    dateFormat: "D", // для чисел внутри календаря
    weekdayFormat: (date, culture, localizer) =>
      localizer.format(date, "ddd", culture), // сокращённые дни недели
  };

  // Стилизация события цветом
  const eventStyleGetter = (event) => {
    const backgroundColor = event.color || "#3788d8";
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        color: "#fff",
        border: "none",
        display: "block",
      },
    };
  };

  // Клик по дате (создание события)
  const handleSelectSlot = ({ date,bounds }) => {
    setSelectedDate({ date});
    setSelectedEvent(null);
    
  if (bounds) {
    setModalPosition({
      top: bounds.y,       // координата Y ячейки
      left: bounds.x,      // координата X ячейки
    });
  }

  setModalOpen(true);
  };

  //  Клик по событию (редактирование)
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setSelectedDate({ date:event.date});
    setModalOpen(true);
  };

  // Сохранение (новое или редактирование)
  const handleSaveEvent = (eventData) => {
    if (eventData.title.length > 30) {
      alert("Максимум 30 символов!");
      return;
    }
  
    if (selectedEvent) {
      // редактирование
      setEvents((prev) =>
        prev.map((ev) =>
          ev.id === eventData.id ? { ...ev, ...eventData } : ev
        )
      );
    } else {
      // новое событие
      setEvents((prev) => [...prev, eventData]);
    }
    setModalOpen(false);
  };
  

  //  Удаление события
  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents((prev) => prev.filter((ev) => ev.id !== selectedEvent.id));
    }
    setModalOpen(false);
  };

  // Drag & Drop (перетаскивание)
  const moveEvent = ({ event, start, end }) => {
    setEvents((prev) =>
      prev.map((ev) =>
        ev.id === event.id ? { ...ev, start, end } : ev
      )
    );
  };

  return (
    <CalcWrap>
      <Text>Calendar</Text>
      <DnDCalendar
  localizer={localizer}
  events={events}
  startAccessor="start"
  endAccessor="end"
  selectable
  resizable
  onEventDrop={moveEvent}
  onEventResize={moveEvent}
  onSelectSlot={handleSelectSlot}
  onSelectEvent={handleSelectEvent}
  defaultView="month"
  defaultDate={moment().toDate()}
  views={["month", "week", "day", "agenda"]}
  components={{
    toolbar: CustomToolbar,
  }}
  eventPropGetter={eventStyleGetter}
  formats={formats}  

/>

      {modalOpen && (
        <EventModal
          event={selectedEvent}
          date={selectedDate}
          onSave={handleSaveEvent}
          onDelete={handleDeleteEvent}
          onClose={() => setModalOpen(false)}
          modalPosition={modalPosition}
        />
      )}
    </CalcWrap>
  );
}
