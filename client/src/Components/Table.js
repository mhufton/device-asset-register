import React from "react";

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
        </tr>
      </thead>
      {devices && devices.map((device, index) => {
        return (
          <tbody>
            <tr key={device.device_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td>{device.device_id}</td>
              <td>{device.assetTag}</td>
              <td>{device.assignedTo}</td>
              <td>{device.deviceType}</td>
              <td>{device.operatingSystem}</td>
              <td>{device.dateBought && device.dateBought.slice(0, 10)}</td>
              <td>{device.decommisionDate && device.decommisionDate.slice(0, 10)}</td>
              <td><button><span>&#9998;</span></button></td>
            </tr>
          </tbody>
        )
      })}
    </table>
  )
}