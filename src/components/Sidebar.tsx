
import "../estilos/Sidebar.css";

interface SidebarProps {
  page: string;
  setPage: (page: string) => void;
}

function Sidebar({ page, setPage }: SidebarProps) {
  return (
    <div className="sidebar">
      <h2>Meu Dashboard</h2>
      <ul>
        <li className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>Home</li>
        <li className={page === "reports" ? "active" : ""} onClick={() => setPage("reports")}>Relatórios</li>
        <li className={page === "settings" ? "active" : ""} onClick={() => setPage("settings")}>Configurações</li>
      </ul>
    </div>
  );
}

export default Sidebar;
