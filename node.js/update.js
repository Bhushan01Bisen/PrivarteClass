const dbConnect=require('./server')

const updateData= async ()=>{
    let data = await dbConnect()
    let result = await data.updateMany(
        // { name: "demo1" }, { $set:{ name: "node",price:10 }}  //this is  for update one
        { name: "demo4" }, { $set:{ name: "node",price:10 }}  //this is  for update many
        
        
        )


        console.log(result)
}
updateData()