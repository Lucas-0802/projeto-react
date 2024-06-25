import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes/Rotas.tsx";
import { AppThemeProvider } from "./shared/contexts/ThemeContext.tsx";
import MenuLateral from "./shared/components/menu-lateral/MenuLateral.tsx";
import { DrawerProvider } from "./shared/contexts/DrawerContext.tsx";

function App() {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <Rotas />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
}

export default App;
