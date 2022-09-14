import React from "react";
import Form from './Form'
import { useParams, useNavigate } from "react-router-dom";
import { readDevice, updateDevice } from "../utils/api"

export default function EditDevice() {
  const initialState = {
    assetTag: "",
    assignedTo: "",
    dateBought: "",
    deviceType: "",
    decommisionDate: "",
    operatingSystem: "",
  };
  const [formData, setFormData] = React.useState(initialState)
  console.log(formData)

  const navigate = useNavigate();
  const params = useParams();
  const device_id = params.device_id;

  // load the device info we wish to edit
  React.useEffect(() => {
    const controller = new AbortController();

    if (device_id) {
      async function loadDevice() {
        try {
          const loadedDevice = await readDevice(device_id)
          // format the loaded device date to trim the date 
          const formattedDevice = {
            ...loadedDevice,
            dateBought: loadedDevice.dateBought.slice(0, 10),
            decommisionDate: loadedDevice.decommisionDate.slice(0, 10),
          }
          setFormData(formattedDevice)
        } catch (err) {
          console.log(err)
        }
      }
      loadDevice();
    }

    return () => controller.abort();
  }, [])

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      updateDevice(formData)
       .then(() => navigate("/"))
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