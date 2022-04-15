 const mongoose= require('mongoose');

 const Schema = mongoose.Schema;

 const employeeSchema= new Schema({
    name: {
        type: String,
        required: true
    },
    NIC:{
        type: String,
        required: true
    },
    address:{
        type:String,
         required: true
    },
    dept:{
       type:String,
        required: true
   },
   contact:{
       type:Number,
        required: true
   },
   salary:{
       type:String,
        required: true
   },

 }, {
     timestamps:true,
 }) ;
 
 const Employee = mongoose.model("Employee", employeeSchema);

 module.exports = Employee;