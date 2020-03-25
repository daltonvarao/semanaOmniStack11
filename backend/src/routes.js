const routes = require("express").Router();

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.get("/ongs", OngController.index).post("/ongs", OngController.store);

routes.post("/sessions", SessionController.store);

routes
  .get("/incidents", IncidentController.index)
  .post("/incidents", IncidentController.store)
  .delete("/incidents/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
