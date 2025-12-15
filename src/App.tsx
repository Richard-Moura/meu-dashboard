import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ReportPage from "./components/ReportsPage";
import SettingsPage from "./components/SettingsPage";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [themeColor, setThemeColor] = useState("#1a237e");
  const [page, setPage] = useState("home");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Sidebar page={page} setPage={setPage} />
      <div className="main-content">
        <Header />
        {page === "home" && <Dashboard darkMode={darkMode} themeColor={themeColor} />}
        {page === "reports" && <ReportPage darkMode={darkMode} themeColor={themeColor} />}
        {page === "settings" && (
          <SettingsPage
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            themeColor={themeColor}
            setThemeColor={setThemeColor}
          />
        )}
      </div>
    </div>
  );
}

export default App;
