import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import RegistryPage from "./pages/RegistryPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/registry" element={<RegistryPage />} />
        <Route path="/more-info" element={<InfoPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
