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

// const handleDelete = ({ device_id }) => {
//   const controller = new AbortController();

//   try {
//     deleteDevice(device_id, controller.signal)
//     window.location.reload()
//   } catch (err) {
//     console.log(err)
//   }
// }

// const handleDelete = ({ device_id }) => {
//   console.log("device_id inside handleDelete", device_id, typeof(device_id))
//   const controller = new AbortController();
//   const confirmBox = window.confirm(`Are you sure you want to delete this device? This cannot be undone.`)
//   if (confirmBox === true) {
//     async function removeDevice() {
//       await deleteDevice(device_id, controller.signal)
//       window.location.reload()
//     }
//     removeDevice();

//     return () => AbortController.abort();
//   }
// }


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
    <table className="table-auto w-full">
      <thead>
        <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
          <tbody key={device.device_id}>
            <tr className="bg-white border-b">
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