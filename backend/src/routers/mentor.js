var express = require("mongoose")
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { post } = require(".");
const mentors =import('../models/mentors')

var mentorRouter = express.Router();

mentorRouter.route('/')
    .get(function(req,res,next){
        mentors.find({})
        .then((mentors)=>{
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.json(mentors);
        }),(err)=>(next(err))
        .catch((err)=>next(err))
    })
    .post(function(req,res,next){
        mentors.create(req.body)
        .then((mentor)=>{
            console.log(student);
            res.statusCode =200;
            res.setHeader('Content-Type','application/json');
            res.json(mentor)

        }),(err)=>(next(err))
        .catch((err)=>next(err))
    })
    .delete(function(req,res,next){
        students.remove({})
        .then((resp)=>{
            res.sendStatus =200;
            res.setHeader('Content-Type','application/json');
            res.json(resp);
        },(err)=>next(err));
    })

