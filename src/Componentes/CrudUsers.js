import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { Button, Label, Modal, Select, TextInput } from "flowbite-react";


export default function CrudUsers() {
    const [openModal, setOpenModal] = useState(false);
    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <>
            <h1 className="text-2xl font-semibold my-8">Usuarios</h1>
            <button className="flex mx-auto flex-end my-2 hover:bg-neutral-900 rounded border-solid border-2 border-black  py-1 px-4 hover:text-white font-semibold" onClick={() => setOpenModal(true)}>
                Agregar
            </button>

            <table class=" w-3/4 mx-auto  divide-gray-200 border shadow-md">
                <thead className="mx-64">
                    <tr>
                        <th class=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nombre
                        </th>
                        <th class=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Dependencia
                        </th>
                        <th class=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Correo
                        </th>
                        <th class=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Campus
                        </th>
                        <th class=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th class=" py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Opciones
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white  divide-gray-200">
                    <tr>
                        <td class="py-4 whitespace-nowrap">John Doe</td>
                        <td class="py-4 whitespace-nowrap">Bienestar</td>
                        <td class="py-4 whitespace-nowrap">john@example.com</td>
                        <td class="py-4 whitespace-nowrap">Bucaramanga</td>
                        <td class="py-4 whitespace-nowrap">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Inactive
                            </span>
                        </td>
                        <td class="py-4 whitespace-nowrap">
                            <button class="px-4 py-2 font-medium text-white bg-black rounded-md hover:bg-stone-950 focus:outline-none focus:shadow-outline-blue active:bg-stone-950 transition duration-150 ease-in-out">
                                <FaEdit />{" "}
                            </button>
                            <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                                <MdDelete />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Modal show={openModal} size="xl" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-2 ">
                        {/* <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> */}
                        <div>
                            <div className="block">
                                <Label htmlFor="Nombre" value="Nombre" />
                            </div>
                            <TextInput
                                id="Nombre"
                                placeholder="Ingrese el nombre"
                                type="text"
                                /*  value={email} */

                                required
                            />
                        </div>
                        <div>
                            <div className="block">
                                <Label htmlFor="Dependencia" value="Dependencia" />
                            </div>
                            <Select
                                id="Dependencia"
                                placeholder="Seleccione la dependencia"
                                required
                            >
                                <option value="3">Selecciona</option>
                                <option value="1">Bienestar</option>
                                <option value="2">Servicios Escolares</option>
                                <option value="3">Recursos Humanos</option>
                            </Select>
                        </div>
                        <div>
                            <div className="block">
                                <Label htmlFor="Email" value="Email" />
                            </div>
                            <TextInput id="Email" placeholder="" type="email" required />
                        </div>

                        <div>
                            <div className="block">
                                <Label htmlFor="Dependencia" value="Dependencia" />
                            </div>
                        <Select
                            id="Dependencia"
                            placeholder="Seleccione la dependencia"
                            required
                        >
                            <option value="3">Selecciona</option>
                            <option value="1">Administrador</option>
                            <option value="2">Director de Dependencia</option>

                        </Select>
                    </div>

                        <div className="flex justify-end  text-sm font-medium text-white ">
                            <div className="mt-3">
                                <button className="bg-neutral-900 py-2 px-4 rounded-md">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
