/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('devices', (table) => {
    table.increments("device_id").primary();
    table.string("assetTag");
    table.string("assignedTo");
    table.date("dateBought");
    table.date("decommisionDate");
    table.string("deviceType");
    table.string("operatingSystem");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("devices");
};
