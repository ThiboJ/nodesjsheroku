module.exports = (server) => {
    const Weapon = server.models.Weapon;
    const Bot = server.models.Bot;

    return (req, res) => {
        Weapon.findByIdAndRemove(req.params.id, (err, data) => {
            if (err) {
                return res.status(500).send(err);
            }

            if (!data) {
                return res.status(404).send();
            }

            if(!instance.bot)
                return res.status(204).send();


            Bot.findById(weapon.bot, (err, bot) => {
                bot.weapons.remove(weapon._id);
                bot.slots++;
                bot.save((err, data) => {
                    if(err)
                        return res.status(500).send(err);

                    return res.status(204).send();
                });
            })
        });
    }
};
