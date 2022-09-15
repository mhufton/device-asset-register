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
    operatingSystem: "Microsoft"
  };
  const [formData, setFormData] = React.useState(initialState)
  const [errors, setErrors] = React.useState(null)

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
        .catch((error) => setErrors(error))
      setFormData(initialState)
      // window.location.reload()
    } catch (error) {
      setErrors(error)
      console.log(error)
    }
  }

  return (
    <div className="font-Oswald font-bold my-5">
      {errors !== null ? Object.values(errors).map((e, i) => {
        return (
          <div key={i} className="text-red-500 text-xl font-bold text-center mb-3">
            {e}
          </div>
          )
        })
        : null
      }
      <Form
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        setErrors={setErrors}
        errors={errors}
      />
    </div>
  )
}