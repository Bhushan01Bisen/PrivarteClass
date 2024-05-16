const mongoose=require('mongoose')

const main=async ()=>{
    await mongoose.connect("mongodb://localhost:27017")
    const ProductSchema=await mongoose.Schema({
        name:String,
        brand:String,
        price:Number
    });
//     const ProductModel=mongoose.model('xyz',ProductSchema)
//     let data=new ProductModel({name:'test', brand:'demo', price:300000});
//     let result=await data.save();
//     console.log(result)
// }
// // main()


// const updateDB=async()=>{
//     const product=mongoose.model('xyz',ProductSchema);
//     let data=await product.updateOne(
//         {name:'test'},
//         {$set:{price:20}}
//     )
//     console.log(data)
// }
// updateDB()
// }
// main()


// const deleteDB =async ()=>{
//     const product=mongoose.model('xyz',ProductSchema)
//        let data=await product.deleteOne({brand:'demo'})
//        console.log(data);
// }
// deleteDB()

const findDB=async ()=>{
    const product=mongoose.model('xyz',ProductSchema)
    let data=await product.find()
    console.log(data);
}
findDB()
}
main()

