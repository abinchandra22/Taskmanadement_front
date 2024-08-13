import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './pages/Auth'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Auth />}></Route>
        <Route path='/register' element={<Auth insideRegister />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/*' element={<Navigate to={'/'}/>}></Route>

      </Routes>
    </>
  )
}

export default App
