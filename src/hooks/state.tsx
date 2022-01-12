import React, { createContext, useState,  useContext } from "react";


interface Equipament{
  id:string;
  cod:string;
  name:string;
}
interface CurrentCompany {
  id: string;
  name: string;
  contact: string;
  email: string;
  equipaments: Equipament[];
}
interface StateContextData {
  currentCompany: CurrentCompany | null;
  loading: boolean;
  setCompany(company:CurrentCompany): void;
}

const StateContext = createContext<StateContextData>({} as StateContextData);

const StateProvider: React.FC = ({ children }) => {
  const [currentCompany, setCurrentCompany] = useState<CurrentCompany | null>(null);
  const [loading, setLoading] = useState(false);

  function setCompany(company:CurrentCompany){
    setCurrentCompany(company);
  }

  return (
    <StateContext.Provider
      value={{ currentCompany, loading, setCompany }}
    >
      {children}
    </StateContext.Provider>
  );
};

function useCurrent() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useCurrent must be used within an AuthProvider.");
  }

  return context;
}

export { StateProvider, useCurrent };
