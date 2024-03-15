import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { colors } from "@mui/material";
import { red } from "@mui/material/colors";

export default function FormModal() {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState("");

    function onCloseModal() {
        setOpenModal(false);
        /* setEmail(''); */
    }
    return (
        <>

            <Button onClick={() => setOpenModal(true)}>Evento</Button>
            <Modal show={openModal} size="lg" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-2 ">
                        {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> */}
                        <div>
                            <div className="block">
                                <Label htmlFor="Solicitante" value="Solicitante" />
                            </div>
                            <TextInput


                                id="Solcitante"
                                placeholder=""
                                type="text"
                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                /*  value={email} */
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="block">
                                <Label htmlFor="Telefono" value="Telefono" />
                            </div>
                            <TextInput
                                id="Telefono"
                                type="tel"
                                placeholder=""
                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                /*   value={email} */
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="block">
                                <Label htmlFor="Email" value="Email" />
                            </div>
                            <TextInput
                                id="Telefono"
                                placeholder=""
                                type="email"
                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                                /*   value={email} */
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>

                        <div>

                            <div className="flex justify-between gap-2 mt-4">
                                <div className="flex items-center">
                                    <LocalizationProvider  dateAdapter={AdapterDayjs}>
                                        <TimePicker   label="Hora de Inicio" />
                                    </LocalizationProvider>
                                </div>
                                <div className="flex items-center ">
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <TimePicker label="Hora Fin" />
                                    </LocalizationProvider>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-end  text-sm font-medium text-white ">

                            <div className="mt-3">
                                <button className="bg-neutral-900 py-2 px-4 rounded-md">Guardar</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
