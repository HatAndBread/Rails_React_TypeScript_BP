import React from "react";
import { AppContext } from "./Context";
import Home from "./Pages/Home";

const App = ({ controllerData }: { controllerData: any }) => {
  console.log(controllerData);
  const getComponents = () => {
    // Render your components for each view here ✨😘
    switch (controllerData.controllerAction) {
      case "pages#home":
        return <Home />;
      default:
        return <></>;
    }
  };
  return (
    <AppContext.Provider value={{ controllerData }}>
      <div className='App'>{getComponents()}</div>
    </AppContext.Provider>
  );
};

export default App;
