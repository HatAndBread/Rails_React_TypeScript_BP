import React from "react";
import TestsIndex from "./Pages/Tests/Index";
import TestsNew from "./Pages/Tests/New";
import { AppContext } from "./Context";

const App = ({ controllerData }: { controllerData: any }) => {
  const getComponents = () => {
    // Render your components for each view here ✨
    switch (controllerData.controllerAction) {
      case "tests#index":
        return <TestsIndex />;
      case "tests#new":
        return <TestsNew />;
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
