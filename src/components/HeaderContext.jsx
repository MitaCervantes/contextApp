import '../App.css';
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import AuthContext from "../context/AuthContext";

const HeaderContext = () => {

  const { theme, handleTheme } = useContext(ThemeContext);
  const {texts, handleLanguage} = useContext(LanguageContext);
  const {auth, handleAuth} = useContext(AuthContext);
  
  return (
    <>
    <nav className={`navbar navbar-expand-lg ${theme}`}>
    <div className="navbar-collapse">
      <div className="navbar-nav w-100 d-flex justify-content-between align-items-center">
        <div className="nav-left">
          <h2>{texts.headerTitle}</h2>
        </div>       
        <div className="nav-right d-flex align-items-center">
          <select name="language" onChange={handleLanguage}>
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
          <input
            type="radio"
            name="theme"
            id="light-context"
            onClick={handleTheme}
            value="light"
          />
          <label htmlFor="light-context">{texts.headerLight}</label>
          <input
            type="radio"
            name="theme"
            id="dark-context"
            onClick={handleTheme}
            value="dark"
          />
          <label htmlFor="dark-context">{texts.headerDark}</label>
          <button onClick={handleAuth}>
            {auth ? texts.buttonLogout : texts.buttonLogin}
          </button>
        </div>
      </div>
    </div>
  </nav>  
</>
  );
};

export default HeaderContext;