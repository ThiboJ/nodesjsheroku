module.exports = (server) => {
    const Weapon = server.models.Weapon;

    return (req,res,next) => {
        Weapon.update({ _id : req.params.id },{ name : req.body.name,damage : req.body.damage} , (err) => {
            if(err)
                return res.status(500).send(err);
            
            res.status(204).send();
        });
    }
};