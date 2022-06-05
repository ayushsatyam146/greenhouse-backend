const router = require('express').Router();

router.post('/register', (req, res) => {
    res.send('registering user');
});

router.get('/register', async (req, res) => {
    res.send(await JSON.stringify(await req.db.collection('users').find({}).toArray()));
});

module.exports = router;