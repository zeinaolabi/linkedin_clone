const express = require('express');
require('dotenv').config();
require('./config/db.config')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes)

// const usersRoutes = require('./routes/users.routes');
// app.use('/users', usersRoutes)

app.listen(process.env.PORT, (error)=>{
    if(error) throw error;
    console.log(`Server running on port ${process.env.PORT}`);
})