express = require("express");
require("dotenv").config();
require("./config/db.config");
const app = express();
app.use(express.json());

app.listen(process.env.PORT, (error)=>{
    if(error) throw error;
    console.log(`server running on port ${process.env.PORT}`);
})
