module.exports = (server) => {
    const User = server.models.User;

    return (req,res,next) => {
        let query = User.findById(req.params.id).populate('bots');

        query.exec((err,instance) => {
            if(err)
                return res.status(500).send(err);

            if(!instance)
                return res.status(404).send();

            res.send(instance);
        });
    }
};