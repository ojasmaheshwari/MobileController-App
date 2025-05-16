import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

type selectedMethodContextType = {
  selectedMethod: string;
  setSelectedMethod: Dispatch<SetStateAction<string>>;
};

export const selectedMethodContext = createContext<
  selectedMethodContextType | undefined
>(undefined);

export const SelectedMethodProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedMethod, setSelectedMethod] = useState("bluetooth");

  return (
    <selectedMethodContext.Provider
      value={{ selectedMethod, setSelectedMethod }}
    >
      {children}
    </selectedMethodContext.Provider>
  );
};

export const useSelectedMethod = () => {
  const context = useContext(selectedMethodContext);
  if (!context) {
    throw new Error("useSelectedMethod cannot be used without provider");
  }
  return context;
};
