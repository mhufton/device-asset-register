import React from "react";
import Form from './Form'
import { useParams } from "react-router-dom";
import { readDevice, createDevice } from "../utils/api"

export default function EditDevice() {
  const initialState = {
    assetTag: "",
    assignedTo: "",
    dateBought: null,
    deviceType: "",
    decommisionDate: null,
    operatingSystem: "",
  };
  const [formData, setFormData] = React.useState(initialState)

  const params = useParams();
  const device_id = Number(params.device_id);
  console.log(formData)

  React.useEffect(() => {
    const controller = new AbortController();

    if (device_id) {
      async function loadDevice() {
        try {
          const loadedDevice = await readDevice(device_id, controller.signal)
          console.log(loadedDevice)
          setFormData(loadedDevice)
        } catch (err) {
          console.log(err)
        }
      }
      loadDevice();
    }
    return () => controller.abort();
  }, [device_id])

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
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h1 className="text-center">Edit Device Info</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}