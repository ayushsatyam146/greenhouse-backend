const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to DB
mongoose.connect(
    process.env.MONGODB_URI,
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