const dbConnect=require('./server')

const deleteData=async ()=>{
    let data=await dbConnect();
    let result=await data.deleteMany(
        {name:'demo5'}
    )
    console.log(result)
    if(result.acknowledged){
        console.log("Record deleted successfully")
    }
}

deleteData()