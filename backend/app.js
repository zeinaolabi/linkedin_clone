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

const jobsRoutes = require('./routes/jobs.routes');
app.use('/jobs', jobsRoutes)

const usersRoutes = require('./routes/user.routes');
app.use('/user', usersRoutes)

app.listen(process.env.PORT, (error)=>{
    if(error) throw error;
    console.log(`Server running on port ${process.env.PORT}`);
})