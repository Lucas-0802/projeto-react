import { createContext, useCallback, useState, useContext } from "react";

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptionsProps[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptionsProps[]) => void;
}

interface IAppThemeProvider {
  children: React.ReactNode
}

interface IDrawerOptionsProps {
  path: string;
  icon: string;
  label: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext)
}

export const DrawerProvider: React.FC<IAppThemeProvider> = ({children}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptionsProps[]>([])

    const toggleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, [])

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptionsProps[]) => {
      setDrawerOptions(newDrawerOptions)
  }, [])

  return (
    <DrawerContext.Provider value={{  isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawerOptions }}>
        {children}
    </DrawerContext.Provider>
  );
};
