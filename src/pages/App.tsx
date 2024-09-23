import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";

function App() {
  return (
    <div className="flex">
      <Drawer />
      <div className="w-screen">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
