const devices = require("./devicesSeed.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE devices RESTART IDENTITY CASCADE")
    .then(function() {
      return knex("devices").insert(devices);
    });
};