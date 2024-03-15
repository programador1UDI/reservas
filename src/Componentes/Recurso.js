import React from "react";
import NavBar from "./NavBar";


export default function Recurso() {
  return (
    <>
      <NavBar />
      <section class="h-screen bg-gray-200 text-sm">
        <div class=" w-3/4  mx-auto h-full">
          <div class="flex items-center justify-center h-full">
            <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3  rounded  bg-white">
              <div className="bg-black h-10 text-white rounded-t flex">
                <h1 className="my-auto pl-10 font-semibold text-base">
                  Agregar Recurso
                </h1>
              </div>
              <div className="p-10">
                <form>
                  <div class="grid grid-cols-2  gap-3">
                    <div class="relative">
                      <label class="text-left mb-1 block">Nombre</label>
                      <input
                        type="text"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                      />
                    </div>

                    

                    <div class="relative">
                      <label class="text-left mb-1 block">
                        Campus
                      </label>
                      <select class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                        <option>Seleccione  Campus</option>
                        <option value={1}>Bucaramanga</option>
                        <option value={2}>Barrancabermeja</option>
                        <option value={3}>San Gil</option>
                      </select>
                    </div>
                    <div class="relative">
                      <label class="text-left mb-1 block">
                        Dependencia
                      </label>
                      <select class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                        <option>Seleccione la Dependencia</option>
                        <option value={1}>Bienestar</option>
                        <option value={2}>Hostales</option>
                        <option value={3}>Transporte</option>
                      </select>
                    </div>
                    <div class="relative">
                      <label class="text-left mb-1 block">
                        Estado
                      </label>
                      <select class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm">
                        <option>Seleccione el Estado</option>
                        <option value={1}>Activo</option>
                        <option value={2}>Inactivo</option>
                      </select>
                    </div>
                    <div class="relative">
                      <label class="text-left mb-1 block">Descripción</label>
                      <textarea
                        type="text"
                        class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                        rows={3}
                      />
                    </div>
                    
                  </div>

                  <div class="flex items-center justify-center mt-6">
                    <button
                      type="button"
                      class="  bg-neutral-900 text-white px-4 py-2 rounded font-medium tracking-wide hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-slate-950 w-full"
                    >
                      Guardar
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
