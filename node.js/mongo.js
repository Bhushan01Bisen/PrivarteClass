const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const dataBase='demo';
const client=new MongoClient(url);

async function main() {
    let result=await client.connect()
    let db=result.db(dataBase);
    // let collection=db.collection('products');
    // let response=collection.find({name:'demo'}).toArray()
    // console.log(response);
    return db.collection('xyz')




}
main().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})
console.log(main());

// 
// main().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })
// console.log(main());
// 