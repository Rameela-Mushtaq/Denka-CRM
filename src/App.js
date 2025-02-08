import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Admin from "./layout/Admin";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Profile from "./components/contact/Profile";
import Sales from "./pages/Sales";
import Activity from "./pages/Activity";
import Report from "./pages/Report";
import Goals from "./pages/Goals";
import Ecom from "./pages/Ecom";
import Meeting from "./pages/Meeting";
import RoleBased from "./pages/RoleBased";
import Chat from "./pages/Chat";
import SignIn from "./components/login/SignIn";

function App() {
  return (
    <Router>
      <Routes>
      <Route  path="/login" element={<SignIn />}/>
        <Route element={<Admin />}>
           <Route  path="/" element={<Dashboard />}/>
           <Route  path="/contact" element={<Contact />}/>
           <Route  path="/profile" element={<Profile />}/>
           <Route  path="/sales" element={<Sales />}/>
           <Route  path="/activity" element={<Activity />}/>
           <Route  path="/reports" element={<Report />}/>
           <Route  path="/goals" element={<Goals />}/>
           <Route  path="/e-com" element={<Ecom />}/>
           <Route  path="/meeting" element={<Meeting />}/>
           <Route  path="/roles" element={<RoleBased />}/>
           <Route  path="/chat" element={<Chat />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
