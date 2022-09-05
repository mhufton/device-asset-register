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
    .where(deviceId)
    .then((record) => record[0]);
}

function destroy(deviceId) {
  return knex("devices")
    .where(deviceId)
    .del();
}

module.exports = {
  list,
  create,
  read,
  destroy
}