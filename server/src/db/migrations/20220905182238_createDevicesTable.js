/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('devices', (table) => {
    table.increments("device_id").primary().notNullable();;
    table.string("assetTag").notNullable();;
    table.string("assignedTo");
    table.date("dateBought").notNullable();;
    table.date("decommisionDate");
    table.string("deviceType").notNullable();;
    table.string("operatingSystem").notNullable();;
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("devices");
};
