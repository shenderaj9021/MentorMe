var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const students = import("../models/students")
var studentRouter = express.Router();


studentRouter.use(bodyParser.json());

studentRouter.route('/')
    .get(function (req, res, next) {
       students.find({})
       .then((students)=>{
           res.statusCode = 200;
           res.setHeader('Content-Type','application/json');
           res.json(students);
       },(err)=>next(err))
       .catch((err)=>next(err));
    })

    .post(function (req, res, next) {
       students.create(req.body)
       .then((student)=>{
            console.log('student registered' ,student.body.name);
            res.sendStatus =200;
            res.setHeader('Content-Type','application/json');
            console.log("post")
            res.json(student);

       },(err)=>next(err))
       .catch((err)=>next(err));
    })
   
    .delete(function (req, res, next) {
        students.remove({})
      .then((resp)=>{
        res.sendStatus =200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
      },(err)=>next(err));
    })

//Now if student fetch by its specific id

studentRouter.route('/:studentId')
    .get(function(req,res,next){
        students.findbyi
    })