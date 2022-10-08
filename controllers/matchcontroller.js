const {matchModel}=require("../model/user.js");
const {historyModel}=require("../model/user.js");
const {gameModeModel}=require("../model/user.js");
const {betdeductionModel}=require("../model/user.js");
const {counterModel}=require("../model/user.js");
const service=require("./common/commonservices.js");
const {userModel}=require("../model/user.js");
const {transactionModel}=require("../model/user.js");
const {coinModel}=require("../model/user.js");
const {transactionOffilneModel}=require("../model/user.js");
const {TransOfflineWithdrowRequestModel}=require("../model/user.js");

var  config_list_all ={};
var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
console.log(__dirname+"/public/userprofile");
const errorStatus=require('../errorStatus');
const { query, json } = require("express");
const { stringify } = require("querystring");
app.use(upload.array()); 
//profile upload start

//profile upload end
class matchcontroller{
      //start index 

                     
             
//usercreate start
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
          



      //end index
   static updateUser=async(req,res)=>{
    try{
        
        const {UserId,name,AvatarId}=req.body;
            if(!UserId || !name || !AvatarId){
                return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
            }else{
                const doc=await userModel.findOneAndUpdate({"UserId":UserId},{"$set":{"name":name,"avatarId":avatarId}},{new:true});
               if(doc==null){
                return res.json({"code":errorStatus.InvalidUserId,"sms":'Invalid UserId',"status":0});
               }else{
                return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":"Success","data":doc})
               }
                return res.json({data:doc});
            }
    }catch(err){
        return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
    }
   }


    static matchStart=async(req,res)=>{
        try{
              const {
                room_id,       
                player_count,
                UserId,
                game_mode,
                bet_amount,
                bet_id
                
            }=req.body;
                if(!room_id || !player_count || !UserId || !game_mode || !bet_amount|| !bet_id){
                    return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
                }else{
                    const timestamp = Date.now();
                   var Unique= Math.random().toString(26).slice(2)
                    const doc=new matchModel({
                        roomId:room_id,       
                        playerCount:player_count,
                        game_mode,
                        bet_amount,
                        bet_id:bet_id,
                        rank_available:player_count,
                        left_available:player_count,
                        active_status:1,
                        Unique_id:Unique,
                        timestamp
                    });

                     await doc.save();
                     const userId1=UserId.split(',');
                    if(player_count== (userId1.length-1)){
                    for (let i = 0; i < userId1.length; i++) {
                        
                              const history=new historyModel({
                                roomId:room_id,
                                UserId:userId1[i],
                                bet_status:1,
                                rank:0,
                                win_amount:0,
                                type :'',
                                Unique_id:Unique,
                                timestamp
                              })
                             if(userId1[i]){
                              await history.save();
                              const user_details= await userModel.findOne({UserId : userId1[i]});
                              const TotalPlayedGame=parseInt(user_details.TotalPlayedGame)+parseInt(1);
                              const CurrentBalance=parseFloat(user_details.CurrentBalance)-parseFloat(bet_amount)
                              await userModel.findOneAndUpdate({UserId : userId1[i]},{"$set":{"TotalPlayedGame":TotalPlayedGame,"CurrentBalance":CurrentBalance}},{new:true});
                             }
                              
                               
                             
                        }

                        return res.json({"code":errorStatus.errorsuccess,"sms":'Game start successfully',"status":1});  
                    }else{
                        return res.json({"code":errorStatus.GamePlayernotComplete,"sms":'Game Player not complete',"status":1});

                    }


                      
                       
                } 
            
            
            }catch(err){
                return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
            }
    };


    //get last user
    static getlastroomId=async(req,res)=>{
        try{
              const {
                UserId        
            }=req.body;
                if(!UserId){
                    return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
                }else{
                       const lastuser=await historyModel.findOne({UserId:UserId});
                       return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":'Success',data:lastuser});
                        
                  
                    }

            }catch(err){
                return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
            }
    }

    static matchStartStatusUpdate=async(req,res)=>{
        try{
              var {
                room_id,       
                UserId,
                type,
                
            }=req.body;
                if(!room_id  || !UserId ){
                    return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
                }else{
                    const timestamp = Date.now();
                    var room_details=await matchModel.findOne({roomId:room_id});
                     const bet_deduction=await betdeductionModel.findOne({bet_id:room_details.bet_id});
                     const rank_obj=bet_deduction.rank_winning_amount;
                     
                    if(type=='1'){
                       var rank_available_current=room_details.rank_available-1;
                       var rank=(room_details.playerCount-room_details.rank_available)+1;
                       var rank_amount=rank_obj[rank];
                       var win_amount=rank_amount;
                       var type_status=type;
                      
                    }else{
                       var rank_available_current=room_details.rank_available;
                       var rank=0;
                       var win_amount=0;
                       var type_status='left';
                    } 
                
                    // rank update
                    const update_match_start={rank_available:rank_available_current};
                    const update_match_histroy={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                    await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start,{new:true});

                 //winning amount update
                const user_details= await userModel.findOne({UserId : UserId});
                const CurrentBalance=parseFloat(user_details.CurrentBalance)+parseFloat(win_amount);
                const TotalEarning=parseFloat(user_details.TotalEarning)+parseFloat(win_amount);
                const TotalLose=parseFloat(user_details.TotalLose);
                if(rank==0){
                   var total_game_lose= TotalLose+1;
                }else{
                    var total_game_lose= TotalLose+0;
                }


                   await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance,TotalEarning:TotalEarning,TotalLose:total_game_lose}},{new:true});

                    await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy,{new:true});

                   
                      const game_count= await historyModel.find({roomId:room_id,bet_status:2});
                      
                    if(type==0){
                      if(parseInt(room_details.playerCount)-parseInt(game_count.length)==1){
                      
                        var user_id_find= await historyModel.findOne({roomId:room_id,bet_status:1});

                           var UserId=user_id_find.UserId;
                            var rank_available_current=room_details.rank_available-1;
                            
                            var rank=(room_details.playerCount-room_details.rank_available)+1;
                            console.log(rank);
                            var rank_amount=rank_obj[rank];
                            var win_amount=rank_amount;
                            var type_status=1;
                            
                         
                     
                         // rank update
                      var update_match_start_win1={rank_available:rank_available_current};
                      console.log('rank'+ win_amount);
                         const update_match_histroy_win={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                        await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start_win1,{new:true});
                          //winning amount update
                            var user_details_win= await userModel.findOne({UserId : UserId});
                            var CurrentBalance_win=parseFloat(user_details_win.CurrentBalance)+parseFloat(win_amount);
                            var TotalEarning_win=parseFloat(user_details_win.TotalEarning)+parseFloat(win_amount);
                            var TotalLose_win=parseFloat(user_details_win.TotalLose);
                            if(rank==0){
                            var total_game_lose= TotalLose_win+1;
                            }else{
                                var total_game_lose= TotalLose_win+0;
                            }


                            await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance_win,TotalEarning:TotalEarning_win,TotalLose:total_game_lose}},{new:true});

                                await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy_win,{new:true});



                            console.log('winner');


                      }
                    }
                    if(type==1){
                        if(parseInt(room_details.playerCount)-parseInt(game_count.length)==1){
                            var room_details=await matchModel.findOne({roomId:room_id});
                          var user_id_find= await historyModel.findOne({roomId:room_id,bet_status:1});
  
                             var UserId=user_id_find.UserId;
                              var rank_available_current=room_details.rank_available-1;
                              
                              var rank=(room_details.playerCount-room_details.rank_available)+1;
                              console.log(rank);
                              var rank_amount=rank_obj[rank];
                              var win_amount=rank_amount;
                              var type_status=1;
                              
                           
                       
                           // rank update
                            var update_match_start_win1={rank_available:rank_available_current};
                            console.log('rank'+ win_amount);
                            var update_match_histroy_win={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                            await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start_win1,{new:true});
                            //winning amount update
                              var user_details_win= await userModel.findOne({UserId : UserId});
                              var CurrentBalance_win=parseFloat(user_details_win.CurrentBalance)+parseFloat(win_amount);
                              var TotalEarning_win=parseFloat(user_details_win.TotalEarning)+parseFloat(win_amount);
                              var TotalLose_win=parseFloat(user_details_win.TotalLose);
                              if(rank==0){
                              var total_game_lose= TotalLose_win+1;
                              }else{
                                  var total_game_lose= TotalLose_win+0;
                              }
  
  
                              await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance_win,TotalEarning:TotalEarning_win,TotalLose:total_game_lose}},{new:true});
  
                                  await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy_win,{new:true});

                              console.log('loose');

                        }
                      }                    
                      const game_count1= await historyModel.find({roomId:room_id,bet_status:2});
    
                      if(game_count1.length==room_details.playerCount){
                        var game_status_count=1;
                      }else{
                        var game_status_count=0;
                      }

                      const userlists= await historyModel.find({roomId:room_id})
                    
                      const objects = {};
                        for(let i=0;i<Object.keys(userlists).length;i++){
                          objects[(userlists)[i].UserId]={
                               "UserId":(userlists)[i].UserId,
                               "timestamp":(userlists)[i].timestamp,
                               "rank":(userlists)[i].rank,
                               "win_amount":(userlists)[i].win_amount,
                               "type":(userlists)[i].type,
                               "room_id":(userlists)[i].roomId,
                           }  
                        }                
                      const room = {
                        room_id: room_details.roomId,
                        playerCount: room_details.playerCount,
                        game_mode:room_details.game_mode ,
                        bet_amount:room_details.bet_amount ,
                        timestamp: room_details.timestamp,
                        game_status: game_status_count
                      }
                      
                      const objectsData = {
                        userlists: objects
                      }
                      
                      const user = { ...room, ...objectsData } 
                    // console.log(data_details);
                    // }
                    return res.json({"code":errorStatus.errorsuccess,"sms":'Winner declered successfully',"status":1,data:user});
                       
                } 
            
            
            }catch(err){
                return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
            }
    };


    static LivematchStartStatusUpdate=async(req,res)=>{
        
        try{
              var {
                room_id,       
                UserId,
                type,
                timeout,
                totalHitPoint ,
                totalPotToken,
                totalpoint
               
            }=req.body;

            // var totalpoint=totalpoint.split(" ")[0];
            
            var x=JSON.parse(totalpoint);
            //const arr = Object.values(x);
            
            if(timeout==0){
                
                if(!room_id  || !UserId ){
                    return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
                }else{
                    const timestamp = Date.now();
                    var room_details=await matchModel.findOne({roomId:room_id});
                     var bet_deduction=await betdeductionModel.findOne({bet_id:room_details.bet_id});
                     var rank_obj=bet_deduction.rank_winning_amount;
                    
                    if(type=='1'){
                       var rank_available_current=room_details.rank_available-1;
                       var rank=(room_details.playerCount-room_details.rank_available)+1;
                       
                       var rank_amount=rank_obj[rank];
                      
                       var win_amount=rank_amount;
                       var type_status=type;
                      
                    }else{
                       var rank_available_current=room_details.rank_available;
                       var rank=0;
                       var win_amount=0;
                       var type_status='left';
                    } 
                
                    // rank update
                    const update_match_start={rank_available:rank_available_current};
                    const update_match_histroy={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                   await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start,{new:true});

                //winning amount update
                const user_details= await userModel.findOne({UserId : UserId});
                const CurrentBalance=parseFloat(user_details.CurrentBalance)+parseFloat(win_amount);
                const TotalEarning=parseFloat(user_details.TotalEarning)+parseFloat(win_amount);
                const TotalLose=parseFloat(user_details.TotalLose);
                if(rank==0){
                   var total_game_lose= TotalLose+1;
                }else{
                    var total_game_lose= TotalLose+0;
                }


                 await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance,TotalEarning:TotalEarning,TotalLose:total_game_lose}},{new:true});

                 await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy,{new:true});
                   
                const game_count= await historyModel.find({roomId:room_id,bet_status:2});
                     
                    if(type==0){
                      if(parseInt(room_details.playerCount)-parseInt(game_count.length)==1){
                      
                        var user_id_find= await historyModel.findOne({roomId:room_id,bet_status:1});

                           var UserId=user_id_find.UserId;
                            var rank_available_current=room_details.rank_available-1;
                            
                            var rank=(room_details.playerCount-room_details.rank_available)+1;
                           
                            var rank_amount=rank_obj[rank];
                            var win_amount=rank_amount;
                            var type_status=1;
                            
                         
                     
                         // rank update
                      var update_match_start_win1={rank_available:rank_available_current};
                      console.log('rank'+ win_amount);
                         const update_match_histroy_win={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                        await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start_win1,{new:true});
                          //winning amount update
                            var user_details_win= await userModel.findOne({UserId : UserId});
                            var CurrentBalance_win=parseFloat(user_details_win.CurrentBalance)+parseFloat(win_amount);
                            var TotalEarning_win=parseFloat(user_details_win.TotalEarning)+parseFloat(win_amount);
                            var TotalLose_win=parseFloat(user_details_win.TotalLose);
                            if(rank==0){
                            var total_game_lose= TotalLose_win+1;
                            }else{
                                var total_game_lose= TotalLose_win+0;
                            }


                            await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance_win,TotalEarning:TotalEarning_win,TotalLose:total_game_lose}},{new:true});

                                await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy_win,{new:true});



                            console.log('winner');


                      }
                    }
                    if(type==1){
                        if(parseInt(room_details.playerCount)-parseInt(game_count.length)==1){
                            var room_details=await matchModel.findOne({roomId:room_id});
                          var user_id_find= await historyModel.findOne({roomId:room_id,bet_status:1});
  
                             var UserId=user_id_find.UserId;
                              var rank_available_current=room_details.rank_available-1;
                              
                              var rank=(room_details.playerCount-room_details.rank_available)+1;
                              console.log(rank);
                              var rank_amount=rank_obj[rank];
                              var win_amount=rank_amount;
                              var type_status=1;
                              
                           
                       
                           // rank update
                            var update_match_start_win1={rank_available:rank_available_current};
                            console.log('rank'+ win_amount);
                            var update_match_histroy_win={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                            await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start_win1,{new:true});
                            //winning amount update
                              var user_details_win= await userModel.findOne({UserId : UserId});
                              var CurrentBalance_win=parseFloat(user_details_win.CurrentBalance)+parseFloat(win_amount);
                              var TotalEarning_win=parseFloat(user_details_win.TotalEarning)+parseFloat(win_amount);
                              var TotalLose_win=parseFloat(user_details_win.TotalLose);
                              if(rank==0){
                              var total_game_lose= TotalLose_win+1;
                              }else{
                                  var total_game_lose= TotalLose_win+0;
                              }
  
  
                              await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance_win,TotalEarning:TotalEarning_win,TotalLose:total_game_lose}},{new:true});
  
                                  await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy_win,{new:true});

                              console.log('loose');

                        }
                      }                    
                const game_count1= await historyModel.find({roomId:room_id,bet_status:2});
    
                if(game_count1.length==room_details.playerCount){
                        var game_status_count=1;
                      }else{
                        var game_status_count=0;
                      }

                      const userlists= await historyModel.find({roomId:room_id})
                    
                      const objects = {};
                     for(let i=0;i<Object.keys(userlists).length;i++){
                          objects[(userlists)[i].UserId]={
                               "UserId":(userlists)[i].UserId,
                               "timestamp":(userlists)[i].timestamp,
                               "rank":(userlists)[i].rank,
                               "win_amount":(userlists)[i].win_amount,
                               "type":(userlists)[i].type,
                               "room_id":(userlists)[i].roomId,
                           }  
                        }                
                      const room = {
                        room_id: room_details.roomId,
                        playerCount: room_details.playerCount,
                        game_mode:room_details.game_mode ,
                        bet_amount:room_details.bet_amount ,
                        timestamp: room_details.timestamp,
                        game_status: game_status_count
                      }
                      
                     const objectsData = {
                        userlists: objects
                      }
                      
                     const user = { ...room, ...objectsData } 
                     // console.log(data_details);
                    // }
                    return res.json({"code":errorStatus.errorsuccess,"sms":'Winner declered successfully',"status":1,data:user});
                       
                } 
            }
            else if(timeout==1){
                
              
                if(!room_id  || !UserId ){
                    return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
                }else{
                    //left user at playing time
                    //UserId
                    const currentUserId = Object.keys(x);
                    console.log(currentUserId);
                    //end userid
                    const currentUserAmount = currentUserId.map(key => {
                        return x[key];
                      });
                      console.log(currentUserAmount);
                    
                    //end user left at playing time
                    const timestamp = Date.now();
                    var room_details=await matchModel.findOne({roomId:room_id});
                     var bet_deduction=await betdeductionModel.findOne({bet_id:room_details.bet_id});
                     var rank_obj=bet_deduction.rank_winning_amount;
                    console.log(rank_obj);
                    if(type=='1'){
                       var rank_available_current=room_details.rank_available-1;
                       var rank=(room_details.playerCount-room_details.rank_available)+1;
                       
                       var rank_amount=rank_obj[rank];
                       console.log(rank_amount);
                       var win_amount=rank_amount;
                       var type_status=type;
                      
                    }else{
                       var rank_available_current=room_details.rank_available;
                       var rank=0;
                       var win_amount=0;
                       var type_status='left';
                    } 
                
                    // rank update
                    const update_match_start={rank_available:rank_available_current};
                    const update_match_histroy={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                   await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start,{new:true});

                //winning amount update
                const user_details= await userModel.findOne({UserId : UserId});
                const CurrentBalance=parseFloat(user_details.CurrentBalance)+parseFloat(win_amount);
                const TotalEarning=parseFloat(user_details.TotalEarning)+parseFloat(win_amount);
                const TotalLose=parseFloat(user_details.TotalLose);
                if(rank==0){
                   var total_game_lose= TotalLose+1;
                }else{
                    var total_game_lose= TotalLose+0;
                }


                 await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance,TotalEarning:TotalEarning,TotalLose:total_game_lose}},{new:true});

                 await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy,{new:true});
                   
                const game_count= await historyModel.find({roomId:room_id,bet_status:2});
                      console.log(game_count);
                    if(type==0){
                      if(parseInt(room_details.playerCount)-parseInt(game_count.length)==1){
                      
                        var user_id_find= await historyModel.findOne({roomId:room_id,bet_status:1});

                           var UserId=user_id_find.UserId;
                            var rank_available_current=room_details.rank_available-1;
                            
                            var rank=(room_details.playerCount-room_details.rank_available)+1;
                            console.log(rank);
                            var rank_amount=rank_obj[rank];
                            var win_amount=rank_amount;
                            var type_status=1;
                            
                         
                     
                         // rank update
                      var update_match_start_win1={rank_available:rank_available_current};
                      console.log('rank'+ win_amount);
                         const update_match_histroy_win={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                        await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start_win1,{new:true});
                          //winning amount update
                            var user_details_win= await userModel.findOne({UserId : UserId});
                            var CurrentBalance_win=parseFloat(user_details_win.CurrentBalance)+parseFloat(win_amount);
                            var TotalEarning_win=parseFloat(user_details_win.TotalEarning)+parseFloat(win_amount);
                            var TotalLose_win=parseFloat(user_details_win.TotalLose);
                            if(rank==0){
                            var total_game_lose= TotalLose_win+1;
                            }else{
                                var total_game_lose= TotalLose_win+0;
                            }


                            await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance_win,TotalEarning:TotalEarning_win,TotalLose:total_game_lose}},{new:true});

                                await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy_win,{new:true});



                            console.log('winner');


                      }
                    }
                    if(type==1){
                        if(parseInt(room_details.playerCount)-parseInt(game_count.length)==1){
                            var room_details=await matchModel.findOne({roomId:room_id});
                          var user_id_find= await historyModel.findOne({roomId:room_id,bet_status:1});
                      
                             var UserId=user_id_find.UserId;
                              var rank_available_current=room_details.rank_available-1;
                              
                              var rank=(room_details.playerCount-room_details.rank_available)+1;
                             
                              var rank_amount=rank_obj[rank];
                              var win_amount=rank_amount;
                              var type_status=1;
                              
                           
                       
                           // rank update
                            var update_match_start_win1={rank_available:rank_available_current};
                            
                            var update_match_histroy_win={rank:rank,win_amount:win_amount,type:type_status,'bet_status':2};
                            await matchModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_start_win1,{new:true});
                            //winning amount update
                              var user_details_win= await userModel.findOne({UserId : UserId});
                              var CurrentBalance_win=parseFloat(user_details_win.CurrentBalance)+parseFloat(win_amount);
                              var TotalEarning_win=parseFloat(user_details_win.TotalEarning)+parseFloat(win_amount);
                              var TotalLose_win=parseFloat(user_details_win.TotalLose);
                              if(rank==0){
                              var total_game_lose= TotalLose_win+1;
                              }else{
                                  var total_game_lose= TotalLose_win+0;
                              }
  
  
                              await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":CurrentBalance_win,TotalEarning:TotalEarning_win,TotalLose:total_game_lose}},{new:true});
  
                                  await historyModel.findOneAndUpdate({UserId:UserId,roomId:room_id},update_match_histroy_win,{new:true});

                              console.log('loose');

                        }
                      }                    
                const game_count1= await historyModel.find({roomId:room_id,bet_status:2});
    
                if(game_count1.length==room_details.playerCount){
                        var game_status_count=1;
                      }else{
                        var game_status_count=0;
                      }

                      const userlists= await historyModel.find({roomId:room_id})
                    
                      const objects = {};
                     for(let i=0;i<Object.keys(userlists).length;i++){
                          objects[(userlists)[i].UserId]={
                               "UserId":(userlists)[i].UserId,
                               "timestamp":(userlists)[i].timestamp,
                               "rank":(userlists)[i].rank,
                               "win_amount":(userlists)[i].win_amount,
                               "type":(userlists)[i].type,
                               "room_id":(userlists)[i].roomId,
                           }  
                        }                
                      const room = {
                        room_id: room_details.roomId,
                        playerCount: room_details.playerCount,
                        game_mode:room_details.game_mode ,
                        bet_amount:room_details.bet_amount ,
                        timestamp: room_details.timestamp,
                        game_status:0
                      }
                      
                     const objectsData = {
                        userlists: objects
                      }
                      
                     const user = { ...room, ...objectsData } 
                     // console.log(data_details);
                    // }
                    return res.json({"code":errorStatus.errorsuccess,"sms":'Winner declered successfully',"status":1,data:user});
                       
                } 
            

                    
            }
            
            }catch(err){
                return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
            }
    };






    //reader board

    static LeaderBoard=async(req,res)=>{
        try{
            const {UserId,type,start_Index,end_Index,to_date,from_date,fresh}=req.body;
            
           if(!UserId || !to_date || !from_date){
            return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
           }else{
                  //daley
                var alluser= await userModel.find();
                var currentuser= await userModel.findOne({UserId:UserId});

                //upercaseName
                
                const newUser={
                    Rank:3,
                    name:(currentuser.name).charAt(0).toUpperCase() + (currentuser.name).slice(1),
                    UserId:currentuser.UserId,
                    avatar_id:currentuser.avatarId,
                    TotalEarning:currentuser.TotalEarning,
                    CurrentBalance:currentuser.CurrentBalance,
                }
                let milliseconds =JSON.stringify(new Date().valueOf());
                var preDate = (new Date(from_date.split("/").reverse().join("/"))).getTime();
                var preDateStap= JSON.stringify(preDate);
                var currentDate = (new Date(to_date.split("/").reverse().join("/"))).getTime();
                   var currentDateStap= JSON.stringify(currentDate+86400000);
                
                const join_data=await historyModel.aggregate([ 
                    {
                    $match: {
                    timestamp :{$gte:preDateStap,$lte:currentDateStap},
                    bet_status:2
                   
                    }
                  },      
                  {
                      $group: {
                      _id: "$UserId",
                      win_amount: { $sum: "$win_amount" },
                      UserId : { $first: '$UserId' },
                      } 
                  } ,
                    {$sort: {win_amount:-1}},
                    // {$skip :parseInt(start_Index)},
                    // {$limit:parseInt(end_Index)}
                ]);
                console.log(join_data);
                 var obj = {};
                 for(let i=0;i<join_data.length;i++){
                     const doc=await userModel.findOne({UserId:join_data[i]._id});                    
                       
                    (obj[i])={
                        Rank:i+1,
                        UserId:join_data[i]._id,
                        avatar_id:doc.avatarId,
                        name:(doc.name).charAt(0).toUpperCase() + (doc.name).slice(1),
                        TotalEarning:join_data[i].win_amount,
                    } 
                    
                 }
                 const rank_list=obj;
                

                var objects1={};
                
                var AllUser= alluser.map((element,x) => {
                    
                   return { 
                        Rank:x+1,
                        name:(element.name).charAt(0).toUpperCase() + (element.name).slice(1),
                        UserId:element.UserId,
                        avatar_id:element.avatarId,
                        TotalEarning:element.TotalEarning,
                        CurrentBalance:element.CurrentBalance,
                    }
    
    
                });
               
                    var history= await userModel.find().sort({TotalEarning:-1}).limit(3).exec((err,user)=>{
    
                       if(err){
                        console.log(err);
                       }else{
                     var updateuser= user.map((element,x) => {
                        return {
                            Rank:x+1,
                            name:(element.name).charAt(0).toUpperCase() + (element.name).slice(1),UserId:element.UserId,
                            avatar_id:element.avatarId,
                            TotalEarning:element.TotalEarning,
                            CurrentBalance:element.CurrentBalance,    
                        }; 
                     });
                     var newuser={'type':type,'end_Index':(parseInt(start_Index)+parseInt(join_data.length)),'to_date':to_date,'from_date':from_date,"type":type,"fresh":parseInt(fresh),"alluser":rank_list,"top3_user":{...updateuser},"currentuser":newUser};
                     
                      return res.json({"code":errorStatus.errorsuccess,"sms":"success","status":1,data:newuser});
                        
                       }
                    });
           }    
        }catch(err){
            return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
        }
    };

    static Bet_List_create=async(req,res)=>{
        try{
            const timestamp = Date.now();
            const {title,status,player_type,code}=req.body;
            const doc=await gameModeModel({
                title,status,player_type,code,timestamp:timestamp
            });
            await doc.save();
            return res.json({"code":200,"sms":"success","status":1,data:doc});
        }catch(err){
            return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
        }
    }
    static Bet_deduction_create=async(req,res)=>{
        try{
            const timestamp = Date.now();
            const {bet_code,status,amount,code,rank,rank_winning_amount}=req.body;
            const rank1=rank.split(',');
            const rank_win_amount=rank_winning_amount.split(',');
            var arr = [];
            var obj = {};
            for (let i = 0; i < rank1.length; i++) {     
                 (obj[[rank1[i]]])= parseFloat(rank_win_amount[i]) 
                }

                
                let count=await service(betdeductionModel);
                const doc=await betdeductionModel({
                    bet_code,status,amount,rank_winning_amount:obj,timestamp:timestamp,
                    unique_id:count+1
                });
                await doc.save();
            return res.json({"code":200,"sms":"success","status":1 });
        }catch(err){
            return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
        }
    }
     static config_list_all=async(req,res)=>{
        // console.log(config_list_all);
        if(Object.keys(config_list_all).length === 0){
           try{
            const doc=await gameModeModel.find({'status':"1"},{"_id":0,"title":1,"status":1,"player_type":1,"code":1,"timestamp":1});
            var objects={}
             for(let i=0;i<doc.length;i++){
                var docbetduction=await betdeductionModel.find({'status':"1",'bet_code':doc[i].code});
                var deductionobj={}
                //console.log(docbetduction);
                for(let x=0;x<docbetduction.length;x++){
                  deductionobj[docbetduction[x].unique_id]={
                            "status":docbetduction[x].status,
                            "amount":docbetduction[x].amount,
                            "rank_winning_amount":{...docbetduction[x].rank_winning_amount}
                    }
                }
                // console.log(docbetduction);

                objects[(doc)[i].title]={... deductionobj}
             }

             //Credit coin List
             const credit_list=await coinModel.find({'status':"1",'type':1});
             var credit_listobj={}
             for(let x=0;x<credit_list.length;x++){
                
                credit_listobj[credit_list[x].unique_id]={
                        "status":credit_list[x].status,
                        "coin":credit_list[x].coin,
                        "online_prize":credit_list[x].online_prize,
                        "offline_prize":credit_list[x].offline_prize,
                }
            }

            //Debit Coin list

            const debit_list=await coinModel.find({'status':"1",'type':2});
             var debit_listobj={}
             for(let x=0;x<debit_list.length;x++){
                debit_listobj[debit_list[x].unique_id]={
                        "status":debit_list[x].status,
                        "coin":debit_list[x].coin,
                        "online_prize":debit_list[x].online_prize,
                        "offline_prize":debit_list[x].offline_prize,
                }
            }
             objects['Credit_CoinList']={...credit_listobj};
             objects['Debit_CoinList']={...debit_listobj}; 
             config_list_all= objects
            return res.json({"code":errorStatus.errorsuccess,"sms":'succes',"data":config_list_all,"status":1});
     }catch(err){
        return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
     }
    }else{
        return res.json({"code":errorStatus.errorsuccess,"sms":'succes1',"status":1,"data":config_list_all});
    }
}

static TransactionSave=async(req,res)=>{
    try{
           const timestamp = Date.now();
           console.log(timestamp);
           const {UserId,transaction_id,status,Amount,coin_id}=req.body;
           if(!UserId || !transaction_id  || !Amount || !coin_id){
            return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
           }else{
            const doc=await userModel.findOne({UserId : UserId});
            if(doc==null){
                return res.json({"code":errorStatus.InvalidUserId,"sms":'Invalid UserId',"status":0}); 
            }else{
                 
            const credit_list=await coinModel.find({'status':1,'unique_id':coin_id});
            console.log(credit_list);
            var coin_amount=credit_list[0].online_prize;
            var coin=credit_list[0].coin;


            const updateAmount=parseInt(doc.CurrentBalance)+parseInt(coin);
            const updatedoc=await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":updateAmount}},{new:true});
            const newdoc=new transactionModel({
                UserId,transaction_id,status:1,Amount,coin_id,coin,mode_type:"online",trans_mode:1,msg_code:4
            });
            await newdoc.save();
            const newdata={
                UserId:updatedoc.UserId,CurrentBalance:updatedoc.CurrentBalance
            }
            return res.json({"code":errorStatus.errorsuccess,"sms":'succes',"status":1,"data":newdata});
            }
           
            
           }
    }catch(err){
        return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
    }
};



static Coin_List=async(req,res)=>{
    try{
        const {type,coin,status,online_prize,offline_prize}=req.body;
        console.log(req.body);
        if(type==1){
           var pay_mode="1"
        }else if(type==2){
            var pay_mode="2"
        }
         let count=await service(coinModel);
           const doc=new coinModel({
            type:pay_mode,coin,online_prize,offline_prize,status,unique_id:count+1
           });

           const result=await doc.save();
           return res.json({"code":errorStatus.errorsuccess,"sms":'succes',"status":1,"data":result});
         
    }catch(err){
        return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
    }
}


//Create For backend

//End Backend



static TransactionOfflineRequest=async(req,res)=>{
    try{
        
           const {UserId,transaction_id,status,Amount,coin_id}=req.body;
           if(!UserId || !transaction_id || !status || !Amount || !coin_id){
            

            return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
           }else{
            const doc=await userModel.findOne({UserId : UserId});
            if(doc==null){
                return res.json({"code":errorStatus.InvalidUserId,"sms":'Invalid UserId',"status":0}); 
            }else{
                 
            const credit_list=await coinModel.find({'status':"1",'unique_id':coin_id});
            var coin_amount=credit_list[0].online_prize;
            var coin=credit_list[0].coin;


            // const updateAmount=parseInt(doc.CurrentBalance)+parseInt(coin);
            // const updatedoc=await userModel.findOneAndUpdate({UserId : UserId},{"$set":{"CurrentBalance":updateAmount}},{new:true});
            const newdoc=new transactionOffilneModel({
                UserId,transaction_id,status,Amount,coin_id,coin,mode_type:"offilne",trans_mode:1
            });
            await newdoc.save();
            const newdata={
                UserId:UserId,
                "request_id":newdoc._id
            }
            return res.json({"code":errorStatus.errorsuccess,"sms":'succes',"status":1,"data":newdata});
            }
           
            
           }
    }catch(err){
        return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
    }
};


 
static getTransactionHistory=async(req,res)=>{
    try{
          const { 
            UserId ,start_Index,end_Index       
        }=req.body;
            if(!UserId){
                return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
            }else{
              
                if(end_Index==undefined){
                    var end_Index1=0;
                }else{
                    var end_Index1=end_Index;
                }
                   const history=await transactionModel.find({UserId:UserId}).sort({_id:-1}).skip(start_Index).limit(end_Index);

                //    console.log(history);
                   if(history.length==0){
                    return res.json({"code":errorStatus.RecordNotFound,"sms":'No record found',"status":0,data:{}});
                   }
                   const newhistory=history[0];
                   return res.json({"code":errorStatus.errorsuccess,"status":1,"sms":'Success',data:{'end_Index':(parseInt(start_Index)+parseInt(history.length)),'trans_history':{...history}}});
                    
              
                }

        }catch(err){
            return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
        }
}


static TransOfflineWithdrowRequest=async(req,res)=>{
    try{
        
           const {UserId,account_number,ifsc_code,acc_holder_name,upi_id,Amount,status_type_bank}=req.body;
           if(!UserId  || !Amount   || !status_type_bank  ){
            

            return res.json({"code":errorStatus.allfieldrequired,"sms":'All  filled required',"status":0});
           }else{
            const doc=new TransOfflineWithdrowRequestModel({
                UserId,account_number,ifsc_code,acc_holder_name,upi_id,Amount,status_type_bank,status:1
            })
            

           
            await doc.save();
            const newdata={
                UserId:UserId,
                "request_id":doc._id
            }
            return res.json({"code":errorStatus.errorsuccess,"sms":'succes',"status":1,"data":newdata});
            }
           
            
           
    }catch(err){
        return res.json({"code":errorStatus.Bad_Request,"sms":err.message,"status":0});
    }
};

 



}

module.exports=matchcontroller;