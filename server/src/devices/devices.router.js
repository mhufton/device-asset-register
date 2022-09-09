const router = require("express").Router();
const controller = require("./devices.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route('/')
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

router
  .route('/:deviceId')
  .get(controller.read)
  .put(controller.update)
  .all(methodNotAllowed)

module.exports = router;