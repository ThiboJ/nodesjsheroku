const router = require("express").Router();

module.exports = (server) => {
    //console.log("ensureBotsModel:",server.middlewares.ensureBotsModel);
    //console.log("ensureBodyFields:",server.middlewares.ensureBodyFields(["name","model"]));
    router.post( "/",
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureBodyFields(server.models.Bot.schema),
        server.middlewares.ensureAuthenticated,
        server.actions.bots.create
    );
    router.get("/",
        server.actions.bots.list
    );
    router.get("/:id",
        server.actions.bots.show
    );
    router.put("/:id",
        server.middlewares.bodyParser.json(),
        server.actions.bots.update
    );
    router.delete("/:id",
        server.actions.bots.remove
    );
    router.post("/:id/assign/:weaponId",
        server.actions.bots.assign
    );
    router.post("/:id/drop/:weaponId",
        server.actions.bots.drop
    );

    return router;
};
