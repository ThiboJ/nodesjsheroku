const router = require("express").Router();

module.exports = (server) => {
    //console.log("ensureBotsModel:",server.middlewares.ensureBotsModel);
    //console.log("ensureBodyFields:",server.middlewares.ensureBodyFields(["name","model"]));
    router.post( "/",
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureBodyFields(server.models.User.schema),
        server.actions.users.create
    );
    router.get("/",
        server.actions.users.list
    );
    router.get("/:id",
        server.actions.users.show
    );
    router.put("/:id",
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureAuthenticated,
        server.middlewares.clean("password","_id"),
        server.actions.users.update
    );
    router.delete("/:id",
        server.actions.users.remove
    );

    return router;
};
