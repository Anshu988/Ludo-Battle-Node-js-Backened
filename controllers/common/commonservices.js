const {betdeductionModel}=require("../../model/user.js");
const service=async(method)=>{
    try{ 
       const doc=await method.find();
       return doc.length;
       
    }catch(err){
        console.log(err.message);
    }
};

module.exports=service;