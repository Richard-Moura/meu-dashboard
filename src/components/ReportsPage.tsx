
import LineChartComponent from "./LineChartComponent";
import "../estilos/ReportsPage.css";

interface ReportPageProps {
  darkMode: boolean;
  themeColor: string;
}

function ReportPage({ darkMode, themeColor }: ReportPageProps) {
  return (
    <div className="report-page">
      <h2>Relatórios Detalhados</h2>
      <p>Exemplo de gráfico detalhado:</p>
      <div className="chart-container">
        <LineChartComponent darkMode={darkMode} themeColor={themeColor} />
      </div>
    </div>
  );
}

export default ReportPage;
