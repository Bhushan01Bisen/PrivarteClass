const dbConnect=require('./server')

//  to add data into database  
const insert=async()=>{
    const db=await dbConnect();        //insertOne ({}) and for insertMany([{},{},....])  
    const result=await db.insertMany([
        {name:"demo2",
        brand:'testing',
        price:30000},
        {name:"demo3",
        brand:'testing',
        price:30000},
        {name:"demo4",
        brand:'testing',
        price:30000},
        {name:"demo5",
        brand:'testing',
        price:30000},
    ]
        
    )

    if(result.acknowledged){
        console.log("Data added successfully !")
    }
}

insert()