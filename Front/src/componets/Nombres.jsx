import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const Nombres = () => {
  const [clientNames, setClientNames] = useState([]);
  const [clientEmails, setClientEmails] = useState({});
  const [selectedClient, setSelectedClient] = useState('');

  useEffect(() => {
    const obtenerNombresClientes = async () => {
      try {
        const token = localStorage.getItem('token');
        const url = `${import.meta.env.VITE_BACKEND_URL}/clientes`;
        const options = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        };
        const respuesta = await axios.get(url, options);
        const nombresClientes = respuesta.data.map(cliente => {
          const nombreCompleto = `${cliente.nombre}- ${cliente.apellido} ${cliente.ciudad} ${cliente.cedula} `;
          const email = cliente.email;
          console.log(`Nombre: ${nombreCompleto}, Email: ${email}`);
          setClientEmails(prevState => ({
            ...prevState,
            [nombreCompleto]: email
          }));
          return nombreCompleto;
        });
        setClientNames(nombresClientes);
      } catch (error) {
        console.error('Error al obtener los nombres de los clientes:', error);
      }
    };

    obtenerNombresClientes();
  }, []);

  const handleClientSelect = (event, value) => {
    setSelectedClient(value);
    console.log('Cliente seleccionado:', value);
  };

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={clientNames}
        onChange={handleClientSelect}
        renderInput={(params) => <TextField {...params} label="Nombres de clientes" />}
      />

      <div>
        <p>
          <span className='mr-7'>Email Cliente:</span>
          {selectedClient && clientEmails[selectedClient]}
          {console.log('Email Cliente:', selectedClient && clientEmails[selectedClient])}
        </p>
      </div>
    </Stack>
  );
};

export default Nombres;
