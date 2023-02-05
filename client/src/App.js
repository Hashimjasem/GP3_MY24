import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashbord'
import Login from './pages/Login'
import Register from './pages/Register'
import History from './pages/History'
import Setup from './pages/Setup'

import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/history' element={<History />} />
            <Route path='/setup' element={<Setup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;