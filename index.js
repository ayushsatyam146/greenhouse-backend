const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Importing the routes
const authRoutes = require('./auth');
app.use('/api/user', authRoutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));