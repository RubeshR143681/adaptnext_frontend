import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Channel from "./Pages/Channel";
import Customers from "./Pages/Customer";
import Dashboard from "./Pages/Dashboard";
import Integration from "./Pages/Integration";
import Inventory from "./Pages/Inventory";
import Order from "./Pages/Order";
import Shipping from "./Pages/Shipping";
import Submenu from "./Pages/Submenu";
import Returns from "./Pages/Returns";

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/order" element={<Order />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/submenu" element={<Submenu />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
