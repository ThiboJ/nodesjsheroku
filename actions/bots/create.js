module.exports = (server) => {
    const Bot = server.models.Bot;
    const User = server.models.User;

    return (req,res) => {
        let bot =  new Bot(req.body);
        bot.save((err,instance) => {
            if(err)
                return res.status(500).send(err);

            User.findById(req.userId,(err,user) =>{
                if(err)
                    return res.status(500).send(err);

                bot.user = req.userId;
                user.bots.push(instance._id);
                user.save((err,user) => {
                    if(err)
                        return res.status(500).send(err);

                    res.status(201).send();
                });
            });

        });
    }
};