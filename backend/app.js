const express = require('express');

const app = express();

app.get("/", (req, res) => {
    console.log("nothing here");
})


app.listen(3002, ()=>{
    console.log("Server started on port 3002");
})