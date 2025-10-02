import React, { useState, useEffect } from "react";
import {
  Backdrop,
  Modal,
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

  useEffect(() => {
    if (event) {
      setTitle(event.title || "");
      setEventDate(event.start ? event.start.toISOString().slice(0, 10) : "");
      setTime(event.start ? event.start.toISOString().slice(11, 16) : "");      
      setNotes(event.notes || "");
    } else {
      setTitle("");
      setEventDate(date ? date.start?.toISOString().slice(0, 10) : "");
      setTime("");
      setNotes("");
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
