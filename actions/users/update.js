module.exports = (server) => {
    const User = server.models.User;

    return (req,res,next) => {

        User.findByIdAndUpdate(req.userId,req.body)
            .then(respond)
            .catch(error);

        function respond() {
            res.status(204).send()
        }

        function error(reason) {
            if (reason.code)
                return res.status(reason.code).send(reason.message);

            return res.status(500).send(reason);
        }
    }
};