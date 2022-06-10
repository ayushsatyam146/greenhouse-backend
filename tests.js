const router = require('express').Router();
const User = require('./models/User');
const verify = require('./verifyToken');

router.get('/', verify, async (req, res) => {
    res.json({
        tests : {
            title : 'My first test',
            description : 'This is my first test'
        }
    })
});

module.exports = router;