import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DashBoards from './Components/Dashborad/DashBoards';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Dashboard' element={<DashBoards />} />
          <Route path='/Order-List' element={<DashBoards />} />
          <Route path='/Order-Details' element={<DashBoards />} />
          <Route path='/Customer' element={<DashBoards />} />
          <Route path='/Analytics' element={<DashBoards />} />
          <Route path='/Reviews' element={<DashBoards />} />
          <Route path='/Foods' element={<DashBoards />} />
          <Route path='/Food-Details' element={<DashBoards />} />
          <Route path='/Customer-Details' element={<DashBoards />} />
          <Route path='/Calendar' element={<DashBoards />} />
          <Route path='/Chat' element={<DashBoards />} />
          <Route path='/Wallet' element={<DashBoards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;