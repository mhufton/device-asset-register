const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

// const headers = new Headers();
const headers = {
  'Content-Type':'application/json',
  'Access-Control-Allow-Origin': "https://device-asset-register-client.herokuapp.com/"
}

 /**
  * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
  *
  * This function is NOT exported because it is not needed outside of this file.
  *
  * @param url
  *  the url for the requst.
  * @param options
  *  any options for fetch
  * @param onCancel
  *  value to return if fetch call is aborted. Default value is undefined.
  * @returns {Promise<Error|any>}
  *  a promise that resolves to the `json` data or an error.
  *  If the response is not in the 200 - 399 range the promise is rejected.
  */
  async function fetchJson(url, options, onCancel) {
    try {
      const response = await fetch(url, options);
  
      if (response.status === 204) {
        return null;
      }
  
      const payload = await response.json();
      if (payload.error) {
        return Promise.reject({ message: payload.error });
      }
      return payload.data;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error.stack);
        throw error;
      }
      return Promise.resolve(onCancel);
    }
}
  
export async function listDevices(signal) {
  const url = `${API_BASE_URL}/`;
  return await fetchJson(url, { signal });
}

export async function createDevice(device, signal) {
  const url = `${API_BASE_URL}/`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: device }),
    signal
  }
  return await fetchJson(url, options, {})
}

export async function readDevice(device_id, signal) {
  const url = `${API_BASE_URL}/${device_id}`;
  return await fetchJson(url, { signal })
}

export async function updateDevice(updatedDevice, signal) {
  const url = `${API_BASE_URL}/${updatedDevice.device_id}`;
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify({
      data: updatedDevice
    }),
    signal
  }
  return await fetchJson(url, options, {})
}

export async function deleteDevice(device_id, signal) {
  console.log("inside delete api", device_id, typeof(device_id))
  const url = `${API_BASE_URL}/${device_id}`
  const options = {
    method: "DELETE",
    headers,
    signal
  }
  return await fetchJson(url, options, {})
}