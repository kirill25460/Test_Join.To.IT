import React, { useState, useEffect } from "react";
import {Backdrop,Modal,Input,Color,Actions,SaveButton,CancelButton,DeleteButton} from './EventModal.styles';
const EventModal = ({ event, date, onSave, onDelete, onClose }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("#3788d8");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setTime(event.start?.slice(11, 16) || "");
      setColor(event.color || "#3788d8");
    } else {
      setTitle("");
      setTime("");
      setColor("#3788d8");
    }
  }, [event]);

  const handleSave = () => {
    if (!title.trim()) return;
    const eventData = {
      title,
      start: time ? `${date}T${time}` : date,
      color,
    };
    onSave(eventData);
  };

  return (
    <Backdrop>
      <Modal>
        <Input
          type="text"
          placeholder="Event name"
          maxLength={30}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          
        />
        <Color
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
         
        />
        <Actions>
          {event && (
            <DeleteButton onClick={onDelete} >
              Delete
            </DeleteButton>
          )}
          <SaveButton onClick={handleSave}>
            Save
          </SaveButton>
          <CancelButton onClick={onClose} >
            Cancel
          </CancelButton>
        </Actions>
      </Modal>
    </Backdrop>
  );
};



export default EventModal;
