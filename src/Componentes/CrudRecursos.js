import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import NavBar from './NavBar';
export default function CrudRecursos() {
    const [recursos, setRecursos] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.254.240/sarf_back/public/api/listarrecursos')
            .then(response => {
                setRecursos(response.data.recursos);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <>
            <NavBar />
            <h1 className="text-2xl font-semibold my-8">Recursos</h1>
            <table className="w-3/4 md:w-3/4 mx-auto min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th className=" py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                        <th className=" py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Dependencia</th>
                        <th className=" py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                        <th className=" py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        <th className=" py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Opciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    {recursos.map(recurso => (
                        <tr key={recurso.id_recurso}>
                            <td className=" py-4 whitespace-nowrap">{recurso.nombre}</td>
                            <td className=" py-4 whitespace-nowrap">{recurso.dependencia_id}</td>
                            <td className=" py-4 whitespace-nowrap">{recurso.descripcion}</td>
                            <td className=" py-4 whitespace-nowrap">{recurso.estado === 1 ? 'Activo' : recurso.estado=== 2 ? 'Barrancabermeja' : 'San Gil'}</td>
                           {/*  <td className=" py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${recurso.estado === '1' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {recurso.estado}
                                </span>
                            </td> */}
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button className="px-4 py-2 font-medium text-white bg-black rounded-md hover:bg-stone focus:outline-none focus:shadow-outline-blue active:bg-stone transition duration-150 ease-in-out">
                                    <FaEdit />
                                </button>
                                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-500 rounded-md hover:bg-red focus:outline-none focus:shadow-outline-red active:bg-red transition duration-150 ease-in-out">
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}
