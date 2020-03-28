const routes = require("express").Router();
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.get("/ongs", OngController.index).post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(13)
        .max(14),
      city: Joi.string().required(),
      uf: Joi.string().length(2)
    })
  }),
  OngController.store
);

routes.post("/sessions", SessionController.store);

routes
  .get(
    "/incidents",
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    }),
    IncidentController.index
  )
  .post("/incidents", IncidentController.store)
  .delete(
    "/incidents/:id",
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    }),
    IncidentController.delete
  );

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

module.exports = routes;
