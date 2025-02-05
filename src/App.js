import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Admin from "./layout/Admin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Admin />}>
           <Route  path="/" element={<Dashboard />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
