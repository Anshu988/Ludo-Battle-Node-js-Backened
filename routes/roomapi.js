const express=require("express");
const router=express.Router();


const matchcontroller=require("../controllers/matchcontroller.js");
router.post("/roomcreate",matchcontroller.matchStart);
router.post("/getlastroomId",matchcontroller.getlastroomId);
router.post("/matchStartStatusUpdate",matchcontroller.matchStartStatusUpdate);
// router.get("/getpublicurl",matchcontroller.getprofile);
router.post("/leaderboard",matchcontroller.LeaderBoard);
router.post("/Bet_List_create",matchcontroller.Bet_List_create);
router.post("/Bet_deduction_create",matchcontroller.Bet_deduction_create);
router.post("/config_list_all",matchcontroller.config_list_all);
router.post("/transactionsave",matchcontroller.TransactionSave);
router.post("/transactionoffline_save",matchcontroller.TransactionOfflineRequest);
router.post("/coinlist",matchcontroller.Coin_List);
router.post("/getTransactionHistory",matchcontroller.getTransactionHistory);
router.post("/updateuser",matchcontroller.updateUser);

router.post("/TransOfflineWithdrowRequest",matchcontroller.TransOfflineWithdrowRequest);
// router.post("/leader",matchcontroller.leader);
router.post("/LivematchStartStatusUpdate",matchcontroller.LivematchStartStatusUpdate);
//LivematchStartStatusUpdate


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })
// var upload = multer({ storage: storage })
// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));

// app.post('/profileupload', upload.single('userProfile'), function (req, res, next) {
//     // req.file is the `profile-file` file
//     // req.body will hold the text fields, if there were any
//     console.log(JSON.stringify(req.file))
//     var response = '<a href="/">Home</a><br>'
//     response += "Files uploaded successfully.<br>"
//     response += `<img src="${req.file.path}" /><br>`
//     return res.send(response)
//   })
module.exports=router;

