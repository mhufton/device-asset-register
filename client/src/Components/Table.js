import React from "react";
import { useNavigate } from "react-router-dom"
import { deleteDevice } from "../utils/api";

const EditButton = ({ device_id }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <button onClick={() => navigate(`/${device_id}`)}>
        <span>&#9998;</span>
      </button>
    </>
  )
}

const DeleteButton = ({ device_id }) => {

  const handleDelete = () => {
    const controller = new AbortController();
    const confirmBox = window.confirm(`Are you sure you want to delete this device? This cannot be undone.`)
    if (confirmBox === true) {
      async function removeDevice() {
        await deleteDevice(device_id, controller.signal)
        window.location.reload()
      }
      removeDevice();
  
      return () => AbortController.abort();
    }
  }

  return (
    <>
      <button onClick={() => handleDelete(device_id)}>
        <span>&#10006;</span>
      </button>
    </>
  )
}

export default function Table({ devices }) {
  return (
    <table className="border rounded text-s table-auto w-full font-Oswald font-bold">
      <thead className="">
        <tr className="text-left text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <th>Device ID</th>
          <th>Asset Tag</th>
          <th>Assigned To</th>
          <th>Device Type</th>
          <th>Operating System</th>
          <th>Date Bought</th>
          <th>Decommission Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      {devices && devices.map((device, index) => {
        return (
          <tbody key={device.device_id} className="">
            <tr className="bg-white text-left">
              <td>{device.device_id}</td>
              <td>{device.assetTag}</td>
              <td>{device.assignedTo}</td>
              <td>{device.deviceType}</td>
              <td>{device.operatingSystem}</td>
              <td>{device.dateBought && device.dateBought.slice(0, 10)}</td>
              <td>{device.decommisionDate && device.decommisionDate.slice(0, 10)}</td>
              <td><EditButton device_id={device.device_id}/></td>
              <td><DeleteButton device_id={device.device_id}/></td>
            </tr>
          </tbody>
        )
      })}
    </table>
  )
}