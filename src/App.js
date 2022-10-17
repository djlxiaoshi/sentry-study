import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './pages/lauout'
import HomePage from './pages/home'
import ErrorPage from './pages/error'
import RequestPage from './pages/request'
import MdapPage from './pages/mdap'
function App() {
  
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/mdap" element={<MdapPage />} />
          <Route path="*" element={<div>404!!</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
