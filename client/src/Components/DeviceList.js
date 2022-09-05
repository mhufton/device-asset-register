import React from "react";
import { listDevices } from "../utils/api";

function mapDevices(devices) {
  return devices.map((d, index) => {
    return <p key={index}>{d.assetTag}</p>
  })
}

export default function DeviceList() {
  const [devices, setDevices] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const controller = new AbortController();

    async function loadDevices() {
      try {
        const data = await listDevices(controller.signal)
        setDevices(data);
      } catch (error) {
        setError(error)
      }
    };

    loadDevices();
  }, [])

  return (
    <div>
      {devices ? mapDevices(devices) : <p>Loading...</p>}
    </div>
  )
}