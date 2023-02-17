import React, { useEffect, useState } from "react";
import ToogleMode from "./ToogleMode";

const Darkmode = () => {
  const [theme, setTheme] = useState("light-theme");
  const toogleTheme = () => {
    theme == "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div>
      <a onClick={toogleTheme} href="/" className="btn">
        Toggle
      </a>
    </div>
  );
};

export default Darkmode;
