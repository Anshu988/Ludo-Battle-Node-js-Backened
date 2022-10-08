// const multer=require("multer");
// const fileUpload=multer({
	
// 	storage:multer.diskStorage({
// 			destination:function(req,file,cb)
// 				{
// 					cb(null,"userProfile")		
// 				},
// 			filename:function(req,file,cb)
      
// 				{
          
// 				 cb(null,file.originalname)
// 				}
// 	})
// }).single("userProfile");
 

// //transaction
// const transactionfileUpload=multer({	
// 	storage:multer.diskStorage({
// 			destination:function(req,file,cb)
// 				{
// 					cb(null,"transaction")		
// 				},
// 			filename:function(req,file,cb)
// 				{
// 				 cb(null,file.originalname)
// 				}
// 	})
// }).single("transactionProfile");

//  app.post('/addUserPic',fileUpload, function (req, res) {
// 	console.log(req.file);
// 	if(!req.file){
// 	  return res.json({"code":errorStatus.profilepicUpdateError,"sms":"something went wrong",status:0});
// 	}
//    return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":'upload_pic Success',"data":req.file});
  
//    });
// 	//transaction
   
//   app.post('/transactionUpload',transactionfileUpload, function (req, res) {
// 		  if(!req.file){
// 			return res.json({"code":errorStatus.profilepicUpdateError,"sms":"something went wrong",status:0});
// 		  }
// 		 return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":'upload_pic Success'});
	 
//    });
// //module.exports={fileUpload,transactionfileUpload};