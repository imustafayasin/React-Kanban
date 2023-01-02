import Login from '../views/Login'
import Dashboard from "../views/Dashboard.js"
import Register from "../views/Register.js"
import { Routes, Route } from 'react-router-dom'


export default function Router() {
    return (<Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/Register' element={<Register />}></Route>
    </Routes>)
}
