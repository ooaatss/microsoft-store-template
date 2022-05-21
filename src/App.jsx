import React from "react";
import Theme from "./theme/Theme";
import GlobalStyles from "./styles/globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Navbar/>
      <Sidebar/>
    </Theme>
  );
};
export default App;