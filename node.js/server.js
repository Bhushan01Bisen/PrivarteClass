const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const dataBase='demo';
const client=new MongoClient(url);

async function dbConnect() {
   let result=await client.connect() ;
   db=result.db(dataBase)
   return db.collection('xyz')

}
dbConnect()
module.exports=dbConnect;