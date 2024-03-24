import React from 'react'
import TablaClientes from '../componets/TablaClientes'
import { useNavigate } from 'react-router-dom'

const Clientes = () => {
   
    const navigate = useNavigate();

    


    return (
        
        <div >
            <h1 className='font-black text-4xl text-gray-500'>Clientes</h1>
            <hr className='my-4' />
            <div style={{ width: 'auto', margin: 'auto', display: 'flex', padding: '0.5em' }}>

                <p className='mb-8'>Este módulo estan registrados los Clientes</p>
                
                <input
                type="submit"
                className='bg-gray-600 w-auto p-1  text-slate-300 uppercase font-bold rounded-lg 
                    hover:bg-gray-900 cursor-pointer transition-all ml-auto'
                    onClick={() => navigate(`/dashboard/agregarCliente`)}
                value='Registrar'
            />
               

            </div>
            
            <TablaClientes/>
            
        </div>

        
    )
}

export default Clientes