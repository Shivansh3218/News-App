import React from "react";
import { createContext } from "react";
import { useState } from "react";
let ThemeContext = createContext()

function ContextTheme({children}) {
  const [theme, setTheme] = useState({ dark:{
    color: "white",
    backgroundColor: "black",
  },
  light:{
    color: "black",
    backgroundColor:"white"
  }
});

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}

export {ContextTheme, ThemeContext};
