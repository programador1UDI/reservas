import React, { useState } from 'react';
import { Modal, Button, TextInput } from 'flowbite-react';
import axios from 'axios';

const FormModal = ({ openModal, setOpenModal, selectedDate }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [recursoId, setRecursoId] = useState('');
    // const [usuarioId, setUsuarioId] = useState('');
    const [dependenciaId, setDependenciaId] = useState('');
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');

    const handleCloseModal = () => {
        setOpenModal(false);
        resetFormFields();
    };

    const resetFormFields = () => {
        setNombre('');
        setTelefono('');
        setCorreo('');
        setRecursoId('');
        // setUsuarioId('');
        setDependenciaId('');
        setFechaInicio('');
        setFechaFin('');
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            recurso_id: recursoId,
            // usuario_id: usuarioId,
            dependencia_id: dependenciaId,
            fecha_inicio: selectedDate + ' ' + fechaInicio, // Combina fecha seleccionada con hora de inicio
            fecha_fin: selectedDate + ' ' + fechaFin, // Combina fecha seleccionada con hora de fin
            // prestatario_id: usuarioId 
        };

        axios.post('http://192.168.254.240/sarf_back/public/api/reservas', data)
            .then(response => {
                console.log(response.data);
                alert('Prestamo solicitado con éxito');
                handleCloseModal();
            })
            .catch(error => {
                console.error(error);

                alert('Error al solicitar el prestamo');
                alert(error);


            });
    };

    return (
        <Modal show={openModal} onClose={handleCloseModal}>
            <Modal.Header>Solicitar Prestamo</Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit} >
                    <div className="grid grid-cols-2 gap-3">

                        <div>
                            <label htmlFor="title">Solicitante:</label>
                            <TextInput
                                id="title"
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono:</label>
                            <TextInput
                                id="telefono"
                                type="tel"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="telefono">Correo:</label>
                            <TextInput
                                id="email"
                                type="email"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label class="text-left mb-1 block">Dependencia</label>
                            <select
                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={dependenciaId}
                                onChange={(e) => setDependenciaId(e.target.value)}
                            >
                                <option>Seleccione la Dependencia</option>
                                <option value={1}>Bienestar</option>
                                <option value={2}>Hostales</option>
                                <option value={3}>Transporte</option>
                            </select>
                        </div>
                        <div>
                            <label class="text-left mb-1 block">Recurso</label>
                            <select
                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={recursoId}
                                onChange={(e) => setRecursoId(e.target.value)}
                            >
                                <option>Seleccione el Recurso</option>
                                <option value={1}>Sala de Juntas</option>
                                <option value={2}>Aula</option>
                                <option value={3}>Auditorio</option>

                            </select>
                        </div>


                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label htmlFor="startTime">Hora de inicio:</label>
                                <TextInput
                                    id="startTime"
                                    type="time"
                                    value={fechaInicio}
                                    onChange={(e) => setFechaInicio(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="endTime">Hora de fin:</label>
                                <TextInput
                                    id="endTime"
                                    type="time"
                                    value={fechaFin}
                                    onChange={(e) => setFechaFin(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-end  mt-6">
                        <Button type="submit">Guardar</Button>
                    </div>

                </form>
            </Modal.Body>
        </Modal>
    );
};

export default FormModal;
