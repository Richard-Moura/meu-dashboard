import Card from "./Card";
import LineChartComponent from "./LineChartComponent";
import "../estilos/Dashboard.css";

interface DashboardProps {
  darkMode: boolean;
  themeColor: string;
}

function Dashboard({ darkMode, themeColor }: DashboardProps) {
  return (
    <div className="dashboard">
      <div className="cards-container">
        <Card title="Usuários" value="120" style={{ animationDelay: "0s" }} />
        <Card title="Vendas" value="80" style={{ animationDelay: "0.1s" }} />
        <Card title="Lucro" value="$5.000" style={{ animationDelay: "0.2s" }} />
      </div>
      <div className="chart-container">
        <LineChartComponent darkMode={darkMode} themeColor={themeColor} />
      </div>
    </div>
  );
}

export default Dashboard;

