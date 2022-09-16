import React from "react";

const operatingSystems = ["Microsoft", "Android", "Apple", "Linux"]
const listOfNames = ["Mike", "Hannah", "Emily", "Bill"]
function mapSelectBox(array) {
  if (array) {
    return array.map((item, index) => {
      return (
        <option
          key={item}
          value={item}
          name={item}
        >
          {item}
        </option>
      )
    })
  }
  return null
}



export default function Form({
    device_id,
    formData,
    handleChange,
    handleSubmit
  }) {
  return (
    <div className="flex justify-center font-Oswald font-bold">
      <form onSubmit={handleSubmit} className="flex flex-col px-3 py-2 mt-1 bg-gray-100 rounded-xl border-2 border">
        {device_id 
        ? <h1 className="text-2xl text-center border-b pb-1">Edit Device Information</h1> 
        : <h1 className="text-2xl text-center border-b pb-1">Create A New Device</h1>}       
        <div className="py-4">
          {formData.device_id && 
          <div className="flex justify-between text-xl">
            <h3>ID:</h3>
            <h3 className="pr-3">{device_id}</h3>
          </div>
          }
        </div>
        <div>
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
          {/* <label className="flex flex-row justify-between mb-5 text-xl">
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
          </label> */}
          <label className="flex flex-row justify-between mb-5 text-xl">
            Assigned To:
            <select
              type="text"
              id="assignedTo"
              name="assignedTo"
              placeholder="Enter assingee"
              onChange={handleChange}
              value={formData.assignedTo}
              className="border rounded px-1 mr-2 w-[177px]">
              <option value="" className="text-left">Not Assigned</option>
              {mapSelectBox(listOfNames)}
            </select>
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
              id="decommissionDate"
              name="decommissionDate"
              placeholder="yyyy-mm-dd"
              onChange={handleChange}
              value={formData.decommissionDate}
              className="border rounded px-1 mr-2"
            />
          </label>
          <label className="flex flex-row justify-between mb-5 text-xl">
            Operating System:*
            <select
              value={formData.operatingSystem}
              onChange={handleChange}
              name="operatingSystem"
              required
              className="border rounded px-1 mr-2 w-[177px]">
              <option disabled className="text-left">-- Choose OS --</option>
              {mapSelectBox(operatingSystems)}
            </select>
          </label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-400 w-20 rounded text-white py-1 justify-center">Submit</button>
        </div>
      </form>
    </div>
  )
}
