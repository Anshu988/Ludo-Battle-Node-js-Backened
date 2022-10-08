const multer=require("multer");
const express=require("express");
const router=express.Router();

const fileUpload=multer({
	
	storage:multer.diskStorage({
			destination:function(req,file,cb)
				{
					cb(null,"userProfile")		
				},
			filename:function(req,file,cb)
      
				{
          
				 cb(null,file.originalname)
				}
	})
}).single("userProfile");
 
const transactionfileUpload=multer({	
	storage:multer.diskStorage({
			destination:function(req,file,cb)
				{
					cb(null,"transaction")		
				},
			filename:function(req,file,cb)
				{
				 cb(null,file.originalname)
				}
	})
}).single("transactionProfile");


    const addUserPic=async(req,res)=>{
        try{
            console.log(req.file);
              if(!req.file){
                return res.json({"code":errorStatus.profilepicUpdateError,"sms":"something went wrong",status:0});
              }
             return res.json({"code":200,"status":1,"sms":'upload_pic Success',"data":req.file});
            
        }catch(err){
            console.log(err.message);
        }
    }
    router.post("/addUserPic",fileUpload,addUserPic);



    //transaction upload
    const transactionUpload=async (req, res)=> {
                if(!req.file){
                  return res.json({"code":errorStatus.profilepicUpdateError,"sms":"something went wrong",status:0});
                }
               return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":'upload_pic Success'});
           
         };

         router.post("/transactionUpload",transactionfileUpload,transactionUpload);
    module.exports=router