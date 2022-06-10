const router = require('express').Router();
const User = require('./models/User');
const {registerValidation, loginValidation} = require('./validation');

router.post('/register', async (req, res) => {

    const { error } = registerValidation(req.body);  
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        avatar : req.body.avatar
    });
    try{
        const savedUser = await user.save();
        res.send({user: user});
    }catch(err){
        res.status(500).send(err);
    }
});


module.exports = router;