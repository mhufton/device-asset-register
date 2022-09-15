import * as React from 'react';
import { listDevices } from "../utils/api";
import Table from "./Table";

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

    return () => controller.abort();
  }, [])

  return (
    <div className="mx-3 border rounded-xl mt-3">
      {devices ?
        <Table devices={devices}/>
        : <p>Loading...</p>}
    </div>
  )
}