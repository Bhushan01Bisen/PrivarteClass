const express=require('express');
const dbConnect=require('./server')
const mongodb=require ('mongodb')
const app=express();

app.use(express.json())

app.get ('/',async(req,res)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    res.send(data)
    // console.log(data);
  
});
// app.post('/',async(req,res)=>{
//     let data=await dbConnect();
//     let result = await data.insert(req.body)
//     // console.log(req.body);
//     // res.send({name:'POST'})
//     res.send(result)
// })
// app.put('/',async(req,res)=>{
//     let data =await dbConnect();
//     let result = data.updateOne({
//         name:'node'
//     },
//     {
//         $set:{price:1}
//     }
//     )
//     res.send({result:"update"})
// })

app.put('/:name',async(req,resp)=>{
    let data =await dbConnect();
    let result = data.updateOne({
        name:req.params.name
    },
    {
        $set:{price:1}
    }
    )
    resp.send({result:"update"})
})

app.delete("/:id",async(req,res)=>{
    console.log(req.params.id);
    const data=await dbConnect();
    const result=data.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)})
    res.send("done")
})


app.listen(5000)
