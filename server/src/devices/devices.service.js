const knex = require("../db/connection");

function list() {
  return knex("devices")
    .select("*")
    .orderBy("device_id");
}

function create(device) {
  return knex("devices")
    .insert(device)
    .returning("*")
    .then((record) => record[0])
}

function read(deviceId) {
  return knex("devices")
    .select("*")
    .where({ device_id: Number(deviceId) })
    .then((record) => record[0]);
}

function readByTag(assetTag) {
  return knex("devices")
    .select("*")
    .where({ assetTag: assetTag })
    .then((record) => record[0]);
}

function update(updatedDevice) {
  return knex("devices")
    .select("*")
    .where({ device_id: updatedDevice.device_id })
    .update(updatedDevice, "*")
    .then((record) => {record[0]})
}

function destroy(deviceId) {
  return knex("devices")
    .where({ device_id: deviceId })
    .del();
}

module.exports = {
  list,
  create,
  read,
  readByTag,
  update,
  destroy
}