module.exports = (server) => {
    server.middlewares = {
        bodyParser:require("body-parser"),
        ensureBotsModel: require("./ensureBotsModel"),
        ensureWeaponsModel: require("./ensureWeaponsModel"),
        ensureBodyFields: require("./ensureBodyFields"),
        ensureAuthenticated: require("./ensureAuthenticated")(server),
        clean:require("./clean")
    }
};