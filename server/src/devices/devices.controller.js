const service = require("./devices.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//
// middleware functions
//

const VALID_PROPERTIES_POST = [
  "device_id",
  "assetTag",
  "assignedTo",
  "dateBought",
  "deviceType",
  "operatingSystem",
]

async function deviceExists(req, res, next) {
  const device_id = req.params.deviceId;
  const data = await service.read(device_id);
  if (data) {
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
  console.log(req.body.data)
  const device = await service.create(req.body.data);
  res.status(201).json({ data: device })
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
  console.log("device", device)
  const data = req.body.data;
  console.log("data", data)
  const updatedDeviceData = {
    ...device,
    ...data,
  }
  console.log("updatedDeviceData", updatedDeviceData)
  const updatedDevice = await service.update(updatedDeviceData);
  console.log("updatedDevice", updatedDevice)
  res.json({ data: updatedDevice })
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
  ]
}