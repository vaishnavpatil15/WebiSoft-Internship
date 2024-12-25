const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Hello from Express Server'
    })
})

module.exports = app