var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



// const Router = require("express").Router();
// const auth = require("../routers/auth");

// Router.use("/auth", auth);

// Router.get("", (req, res) => {
//   res.send("Welcome to Mentrome");
// });
// Router.get("/student/id",(req,res)=>{
//     res.send("this is student")
// })
// Router.get("/mentor",(req,res)=>{
//   res.send("this is list of mentors")
// })
// Router.get("/mentor/id",(req,res)=>{
//   res.send("this is spcific mentor");
// })

// module.exports = Router;
