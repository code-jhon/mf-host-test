import React, { Suspense } from "react";
const RemoteWidget = React.lazy(() => import("microfrontendA/Widget"));
//import AngularWidget from "widget/WidgetComponent";
//const AngularWidget = React.lazy(() => import("widget/WidgetComponent"));

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Host Application</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render the remote component */}
        <RemoteWidget 
          title="Remote Widget"
          onAction={() => console.log("Action clicked!")}
        />
      </Suspense>
      {/* <Suspense fallback={<div>Cargando...</div>}>
        <AngularWidget />
      </Suspense> */}
    </div>
  );
};

export default App;