import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import FormModal from './FormModal';
import axios from 'axios';

const Calendario = ({ aulaSeleccionada }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.254.240/sarf_back/public/api/listarreservas')
      .then(response => {
        const reservas = response.data.reservas.map((reserva, index) => ({
          title: reserva.nombre,
          start: reserva.fecha_inicio,
          end: reserva.fecha_fin,
          descripcion: `Solicitante: ${reserva.solicitante}, Dependencia: ${reserva.nom_dependencia}`,
          eventColor: '#9d007a'
        }));
        setEvents(reservas);
      })
      .catch(error => {
        console.error('Error al obtener las reservas:', error);
      });
  }, []);

  const handleDateClick = (arg) => {
    setOpenModal(true);
    setSelectedDate(arg.dateStr);
  };

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
          dateClick={handleDateClick}
        />
      </div>
      <FormModal openModal={openModal} setOpenModal={setOpenModal} selectedDate={selectedDate} />
    </>
  );
};

export default Calendario;
