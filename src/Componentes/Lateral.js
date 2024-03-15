
import React from 'react';
import { Link } from "react-router-dom";
import { Sidebar } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { Datepicker } from 'flowbite-react';
import { HiArrowSmRight, HiViewGridAdd } from 'react-icons/hi';
import { GiSoccerField, GiSoccerKick } from "react-icons/gi";
import { HiHomeModern, HiHome } from "react-icons/hi2";
import { FaBusAlt, FaBus, FaBookReader } from "react-icons/fa";
import Calendario from './Calendario';
import NavBar from './NavBar';
function Lateral() {
    return (
        <div>
            {<NavBar />}
            <div className='flex  '>
                <div>
                    <Sidebar aria-label="Sidebar with multi-level dropdown example">
                        <Link to="/perfil">
                        <div className="flex justify-start items-center pb-3" >
                            <Avatar img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar of Jese" rounded />
                            <h1 className='text-center p-2'>Rectoría</h1>
                        </div>
                        </Link>
                        
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item readOnly>
                                    <Datepicker readOnly />
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                    <Link to="/register">Agregar Usuario</Link>
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                    <Link to="/dependencia">Agregar Dependencia</Link>
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                        <Link to="/recurso">Agregar Recurso</Link>
                                    </Sidebar.Item>
                                <Sidebar.Collapse icon={GiSoccerKick} label="Bienestar">
                                    <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                        <Link to="/recurso">Agregar Recurso</Link>
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={GiSoccerField} href="#">Cancha 1</Sidebar.Item>
                                    <Sidebar.Item icon={GiSoccerField} href="#">Cancha 2</Sidebar.Item>
                                    <Sidebar.Item icon={GiSoccerField} href="#">Auditorio 1</Sidebar.Item>
                                    <Sidebar.Item icon={GiSoccerField} href="#">Auditorio 2</Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Collapse icon={HiHomeModern} label="Hostal">
                                <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                        <Link to="/recurso">Agregar Recurso</Link>
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={HiHome} href="#">Casa 1</Sidebar.Item>
                                    <Sidebar.Item icon={HiHome} href="#">Casa 2</Sidebar.Item>
                                    <Sidebar.Item icon={HiHome} href="#">Casa 3</Sidebar.Item>
                                    <Sidebar.Item icon={HiHome} href="#">Casa 4</Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Collapse icon={FaBusAlt} label="Vehículos">
                                <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                        <Link to="/recurso">Agregar Recurso</Link>
                                    </Sidebar.Item>
                                    <Sidebar.Item icon={FaBus} href="#">Bus 1</Sidebar.Item>
                                    <Sidebar.Item icon={FaBus} href="#">Bus 2</Sidebar.Item>
                                    <Sidebar.Item icon={FaBus} href="#">Bus 3</Sidebar.Item>
                                    <Sidebar.Item icon={FaBus} href="#">Bus 4</Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Item href="#" icon={FaBookReader}>
                                    Manual de Usuario
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                Cerrar Sesión
                                </Sidebar.Item>


                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>

                <div className='flex-1 w-64'>
                    <Calendario />
                </div>


            </div>
        </div>


    );
}

export default Lateral;