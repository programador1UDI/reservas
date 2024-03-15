import React from "react";
import { FaUser } from "react-icons/fa";

export default function Register() {
 
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

              <di>
                <h3 className="text-left mx-4 mb-1 font-semibold text-sm ">Sistema de Agendamiento de Recursos Físicos. </h3>
              </di>

              <form class="mx-4 my-2">
                <div class="grid grid-cols-1 gap-y-3">
                  <div class="relative">
                    <label class="text-left mb-1 block">Usuario</label>
                  
                    <input
                      
                      type="text"
                      class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Nombre de usuario"
                    />
                  </div>

                  <div class="relative">
                    <label class="text-left mb-1 block">Contraseña</label>
                    <input
                      type="password"
                      class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Contraseña"
                    />
                  </div>

                 
                  <div class="relative">
                    <label class="text-left mb-1 block">Seleccione el Campus</label>
                    <select
                      class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Seleccione el Campus</option>
                      <option value={1}>Bucaramanga</option>
                      <option value={2}>Barrancabermeja</option>
                      <option value={3}>San Gil</option>
                    </select>
                  </div>

                  <div class="relative">
                    <label class="text-left mb-1 block">Seleccione el tipo de usuario</label>
                    <select
                      class="form-input block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Seleccione el tipo de usuario</option>
                      <option value={1}>Administrador</option>
                      <option value={2}>Profesional Dependencia</option>
                      
                    </select>
                  </div>
                  
                </div>

                <div class="flex items-center justify-center mt-6">
                  <button
                    type="button"
                    class="  bg-neutral-900 text-white px-4 py-2 rounded-md font-medium tracking-wide hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-slate-950 w-full"
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
  );
}
