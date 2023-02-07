import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
// import History from './pages/History'
import Setup from './pages/Setup'
// , reset
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
            {/* <Route path='/history' element={<History />} /> */}
            <Route path='/create' element={<Setup />} />
          </Routes>
          
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
