
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useState } from "react";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      
      {/* Mobile Toggle Button */}
      <button 
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div className={`left-content ${isOpen ? "open" : ""}`}>
        <LeftSection />
      </div>

      {/* Main Content */}
      <div className="right-content">
        <RightSection />
      </div>

    </div>
  );
}

export default Dashboard;