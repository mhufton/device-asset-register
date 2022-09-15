const service = require("./devices.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//
// middleware
//

async function deviceExists(req, res, next) {
  const device_id = req.params.deviceId;
  const data = await service.read(Number(device_id));
  console.log(`checking if device ${device_id} exists`)
  if (data) {
    console.log("device exists!")
    res.locals.device = data;
    return next();
  } else {
    return next({
      status: 400,
      message: `device_id ${device_id} could not be found`
    })
  }
}

//
// CRUDL
//

async function create(req, res) {
  let device = req.body.data;
  if (device.decommissionDate === "") {
    device = {
      ...device,
      decommissionDate: null
    }
  }
  console.log("device in create: ", device)
  const newDevice = await service.create(device);
  console.log("newDevices", newDevice)
  res.status(201).json({ data: newDevice })
}

async function list(req, res) {
  res.json({ data: await service.list() })
}

async function read(req, res) {
  const device = res.locals.device;
  console.log("device in read", device)
  res.json({ data: device })
}

async function update(req, res) {
  const { device } = res.locals;
  const data = req.body.data;
  let updatedDeviceData;
  if (device.decommissionDate !== null) {
    updatedDeviceData = { 
      ...device,
      ...data,
      dateBought: data.dateBought.slice(0, 10),
      decommissionDate: data.decommissionDate.slice(0, 10)
    }
  } else {
    updatedDeviceData = { 
      ...device,
      ...data,
      dateBought: data.dateBought.slice(0, 10),
      decommissionDate: null,
    }
  }
  console.log("date type of", typeof(data.decommissionDate))
  const updatedDevice = await service.update(updatedDeviceData);
  console.log("data", data, "device", device, "updatedDevice", updatedDevice)
  res.json({ data: updatedDevice })
}

async function destroy(req, res) {
  console.log(res.locals)
  const { device_id } = res.locals.device;
  const data = await service.destroy(device_id)
  res.status(204).json({ data })
}

module.exports = {
  list: asyncErrorBoundary(list),
  create: [
    asyncErrorBoundary(create)
  ],
  read: [
    deviceExists,
    asyncErrorBoundary(read)
  ],
  update: [
    deviceExists,
    asyncErrorBoundary(update)
  ],
  destroy: [
    deviceExists,
    asyncErrorBoundary(destroy)
  ]
}