const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DB
mongoose.connect(
    'mongodb://localhost:27017/greenhouse',
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log('Connection Error: ', err);
        } else {
            console.log(`DB Connected Successfully`);
        }
    }
)

//Importing the routes
const authRoutes = require('./auth');
app.use('/api/user', authRoutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));