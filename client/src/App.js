import React from "react";
import Form from "./Components/Form";
import DeviceList from "./Components/DeviceList"

function App() {
  return (
    <div className="flex flex-col">
      <Form />
      <DeviceList />
    </div>
  );
}

export default App;
