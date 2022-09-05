const { PORT = 5000 } = process.env;

const app = require("./app");
const knex = require("./db/connection");
const { list } = require("./devices/devices.controller");

// knex.migrate.latest()
//   .then((migrations) => {
//     console.log("migrations", migrations);
//     app.listen(PORT, listener);
//   })
//   .catch((error) => {
//     console.error(error);
//     knex.destroy();
//   });
app.listen(PORT, listener)

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}