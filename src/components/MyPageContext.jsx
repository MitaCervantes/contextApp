import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";
import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { AuthProvider } from "../context/AuthContext";



const MyPageContext = () => {
 

  return (
    <>
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider>
          <HeaderContext />
          <hr/>
          <MainContext />
          <hr/>
          <FooterContext />
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
    </>
  );
};

export default MyPageContext;
