import { React } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LanderPage from './Pages/LanderPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Enquiry from './Pages/Enquiryy/Enquiry';
import Sidebar from './Components/Sidebar';
import Form from './Pages/Enquiryy/Form';
import ChatBot from './Components/chatbot';
import HomePage from './Pages/HomePage';
import Sales from './Pages/Saless/Sales';
import SalesForm from './Pages/Saless/SalesForm';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <Router>
      <ToSeeComponents />
    </Router>
  );
}

const ToSeeComponents = () => {
  const location = useLocation();
  const isAuthPage = ['/login', '/register', '/'].includes(location.pathname);

  return (
    <>
      {!isAuthPage && <Sidebar />}
      {!isAuthPage && <ChatBot />}
      {!isAuthPage && <SearchBar />}
      <Routes>
        <Route path="/" element={<LanderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*here paths are after logging inn */}
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Enquiry" element={<Enquiry />} />
        <Route path="/CreateEnquiry" element={<Form />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/CreateSales" element={< SalesForm />} />
        <Route path="/SearchBar" element={< SearchBar />} />
      </Routes>
    </>
  );
};

export default App;
