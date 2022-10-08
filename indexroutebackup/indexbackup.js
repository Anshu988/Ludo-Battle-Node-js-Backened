// usercreate start
//   static createUser=async(req,res)=>{
//     try{
//         // app.use(upload.array());
//         const {name,email,phone,password,confpassword}=req.body;
//        if(!name || !phone )//|| !email  ||!password || !confpassword)
//         {
//             return res.json({code:errorStatus.errorsuccess,"status":0,'sms':"All field Required."});
//         }
//         if(name.length<3){
//             return res.json({code:errorStatus.char,"status":0,'sms':"Name must be of 3char"});
//         }
//         if(phone.length!=10){
            
//             return res.json({code:errorStatus.phoneinvalid,"status":0,'sms':"Phone Invalid.."});
//         }
//         // if(password.length<6){
//         //     return res.json({code:201,"status":0,'sms':"Password Must be of 6char"});
//         // }

//         // if(password!=confpassword){
//         //     return res.json({code:201,"status":0,'sms':"password and confpassword must be same"});
//         // }
//         if(phone.length==10){
//             const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//             let result = phone.match(re);
//             if(result){
//                 //validate phone number
//                 const resdoc=await userModel.findOne({phone:phone}); 
//                 if(resdoc){

                    
//                     var digits = '0123456789987098799';
                    
                    
                   
//                     function generateOTP() {
      
//                         // Declare a digits variable 
//                         // which stores all digits
//                         var digits = '0123456789';
//                         let OTP = '';
//                         for (let i = 0; i < 4; i++ ) {
//                             OTP += digits[Math.floor(Math.random() * 10)];
//                         }
//                         return OTP;
//                     }
                      
                   
//                     //  var OTP=generateOTP();
//                      var OTP=1234;

//                     //refcode start
//                     var MyRefCode=Math.random().toString(36).substr(2, 8);
                   
//                     //CODE FOR MOBILE SEND OTP

//                     var options = {
//                         "method": "GET",
//                         "hostname": "2factor.in",
//                         "port": null,
//                         "path": `/API/V1/4d064bb2-17af-11ed-9c12-0200cd936042/SMS/${phone}/${OTP}/ABCDEF`,
//                         "headers": {
//                           "content-type": "application/x-www-form-urlencoded"
//                         }
//                       };
                      
//                       var req = http.request(options, function (res) {
//                         var chunks = [];
                      
//                         res.on("data", function (chunk) {
//                           chunks.push(chunk);
//                         });
                      
//                         res.on("end", function () {
//                           var body = Buffer.concat(chunks);
                          
//                         });
//                       }); 
                      
//                       req.write(qs.stringify({}));
//                       req.end();

//                     //  END MOBILE SEND OTP
                    
//                     const doc= {'name':name,MyRefCode:MyRefCode,otp:OTP}; 
                     
//                     const id = resdoc.id;
                   
//                     const update = await userModel.findByIdAndUpdate(id, doc,{new:true});
//                     const updatedoc=await userModel.findOne({phone:phone}); 
                    
//                    return res.json({code:errorStatus.errorsuccess,"status":1,'sms':"otp send success fully..",data:updatedoc});
//                 }else{
                   
//                     var digits = '0123456789987098799';
//                     var UserId = '';
//                     for (let i = 0; i < 6; i++ ) {
//                         UserId += digits[Math.floor(Math.random() * 10)];
//                     }
                     
                   
//                     function generateOTP() {
      
//                         // Declare a digits variable 
//                         // which stores all digits
//                         var digits = '0123456789';
//                         let OTP = '';
//                         for (let i = 0; i < 4; i++ ) {
//                             OTP += digits[Math.floor(Math.random() * 10)];
//                         }
//                         return OTP;
//                     }
                      
                   
//                     //  var OTP=generateOTP();
//                      var OTP=1234;

//                     //refcode start
//                     var MyRefCode=Math.random().toString(36).substr(2, 8);
                   
//                     //CODE FOR MOBILE SEND OTP

//                     var options = {
//                         "method": "GET",
//                         "hostname": "2factor.in",
//                         "port": null,
//                         "path": `/API/V1/4d064bb2-17af-11ed-9c12-0200cd936042/SMS/${phone}/${OTP}/ABCDEF`,
//                         "headers": {
//                           "content-type": "application/x-www-form-urlencoded"
//                         }
//                       };
                      
//                       var req = http.request(options, function (res) {
//                         var chunks = [];
                      
//                         res.on("data", function (chunk) {
//                           chunks.push(chunk);
//                         });
                      
//                         res.on("end", function () {
//                           var body = Buffer.concat(chunks);
                          
//                         });
//                       }); 
                        
//                       req.write(qs.stringify({}));
//                       req.end();

//                     //  END MOBILE SEND OTP
//                     // END VALIDATE OTP  
//                     var firstLetter = name.charAt(0)
//                     console.log(firstLetter);
//                     var firstLetterCap = firstLetter.toUpperCase()
                    
//                     var remainingLetters = name.slice(1)
                    
//                     var capitalizedWord = firstLetterCap + remainingLetters


//                    const doc=await new userModel({
//                        name:capitalizedWord,email,phone,password,UserId,otp:OTP,status:0,MyRefCode
//                     });
                    
//                     const result=new Object(req.body);
//                     result.UserId=UserId;
//                     const result1={data:doc};
                   
//                     const result2={"status":1,"code":errorStatus.errorsuccess,"sms":"Registration Pending Varify otp.",...result1}

//                     await doc.save();
                 
//                    return res.json(result2);

//                    // FINAL END
//                  }
//                    }else{
//                     res.status(201).send({code:errorStatus.emailinvalid,'sms':"Email Invalid..","status":0});
//                     }      

//                 //end validate phone number
//             }
//             else{
//               return res.json({"code":errorStatus.phoneinvalid,"sms":"phone Invalid","status":0});
             
//         }
        
//     }catch(err){
//         return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
//     }




// } 
//   //usercreate end


//   //varify registration with otp start
//            static registerotp=async(req,res)=>{
//             try{
//                 const {phone,otp}=req.body;
//                 if(!phone || !otp){
//                    return res.json({"code":errorStatus.allfieldrequired,"status":0,"sms":"All field Required"});
//                 }else{
//                    if(!phone || !otp){
//                        return res.json({"code":errorStatus.allfieldrequired,"status":0,"sms":"All field Required"});
//                      }
//                      if(phone.length!=10){
//                        return res.json({"code":errorStatus.phoneinvalid,"status":0,"sms":"Invalid Phone"});
//                      }
//                      if(otp.length!=4){
//                        return res.json({"code":errorStatus.InvalidOTP,"status":0,"sms":"Invalid OTP"});
//                      }else{
//                        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//                        let result = phone.match(re);
//                        if(result){
//                            const doc=await userModel.findOne({phone:phone});
//                            if(doc==null){
//                                return res.json({"code":errorStatus.PhoneNotRegistered,"status":0,"sms":"Phone Not Registered."});
//                            }else{
//                                if(otp==doc.otp){
//                                    if(doc.status==1){
//                                        return res.json({"code":errorStatus.AlreadyRegister,"status":1,"sms":"You Are Already Register You Can Login"});
//                                    }
//                                    const finaldoc= await userModel.findOneAndUpdate({phone:phone},{'$set':{'status':1}},{returnNewDocument:true});
                                  
//                                   const data2={"data":finaldoc};
//                                   const data1={"code":errorStatus.errorsuccess,"status":1,"sms":"Login Seccuss..",...data2}
//                                   return res.json(data1);
//                                }
//                                else{
//                                    return res.json({"code":errorStatus.InvalidOTP,"status":0,"sms":"Invalid otp"});
//                                }
//                            }
//                        }
//                      }
//                 }
                 
//                  }catch(err){
//                     return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
//                  }
//            }
//    //varify registration with otp end
        
   
// //generate otp at login time start
//             static loginforotp=async(req,res)=>{
//                 const {phone}=req.body;
//                 try{
//                     if(req.body.phone==undefined){
//                     return res.json({"code":errorStatus.allfieldrequired,"status":0,"sms":"mobile number required"});
                
//                     }else{
//                              //mobile number validation
                
                
//                      if(phone.length==10){
//                         const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//                         let result = phone.match(re);
//                                   if(result){
//                                        var resdoc=await userModel.findOne({phone:phone});
//                                        if(resdoc==null){
//                                         return res.json({code:errorStatus.PhoneNotRegistered,"status":0,'sms':"Phone Not Registered."})
//                                        }else{
//                                        //otp start
//                                        function generateOTP() {
                
//                                         // Declare a digits variable 
//                                         // which stores all digits
//                                         var digits = '0123456789';
//                                         let OTP = '';
//                                         for (let i = 0; i < 4; i++ ) {
//                                             OTP += digits[Math.floor(Math.random() * 10)];
//                                         }
//                                         return OTP;
//                                     }
                                      
                                   
//                                     //  var OTP=generateOTP();
//                                      var OTP=1234;
            
//                                              //CODE FOR MOBILE SEND OTP
            
//                                 var options = {
//                                     "method": "GET",
//                                     "hostname": "2factor.in",
//                                     "port": null,
//                                     "path": `/API/V1/4d064bb2-17af-11ed-9c12-0200cd936042/SMS/${phone}/${OTP}/ABCDEF`,
//                                     "headers": {
//                                       "content-type": "application/x-www-form-urlencoded"
//                                     }
//                                   };
                                  
//                                   var req = http.request(options, function (res) {
//                                     var chunks = [];
                                  
//                                     res.on("data", function (chunk) {
//                                       chunks.push(chunk);
//                                     });
                                  
//                                     res.on("end", function () {
//                                       var body = Buffer.concat(chunks);
                                      
//                                     });
//                                   });
                                  
//                                   req.write(qs.stringify({}));
//                                   req.end();
            
//                                 //  END MOBILE SEND OTP
            
//                                        //otp end
//                                         var resdoc=await userModel.findOneAndUpdate({phone:phone},{'$set':{'otp':OTP}});
//                                             //if user not send otp but number is authorized.
//                                               var data={otp:OTP};
//                                             //when wrong otp at login time
//                                              return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":"Varify otp",...data});
//                                         }
//                                     }
//                                 }else{
//                                     return res.json({"code":errorStatus.phoneinvalid,"status":0,"sms":"Invalid Mobile number."});
//                                 }
//                      //end mobile number validation.
//                     //    const doc=await userModel.findOne({phone:phone});
//                     //    console.log(doc);
//                     }
                      
                   
//                   }catch(err){
//                     return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
//                   }
//             }
// //generate otp at login time end

// //login with otp start
//           static loginwithotp=async(req,res)=>{
//             try{
//                 const {phone,otp}=req.body;
//                 console.log(req.body);
                 
//                if(!phone || !otp){
//                   return res.json({"code":errorStatus.allfieldrequired,"status":0,"sms":"All field required"});
//                }else{
        
//                   //phone validate start
//                 if(phone.length==10){
//                   const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
//                   let result = phone.match(re);
//                             if(result){
//                                  var resdoc=await userModel.findOne({phone:phone});
//                                  if(resdoc==null){
//                                   return res.json({code:errorStatus.PhoneNotRegistered,"status":0,'sms':"Phone Not Registered."})
//                                  }else{
//                                   if(otp==undefined || otp.length!=4){
//                                       //if user not send otp but number is authorized.
                                      
//                                       //when wrong otp at login time
//                                        return res.json({"code":errorStatus.InvalidOTP,"status":0,"sms":"Invalid otp"});
//                                   }
//                                   else{
//                                       //if user send otp then varify
//                                       if(otp==resdoc.otp && resdoc.status==1){
//                                           const newdata={data:resdoc};
//                                             return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":"Login Success",...newdata});
//                                       }else{
//                                           if(otp!=resdoc.otp){
//                                               return res.json({"code":errorStatus.InvalidOTP,"status":0,"sms":"Invalid OTP"});
//                                           }else{
//                                               const data1={"data":{}};
//                                               return res.json({"code":errorStatus.NotProperRegister,"status":0,"sms":"You have not proper Registered,otp varify panding..",...data1});
//                                           }
//                                       }
//                                   }
//                                     console.log(resdoc);
//                                  }
//                               }
//                        //generate otp
//                        function generateOTP() {
                        
//                           // Declare a digits variable 
//                           // which stores all digits
//                           var digits = '0123456789';
//                           let OTP = '';
//                           for (let i = 0; i < 4; i++ ) {
//                               OTP += digits[Math.floor(Math.random() * 10)];
//                           }
//                           return OTP;
//                       }
//                       //  var OTP=generateOTP();
//                        var OTP=1234;
//                           return res.json(resdoc);
//               }else{
//                   return res.json({code:errorStatus.phoneinvalid,"status":0,'sms':"Phone Invalid."});
//               }
        
//                }
//               }catch(err){
//                 return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
//               }
//           }
// //login with otp end

// //get amount start
//     static getamount=async(req,res)=>{
//         try{
//             const {UserId}=req.body;
//             if(!UserId){
//                return res.json({"code":errorStatus.UserIdRequired,"status":0,"sms":"UserId Must be required"});
//             }else{
//                const result=await userModel.findOne({UserId:UserId});
//               if(result==null){
//                const data={};
//                return res.json({"code":errorStatus.InvalidUserId,"status":0,"sms":"Invalid UserId",data});
//               }else{
//                const Amount=result.Amount;
//                const response={data:{"Amount":Amount}};
    
//                return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":"Success",...response});
//               }
//             }
//        }catch(err){
//         return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
//        }
//     }
// //get amount end
    
// //get user details start
//        static getuserdetails=async(req,res)=>{
//         try{
//             const {UserId}=req.body;
//             if(!UserId){
//                 return res.json({"code":errorStatus.UserIdRequired,"status":0,"sms":"UserId Must be required"});
//             }else{
//                 var info=await userModel.findOne({UserId:UserId});
//                 if(info==null){
//                     return res.json({"code":errorStatus.InvalidUserId,"status":0,"sms":"Invalid UserId"});
//                 }else{
                  
//                   const info1={
//                       name:info.name,
//                       phone:info.phone,
//                       UserId:info.UserId,
//                       Amount:info.Amount,
//                       Label:info.Label,
//                       TotalPlayedGame:info.TotalPlayedGame,
//                       TotalLose:info.TotalLose,
//                       TotalEarning:info.TotalEarning,
//                       CurrentBalance:info.CurrentBalance,
//                       TotalReferalTeam:info.TotalReferalTeam,
//                       TotalReferalIncome:info.TotalReferalIncome,
//                       MyRefCode:info.MyRefCode,
//                       otp:info.otp,
//                       avatarId:info.avatarId,
//                       active_status: 1,
//                   }
//                   const newdata={data:info1};
//                     return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":"Success",...newdata});
//                 }
//             }
           
            
//         }catch(err){
//             return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
//         }
//        }

// get user details end