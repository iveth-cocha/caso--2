import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Auth from './layout/Auth'
import Login from './paginas/Login'
import { LandinPage } from './paginas/LandinPage'
import { NotFound } from './paginas/NotFound'
import Dashboard from './layout/Dashboard'
import Listar from './paginas/Clientes'
import Visualizar from './paginas/Visualizar'
import Crear from './paginas/Crear'
import Actualizar from './paginas/Actualizar'
import Perfil from './paginas/Perfil'
import { AuthProvider } from './context/AuthProvider'
import { PrivateRoute } from './routes/PrivateRoute'
import { FormularioCl } from './componets/Perfil/FormularioCl'



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
                    <Route path='listar' element={<Listar />} />
                    <Route path='agregarCliente' element={<FormularioCl />} />                    
                    <Route path='visualizar/:id' element={<Visualizar />} />
                    <Route path='crear' element={<Crear />} />
                    <Route path='actualizar/:id' element={<Actualizar />} />
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
