const router = require('express').Router();
const User = require('./models/User');

router.post('/test', (req, res) => {
    res.send('registering user');
});

router.post('/register', async (req, res) => {
    const user = new User({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password : req.body.password,
        avatar : req.body.avatar
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(500).send(err);
    }
});


module.exports = router;