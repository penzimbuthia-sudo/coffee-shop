import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/Adminportal";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "shop":
        return <Shop />;
      case "admin":
        return <AdminPortal />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}

export default App;