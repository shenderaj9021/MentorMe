const mongoose = require("mongoose");
const mentorSchema = new mongoose.Schema({
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
  working:[{company: String, designation:String}],
  working_profession:[working],
  interest:[String],
  skills:[String],
  certifications:[String],
  no_stu:Number,
  about:String,
  

});

const mentor = mongoose.model("Mentor", mentorSchema);
module.exports = mentor;