import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className='flex bg-black items-center justify-between p-5'>
            <div>
            <img
                className=" h-5 object-cover"
                src="https://web.udi.edu.co/sgps/images/logo-udi-blanco3.png"
            ></img>
            </div>
           
            <div className='flex justify-between gap-16 items-center'>
            <Link to="/lateral" className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-3 py-1  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'> calendario</Link>
            <h3 className="font-semibold text-sm text-white ">Sistema de Agendamiento de Recursos Físicos. </h3>
            </div>
            
        </div>
    )
}
