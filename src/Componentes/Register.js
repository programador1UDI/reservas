import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import axios from "axios";
import NavBar from './NavBar';

export default function Register() {
  const [name, setName] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol_id, setRol_id] = useState("");
  const [campus_id, setCampus_id] = useState("");


  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://192.168.254.240/sarf_back/public/api/register",
        {
          name,
          cedula,
          telefono,
          password,
          email,
          rol_id,
          campus_id,
        }
      );

      if (response.data.status === "success") {
        alert("Registro exitoso");
        /* ir a calendario */
        window.location.href = "/lateral";
      } else {
        alert("No se pudo registrar el usuario");
      }
    } catch (error) {
      alert("Error al intentar registrar el usuario");
      console.error("Error al intentar iniciar sesión:", error);
    }
  };

  return (
    <>
      {<NavBar />}
     <section class="h-screen bg-gray-200">
      <div class=" w-[75%] mx-auto h-full">
        <div class="flex items-center justify-center h-full">
          <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 rounded-lg shadow-md bg-white">
            <div class="p-2 md:p-6">
              <div className="flex mb-4">
                <img
                  className="mx-auto my-auto w-[70%]"
                  src="https://sievi.udi.edu.co/sievi/img/logo-udi-negro.bbe5273e.png"
                ></img>
              </div>

              <di>
                <h3 className="text-left mx-4 mb-1 font-semibold text-sm ">
                  Sistema de Agendamiento de Recursos Físicos.{" "}
                </h3>
              </di>

              <form class="mx-4 my-2">
                <div class="grid grid-cols-1 gap-y-1">
                  <div className="grid grid-cols-2 gap-3">
                    <div class="relative">
                      <label class="text-left mb-1 block">Usuario</label>

                      <input
                        type="text"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Nombre de usuario"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div class="relative">
                      <label class="text-left mb-1 block">Cédula</label>

                      <input
                        type="text"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Cédula de ciudadanía"
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)}
                      />
                    </div>
                    <div class="relative">
                      <label class="text-left mb-1 block">Telefono</label>

                      <input
                        type="tel"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Número de teléfono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                      />
                    </div>
                    <div class="relative">
                      <label class="text-left mb-1 block">Correo</label>
                      <input
                        type="email"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div class="relative">
                      <label class="text-left mb-1 block">Contraseña</label>
                      <input
                        type="password"
                        class="form-input block w-full px-3 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {/* <div class="relative">
                      <label class="text-left mb-1 block">Contraseña</label>
                      <input
                        type="password"
                        class="form-input block w-full px-3 py-2 border border-red-400 rounded-md focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div> */}
                    <div class="relative">
                      <label class="text-left mb-1 block">
                        Seleccione el Campus
                      </label>
                      <select class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={campus_id}
                        onChange={(e) => setCampus_id(e.target.value)}


                      >
                        <option>Seleccione el Campus</option>
                        <option value={1}>Bucaramanga</option>
                        <option value={2}>Barrancabermeja</option>
                        <option value={3}>San Gil</option>
                      </select>
                    </div>

                    <div class="relative">
                      <label class="text-left mb-1 block">
                        Seleccione el tipo de usuario
                      </label>
                      <select class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={rol_id}
                        onChange={(e) => setRol_id(e.target.value)}
                      >
                        <option>Seleccione el tipo de usuario</option>
                        <option value={1}>Administrador</option>
                        <option value={2}>Profesional Dependencia</option>
                      </select>
                    </div>

                  </div>



                </div>

                <div class="flex items-center justify-center mt-6">
                  <button
                    type="button"
                    class="  bg-neutral-900 text-white px-4 py-2 rounded-md font-medium tracking-wide hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-slate-950 w-full"
                    onClick={handleRegister}
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
   
  );
}
