import { useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";


const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div>
        <Sidebar isOpen={isOpen} />
        <main>
          Dashboard
        </main>
      </div>
    </div>
  )
}

export default Dashboard;
