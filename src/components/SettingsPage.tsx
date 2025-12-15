
import "../estilos/SettingsPage.css";

interface SettingsPageProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  themeColor: string;
  setThemeColor: (color: string) => void;
}

function SettingsPage({ darkMode, toggleDarkMode, themeColor, setThemeColor }: SettingsPageProps) {
  return (
    <div className="settings-page">
      <h2>Configurações</h2>

      <div className="setting-item">
        <button onClick={toggleDarkMode}>
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>

      <div className="setting-item">
        <label>Cor do Tema:</label>
        <input 
          type="color" 
          value={themeColor} 
          onChange={(e) => setThemeColor(e.target.value)} 
        />
      </div>
    </div>
  );
}

export default SettingsPage;
