// Calendario.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';





const Calendario = ({ aulaSeleccionada }) => {
  const [events, setEvents] = useState([
    {
      title: 'Reunión Rectoría',
      start: '2024-03-13T14:30:00-05:00',
      end: '2024-03-13T15:00:00-05:00',
    },
    {
      title: 'Entrega de Avances de Proyecto',
      start: '2024-03-21T14:00:00-05:00',
      end: '2024-03-21T16:00:00-05:00',
    },
    // Agrega más eventos según tus necesidades o puedes obtenerlos del backend
  ]);








  return (

    <>
    
      <div className="flex-grow p-4">


        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          locale={esLocale}

        />


      </div>
    </>

  );
};

export default Calendario;