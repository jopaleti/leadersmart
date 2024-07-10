import { createContext, useState } from "react";

// Define the type for the context value
interface MyContextType {
  value: boolean;
  setValue: (value: boolean) => void;
}
export const MyContext = createContext<MyContextType | undefined>(undefined);

function ContextProvider(props: {children: any}) {
    const [value, setValue] = useState<boolean>(false);
  return (
    <MyContext.Provider value={{ value, setValue }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default ContextProvider;
