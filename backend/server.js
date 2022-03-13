const express = require('express');
const dotenv = require('dotenv')


const app = express();

app.get('/',(req,res)=>{
    res.send("api is runnig ");
})


const PORT =  5000
app.listen(PORT,console.log(`server started on post ${PORT}`));

i 