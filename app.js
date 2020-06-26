const express=require('express')
const app=express()


const result={}


app.get('/result',
(req ,res)=>
{
const coefficient=parseFloat(req.query.coefficient)   
var   height=    parseFloat(req.query.height)
const arr=[]
arr.push({bounce:0,height:height,time:0}) 
var i=1
while(coefficient*coefficient*height!=0)
{
 var heightnew=coefficient*coefficient*height
 arr.push({bounce:i,height:heightnew,time:Math.sqrt(2*height/9.8)+Math.sqrt(2*heightnew/9.8)})   
 height=heightnew
 i=i+1
}
res.json(arr)
}
)

app.listen(3000,()=>{console.log('connect')})