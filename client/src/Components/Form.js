import React from "react";

const operatingSystems = ["Mac", "Microsoft", "iPhone", "Android", "Apple", "Other"]
const mapOS = () => {
  return operatingSystems.map((os, index) => {
    return (
      <option
        key={index}
        value={os}
        name={os}
      >
        {os}
      </option>
    )
  })
}

export default function Form({ formData, handleChange, handleSubmit }) {
  return (
    <div className="flex justify-center font-Oswald font-bold">
      <form onSubmit={handleSubmit} className="flex flex-col p-5 mt-1 bg-gray-100 rounded-xl border-2 border-slate-300">
        {formData.device_id && <label>
          ID: {formData.device_id}
        </label>}
        <label className="flex flex-row justify-between mb-5 text-xl">
          Asset Tag:*
          <div className="px-4">
            <p className="text-xs">Format: Location-DeviceType-Num </p>
            <p className="text-xs">Ex: Edinburgh-iPhone-01</p>
          </div>
          <input
            type="text"
            id="assetTag"
            name="assetTag"
            required
            placeholder="Enter asset tag"
            onChange={handleChange}
            value={formData.assetTag}
            className="border rounded px-1 mr-2 justify-end"
          />
        </label>
        <label className="flex flex-row justify-between mb-5 text-xl">
          Assigned To:
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            placeholder="Enter assingee"
            onChange={handleChange}
            value={formData.assignedTo}
            className="border rounded px-1 mr-2"
          />
        </label>
        <label className="flex flex-row justify-between mb-5 text-xl">
          Date Bought:*
          <input
            type="text"
            id="dateBought"
            name="dateBought"
            required
            placeholder="yyyy-mm-dd"
            onChange={handleChange}
            value={formData.dateBought}
            className="border rounded px-1 mr-2 flex justify-end"
          />
        </label>
        <label className="flex flex-row justify-between mb-5 text-xl">
          Device Type:*
          <input
            type="text"
            id="deviceType"
            name="deviceType"
            required
            placeholder="Enter device type"
            onChange={handleChange}
            value={formData.deviceType}
            className="border rounded px-1 mr-2"
          />
        </label>
        <label className="flex flex-row justify-between mb-5 text-xl">
          Decommission Date:
          <input
            type="text"
            id="decommisionDate"
            name="decommisionDate"
            placeholder="yyyy-mm-dd"
            onChange={handleChange}
            value={formData.decommisionDate}
            className="border rounded px-1 mr-2"
          />
        </label>
        <label className="flex flex-row justify-between mb-5 text-xl">
          Operating System:*
          <select
            value={formData.operatingSystem}
            onChange={handleChange}
            name="operatingSystem"
            className="border rounded px-1 mr-2">
            {mapOS()}
          </select>
        </label>
        <button type="submit" className="bg-blue-400 w-20 rounded text-white py-1 flex justify-center">Submit</button>
      </form>
    </div>
  )
}
