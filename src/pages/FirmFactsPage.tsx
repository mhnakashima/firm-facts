import FirmFacts from "../components/organisms/FirmFacts/FirmFacts";
import { useSettings } from "../context/SettingsContext";

const FirmFactsPage = () => {
    const { theme, toggleTheme } = useSettings();

    return (
        <div className={`firm-facts-page ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <FirmFacts />
        </div>
    );
}

export default FirmFactsPage;