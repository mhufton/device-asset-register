const service = require("./devices.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//
// middleware functions
//

// const VALID_PROPERTIES_POST = [
//   "device_id",
//   "assetTag",
//   "assignedTo",
//   "dateBought",
//   "deviceType",
//   "operatingSystem",
// ]

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
// CRUDL functions
//

async function create(req, res) {
  let device = req.body.data;
  if (device.decommisionDate === "") {
    device = {
      ...req.body.data,
      decommisionDate: null
    }
  }
  console.log("device: ", device)
  const newDevice = await service.create(device);
  console.log("newDevice", newDevice)
  res.status(201).json({ data: newDevice })
}

async function list(req, res) {
  res.json({ data: await service.list() })
}

async function read(req, res) {
  const device = res.locals.device;
  res.json({ data: device })
}

async function update(req, res) {
  const { device } = res.locals;
  const data = req.body.data;
  const updatedDeviceData = {
    ...device,
    ...data,
  }
  const updatedDevice = await service.update(updatedDeviceData);
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