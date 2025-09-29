import React, { useState, useEffect } from "react";

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
    <div style={styles.backdrop}>
      <div style={styles.modal}>
        <input
          type="text"
          placeholder="Event name"
          maxLength={30}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={styles.input}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={styles.color}
        />
        <div style={styles.actions}>
          {event && (
            <button onClick={onDelete} style={styles.delete}>
              Delete
            </button>
          )}
          <button onClick={handleSave} style={styles.save}>
            Save
          </button>
          <button onClick={onClose} style={styles.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex:999,
  },
  input: {
    padding: "8px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  color: {
    width: "50px",
    height: "35px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  save: {
    background: "#3788d8",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cancel: {
    background: "transparent",
    border: "none",
    color: "#888",
    cursor: "pointer",
  },
  delete: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default EventModal;
