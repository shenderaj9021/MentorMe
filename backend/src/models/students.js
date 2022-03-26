const mongoose = require("mongoose");
const studentSchema =new  mongoose.Schema({
  firstname: { type: String, required: true },
  lastname:{  type: String, required: true},
  dob:{type:Date , required:true},
  profile_pic:{type:mixed},
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  socialMediaHandles: {
    type:Map,
    of:String
  },
  address: [{  city: String, pincode: Number }],
  school:{type:String,required:false},
  college:{type:String,required:true},
  year_of_graduation:{type:Number,min:1950,max:2030,required:true},
  degree:{type:String,required:true}, 
  internship:[String],
  interest:[String],
  skills:[String],
  certifications:[String],
  about:String,


})

const sessionSchema = new mongoose.Schema({
  student_id:Number,
  mentor_id:Number,
  session_date:Date,
  completed:Boolean
})

const students = mongoose.model("Student",studentSchema);
const session = mongoose.model("Session",sessionSchema);


module.exports = students;
module.exports = session;
