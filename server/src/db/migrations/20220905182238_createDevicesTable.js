exports.up = function(knex) {
  return knex.schema.createTable('devices', (table) => {
    table.increments("device_id").primary().notNullable();;
    table.string("assetTag").notNullable();;
    table.string("assignedTo");
    table.date("dateBought").notNullable();;
    table.date("decommissionDate");
    table.string("deviceType").notNullable();;
    table.string("operatingSystem").notNullable();;
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("devices");
};
