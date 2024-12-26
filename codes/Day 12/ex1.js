const express = require("express")
const app = express()

app.get('/',function(req, res){
    res.send('Hello World!')
})

app.get('/calculate',function(req,res){
    const o=req.param('operation')
    const num1=req.param('num1')
    const num2=req.param('num2')
    switch(o){
        case 'add':
            res.send(`${Number(num1) + Number(num2)} `)
            break
        case 'sub':
            res.send(`${Number(num1) - Number(num2)} `)
            break
        case 'mul':
            res.send(`${Number(num1) * Number(num2)} `)
            break
        case 'div':
            res.send(`${Number(num1) / Number(num2)} `)
            break
        default:
            break
    }
    
    
})

app.listen(3000) 