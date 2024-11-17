import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register.jsx'
import DashBoards from './Components/Dashborad/DashBoards.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Register/> */}
    {/* <DashBoards/> */}
  </StrictMode>,
)
