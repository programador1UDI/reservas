import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  
 

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.254.240/sarf_back/public/api/login",
        {
          name,
          password,
          rol,
        }
      );
  
      if (response.data.status === "success") {
        toast.success("Inicio de sesión exitoso");
        setTimeout(() => {
          window.location.href = "/lateral";
        }, 1000); // Redirige después de 1 segundo
      } else {
        toast.error("Credenciales incorrectas");
      }
    } catch (error) {
      toast.error("Credenciales incorrectas");
      console.error("Error al intentar iniciar sesión:", error);
    }
  };

  return (
    <section class="h-screen bg-gray-200">
      <div class=" w-[50%] mx-auto h-full">
        <div class="flex items-center justify-center h-full">
          <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 rounded-lg shadow-md bg-white">
            <div class="p-4 md:p-8">
              <div className="flex mb-8">
                <img
                  className="mx-auto my-auto w-[70%]"
                  src="https://sievi.udi.edu.co/sievi/img/logo-udi-negro.bbe5273e.png"
                ></img>
              </div>

              <div>
                <h3 className="text-left mx-4 mb-1 font-semibold text-sm ">Sistema de Agendamiento de Recursos Físicos. </h3>
              </div>

              <form class="mx-4 my-2">
                <div class="grid grid-cols-1 gap-y-3">
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
                    <label class="text-left mb-1 block">Contraseña</label>
                    <input
                      type="password"
                      class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div class="relative">
                    <label class="text-left mb-1 block">Seleccione el tipo de usuario</label>
                    <select
                      class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={rol}
                      onChange={(e) => setRol(e.target.value)}
                    >
                      <option>Seleccione el tipo de usuario</option>
                      <option value={1}>Administrador</option>
                      <option value={2}>Profesional Dependencia</option>
                    </select>
                  </div>
                </div>

                <div class="flex items-center justify-center mt-6">
                  <button
                    onClick={handleLogin}
                    type="button"
                    class="  bg-neutral-900 text-white px-4 py-2 rounded-md font-medium tracking-wide hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-slate-950 w-full"
                  >
                    Iniciar Sesión
                  </button>
                </div>
                
              </form>


            </div>
          </div>
        </div>
      </div>
    </section>





  );
};

export default Login;
