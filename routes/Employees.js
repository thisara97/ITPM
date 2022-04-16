const router = require("express").Router();
const { get } = require("express/lib/response");
let Employee = require("../models/Employee");

//create new profile

router.post('/',async(req,res)=>{
    try{
        const {name,NIC,address,dept,contact,salary} = req.body;
       
        const newEmployee = new Employee({
            name,NIC,address,dept,contact,salary
        });

        const savedEmployee = await newEmployee.save();
        res.status(200).send({data : savedEmployee});

    }catch(err){
        res.status(500).send({status : err});
    }




});


//read
router.get('/:id',async(req,res)=>{
    try{
        let id = req.params.id;
        const employee = await employee.find({_id : id})
        res.status(200).send({data : employee});

    }catch(err){
        res.status(500).send({data : err});
    }

})


//update

router.put("/:id", async(req,res)=>{
    try{
        let _id = req.params.id;
        const {name,NIC,address,dept,contact,salary} = req.body;


        const updateEmployee = new Employee({
           _id,name,NIC,address,dept,contact,salary
        });

        await Employee.findByIdAndUpdate(_id,updateEmployee)
        res.status(200).send({data : updateEmployee});
             
    }catch(err){
        res.status(500).send({data : err});
    }
})

//delete

router.delete('/:id',async(req,res)=>{

    try{
        const id = req.params.id;
        const removedEmployee = await Employee.findByIdAndDelete(id)
        res.status(200).send({data : removedEmployee});
    

    }catch(err){
        res.status(500).send({data : err});
    }

})

module.exports = router;
  //get one by Id
  router.route("/get/:id").get(async (req,res)=>{
    let userId = req.params.id;

    const user = await Employee.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status: "employee fetched", user: user})
    }).catch((errr) =>{
        console.log(err.message);
       
    })
})
 
//search







module.exports = router;