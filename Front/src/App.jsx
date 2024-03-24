import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from './layout/Auth'
import Login from './paginas/Login'
import { LandinPage } from './paginas/LandinPage'
import { NotFound } from './paginas/NotFound'
import Dashboard from './layout/Dashboard'
import Clientes from './paginas/Clientes'
import Vehiculos from './paginas/Vehiculos'
import Crear from './paginas/Crear'
import Actualizar from './paginas/Actualizar'
import Perfil from './paginas/Perfil'
import { AuthProvider } from './context/AuthProvider'
import { PrivateRoute } from './routes/PrivateRoute'
import { FormularioCl } from './componets/Perfil/FormularioCl'
import { FormularioVh } from './componets/Perfil/FormularioVh'
import VisualizarCl from './paginas/VisualizarCl'
import Visualizar from './paginas/Visualizar'
import ActualizarCl from './paginas/ActualizarCl'



function App() {
  return (
    <>
    <BrowserRouter>
        <AuthProvider>
          <Routes>

            <Route index element={<LandinPage/>} />

            <Route path='/' element={<Auth />}>
              <Route path='login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='dashboard/*' element={
              <PrivateRoute>
                <Routes>
                  <Route element={<Dashboard />}>
                    <Route index element={<Perfil />} />
                    <Route path='clientes' element={<Clientes />} />
                    <Route path='agregarCliente' element={<FormularioCl />} /> 
                    <Route path='visualizarCliente/:id' element={<VisualizarCl />} /> 
                    <Route path='actualizarCliente/:id' element={<ActualizarCl />} />

                    <Route path='vehiculos' element={<Vehiculos />} />
                    <Route path='visualizarVehiculos/:id' element={<Visualizar/>} />  
                    <Route path='agregarVehiculo' element={<FormularioVh />} />              
                    <Route path='actualizarVehiculo/:id' element={<Actualizar />} />
                    <Route path='crear' element={<Crear />} />
                   
                  </Route>
                </Routes>
              </PrivateRoute>
} />




          </Routes>
        </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
