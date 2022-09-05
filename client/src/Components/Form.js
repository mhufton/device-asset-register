import React from "react";

const operatingSystems = ["Mac", "Microsoft", "Mobile: Apple", "Mobile: Android", "Other"]
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

export default function Form() {
  const initialState = {
    assetTag: "",
    assignedTo: "",
    dateBought: "",
    deviceType: "",
    decommisionDate: "",
    operatingSystem: "",
  };
  const [formData, setFormData] = React.useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData: ", formData)
  }

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }
 
  return (
    <div>
      <form submit={handleSubmit} className="flex flex-row px-5">
        <label>
          Asset Tag:*
          <p className="text-xs">Format: Location-DeviceType-Num </p>
          <p className="text-xs">Ex: Edinburgh-iPhone-01</p>
          <input
            type="text"
            id="assetTag"
            name="assetTag"
            required
            placeholder="Enter asset tag"
            onChange={handleChange}
            value={formData.assetTag}
            className="border rounded px-1 mr-2"
          />
        </label>
        <label>
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
        <label>
          Date Bought:*
          <input
            type="text"
            id="dateBought"
            name="dateBought"
            required
            placeholder="dd-mm-yy"
            onChange={handleChange}
            value={formData.dateBought}
            className="border rounded px-1 mr-2"
          />
        </label>
        <label>
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
        <label>
          Decommission Date:
          <input
            type="text"
            id="decommisionDate"
            name="decommisionDate"
            placeholder="Enter decomission date"
            onChange={handleChange}
            value={formData.decommisionDate}
            className="border rounded px-1 mr-2"
          />
        </label>
        <label>
          Operating System:*
          <select
            value={formData.operatingSystem}
            onChange={handleChange}
            name="operatingSystem"
            className="border rounded px-1 mr-2">
            {mapOS()}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
