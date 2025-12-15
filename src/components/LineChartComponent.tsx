import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../estilos/LineChartComponent.css";

interface LineChartProps {
  darkMode: boolean;
  themeColor: string;
}

const data = [
  { name: "Jan", vendas: 400 },
  { name: "Fev", vendas: 300 },
  { name: "Mar", vendas: 500 },
  { name: "Abr", vendas: 200 },
  { name: "Mai", vendas: 700 },
];

function LineChartComponent({ darkMode, themeColor }: LineChartProps) {
  return (
    <div className="linechart-container">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#444" : "#ccc"} />
          <XAxis dataKey="name" stroke={darkMode ? "#fff" : "#000"} />
          <YAxis stroke={darkMode ? "#fff" : "#000"} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="vendas"
            stroke={themeColor}
            animationDuration={1500}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
