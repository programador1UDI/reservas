import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { HiArrowSmRight, HiViewGridAdd } from "react-icons/hi";
import { IoPieChartSharp } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBusAlt, FaBus, FaBookReader, FaRegUserCircle } from "react-icons/fa";
import Calendario from "./Calendario";
import NavBar from "./NavBar";
import axios from "axios";
function Lateral() {
    const handlogout = async () => {
        try {
            const response = await axios.post(
                "http://192.168.254.240/sarf_back/public/api/logout"
            );
            if (response.data.status === "success") {
                toast.success("Cierre de sesión exitoso");
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000); // Redirige después de 1 segundo
            } else {
                toast.error("Error al cerrar sesión");
            }
        }
        catch (error) {
            toast.error("Error al cerrar sesión");
            console.error("Error al intentar cerrar sesión:", error);
        }
    }


    return (
        <div>
            {<NavBar />}
            <div className="flex  ">
                <div>
                    <Sidebar aria-label="Sidebar with multi-level dropdown example">
                        <Link to="/perfil">
                            <div className="flex justify-start items-center pb-3">
                                <Avatar
                                    img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="avatar of Jese"
                                    rounded
                                />
                                <h1 className="text-center p-2">Rectoría</h1>
                            </div>
                        </Link>

                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item readOnly>
                                    <Datepicker readOnly />
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={FaRegUserCircle}>
                                    <Link to="/users">Usuarios </Link>
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                    <Link to="/dependencias">Dependencia</Link>
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiViewGridAdd}>
                                    <Link to="/recursos">Recurso</Link>
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={IoPieChartSharp}>
                                    <Link to="/recurso">Reportes</Link>
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={FaBookReader}>
                                    Manual de Usuario
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    <button onClick={handlogout}>Cerrar Sesión</button>
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>

                <div className="flex-1 w-64">
                    <Calendario />
                </div>
            </div>
        </div>
    );
}

export default Lateral;
