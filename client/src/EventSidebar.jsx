import { useState } from 'react';
import './EventSidebar.css';

function EventSidebar({ events, onSelectEvent }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [sidebarActive, setSidebarActive] = useState(true);
  const [toggleButtonText, setToggleButtonText] = useState('X');

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    setToggleButtonText(sidebarActive ? '☰' : 'X');
  };

  const showEvent = (event) => {
    setSelectedEvent(event);
    onSelectEvent(event.year_start);
  };

  return (
    <div className="event-sidebar-wrapper">
      <button className="event-sidebar-toggle" onClick={toggleSidebar}>{toggleButtonText}</button>
      <div className={sidebarActive ? "event-sidebar-content-active" : "event-sidebar-content-inactive"}>
        {selectedEvent ? (
          <>
            <button className="event-sidebar-back" onClick={() => setSelectedEvent(null)}>← Back to Events</button>
            <h2>{selectedEvent.name}</h2>
            <p><strong>{selectedEvent.year_start} – {selectedEvent.year_end}</strong></p>
            <p>{selectedEvent.description}</p>
          </>
        ) : (
          <>
            <h2>Events</h2>
            <ul className="event-sidebar-list">
              {events.map((event, i) => (
                <li key={i} className="event-sidebar-list-item">
                  <button onClick={() => showEvent(event)} className="event-sidebar-list-button">
                    {event.name} ({event.year_start})
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default EventSidebar;
