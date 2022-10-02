const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        message:'Helloo world!!!'
    })
})
app.get('/hi',(req,res)=>{
    res.json({
        message:'Hii there!!!'
    })
})
app.listen(3002)