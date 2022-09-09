import React from "react";
import Form from "./Form";
import DeviceList from "./DeviceList"

export default function Home() {
  return (
    <div className="flex flex-col">
      <DeviceList />
      <Form />
    </div>
  )
}