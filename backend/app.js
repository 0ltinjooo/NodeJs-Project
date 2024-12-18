const express = require('express');
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);




app.listen(3002, ()=>{
    console.log("Server started on port 3002");
})