import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Admin from "./layout/Admin";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Profile from "./components/contact/Profile";
import Sales from "./pages/Sales";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Admin />}>
           <Route  path="/" element={<Dashboard />}/>
           <Route  path="/contact" element={<Contact />}/>
           <Route  path="/profile" element={<Profile />}/>
           <Route  path="/sales" element={<Sales />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
