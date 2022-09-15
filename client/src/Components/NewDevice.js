import React from "react";
import Form from "./Form"
import { createDevice } from "../utils/api"

export default function NewDevice() {
  const initialState = {
    assetTag: "",
    assignedTo: "",
    dateBought: "",
    deviceType: "",
    decommissionDate: "",
    operatingSystem: "",
  };
  const [formData, setFormData] = React.useState(initialState)

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData: ", formData)
    try {
      createDevice(formData)
      setFormData(initialState)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="font-Oswald font-bold my-5">
      <Form
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}