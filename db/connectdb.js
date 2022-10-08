
const mongoose=require("mongoose");

const connectdb=async(DATABASE_URL)=>{
    try{
  const DB_OPTIONS={
   dbname:'ludo'
  }
  await mongoose.connect(DATABASE_URL,DB_OPTIONS);
  console.log("connection done..");
  
    }catch(err){
        console.log(err);
    }
}

module.exports=connectdb;