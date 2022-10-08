var multer  = require('multer')
const express=require("express");
const app=express();

var upload=multer({
	
	storage:multer.diskStorage({
			destination:function(req,file,cb)
				{
					cb(null,"../uploads")		
				},
			filename:function(req,file,cb)
				{
				 cb(null,file.originalname+".png")
				}
	})
}).single("userProfile");
  console.log("before");
app.post('/addUserPic',upload, function (req, res) {
    console.log("hiii");
    // First read existing users.
      console.log("Requested data : %s ", req.body["file"])
       res.end( "this is end of file");
   
 })
 

 

module.exports=upload;
