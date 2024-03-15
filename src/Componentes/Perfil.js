import React from 'react'
import NavBar from './NavBar'

export default function Perfil() {
    return (
        <div>
            <NavBar/>
            <section class="h-screen bg-gray-200 text-sm">
                <div class="w-[90%]  mx-auto h-full">

                    <div class="flex items-center justify-center h-full">

                        <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3  rounded  bg-white">
                            <div className='bg-black h-10 text-white rounded-t flex'>
                                <h1 className='my-auto pl-10 font-semibold text-base'>Información de Usuario</h1>

                            </div>
                            <div className='p-10'>
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
                                            <label class="text-left mb-1 block">Cédula</label>
                                            <input
                                                type="text"
                                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"

                                            />
                                        </div>
                                        <div class="relative">
                                            <label class="text-left mb-1 block">Telefono</label>
                                            <input
                                                type="number"
                                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"

                                            />
                                        </div>

                                        <div class="relative">
                                            <label class="text-left mb-1 block">Correo</label>
                                            <input
                                                type="email"
                                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"

                                            />
                                        </div>
                                        <div class="relative">
                                            <label class="text-left mb-1 block">Rol</label>
                                            <input
                                                type="text"
                                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"

                                            />
                                        </div>
                                        <div class="relative">
                                            <label class="text-left mb-1 block">Campus</label>
                                            <input
                                                type="text"
                                                class="form-input block w-full px-3 py-2 border border-gray-300 rounded  bg-gray-200 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"

                                            />
                                        </div>
                                        <div class="relative">
                                            <label class="text-left mb-1 block">Cambiar Contraseña</label>
                                            <input
                                                type="Password"
                                                class="form-input block w-full px-3 py-2 border border-red-400 rounded  bg-gray-200 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                placeholder='Ingrese contraseña actual'

                                            />
                                        </div>
                                        <div class="relative">
                                            <label class="text-left mb-1 block">Ingrese Nueva Contraseña</label>
                                            <input
                                                type="Password"
                                                class="form-input block w-full px-3 py-2 border border-red-400 rounded  bg-gray-200 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                placeholder='***************'

                                            />
                                        </div>


                                    </div>

                                    <div class="flex items-center justify-center mt-6">
                                        <button
                                            type="button"
                                            class="  bg-neutral-900 text-white px-4 py-2 rounded font-medium tracking-wide hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-slate-950 w-full"
                                        >
                                            Actualizar
                                        </button>
                                    </div>

                                </form>
                            </div>



                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
