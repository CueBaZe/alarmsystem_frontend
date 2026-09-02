import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import Login from './screens/login.tsx'
import Dashboard from './screens/dashboard.tsx'
import Analytics from './screens/analytics.tsx'
import Settings from './screens/settings.tsx'

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/analytics' element={<Analytics />}/>
        <Route path='/settings' element={<Settings />}/>
      </Routes> 
    </BrowserRouter>
)
