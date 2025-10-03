import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Backdrop,
  ColorPicker,
  Header,
  CloseButton,
  Input,
  TextArea,
  Actions,
  SaveButton,
  CancelButton,
  DeleteButton,
} from "./EventModal.styles";

const EventModal = ({ event, date, onSave, onDelete, onClose }) => {
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [color, setColor] = useState("#3788d8");

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setEventDate(event.start ? moment(event.start).format("YYYY-MM-DD") : "");
      setTime(event.start ? moment(event.start).format("HH:mm") : "");          
      setNotes(event.notes || "");
      setColor(event.color || "#3788d8");

    } else {
      setTitle("");
      setEventDate(date?.date ? moment(date.date).format("YYYY-MM-DD") : "");      setTime("");
      setNotes("");
      setColor("#3788d8");
    }
  }, [event, date]);

  const handleSave = () => {
    if (!title.trim() || !eventDate || !time) return;
  
    const start = new Date(`${eventDate}T${time}`);
    const eventData = {
      id: event?.id || start, 
      title,
      start,
      end: start, 
      notes,
      color,
    };
  
    onSave(eventData);
  };
  
  return (
    <Backdrop>
    
        <Header>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </Header>

        <Input
          type="text"
          placeholder="Event name"
          maxLength={30}
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          type="date"
          value={eventDate || ""}
          onChange={(e) => setEventDate(e.target.value)}
        />

        <Input
          type="time"
          value={time || ""}
          onChange={(e) => setTime(e.target.value)}
        />
<ColorPicker
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <TextArea
          placeholder="Notes"
          value={notes || ""}
          onChange={(e) => setNotes(e.target.value)}
        />

        <Actions>
          {event && (
            <DeleteButton onClick={onDelete}>Delete</DeleteButton>
          )}
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </Actions>
      
    </Backdrop>
  );
};

export default EventModal;
