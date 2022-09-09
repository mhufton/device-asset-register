import React from "react";
import NewDevice from "./NewDevice"
import DeviceList from "./DeviceList"

export default function Home() {
  return (
    <div className="flex flex-col">
      <DeviceList />
      <NewDevice />
    </div>
  )
}