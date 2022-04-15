const router = require("express").Router();
const { get } = require("express/lib/response");
let Employee = require("../models/Employee");

//create
router.route("/add").post((req,res) => {
   
    const name = req.body.name;
    const NIC = req.body.NIC;
    const address = req.body.address;
    const dept = req.body.dept;
    const  contact= req.body.contact;
    const salary = req.body.salary;

    const newEmployee = new Employee({

        name,
        NIC,
        address,
        dept,
        contact,
        salary
    })

    newEmployee.save().then(() =>{
        res.json("Employee Added")
    }).catch((err)=>{
        console.log(err);
    })

});


//read

router.route("/").get((req,res) => {
    
    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console/log(err)
    })
});

//update

router.route("/update/:id").put(async(req,res) =>{
  let userId= req.params.id;

  const {name, NIC, address,dept,contact,salary}= req.body;

  const updateEmployee= {
    name,
    NIC,
    address,
    dept,
    contact,
    salary
  }
  const update= await Employee.findByIdAndUpdate(userId, updateEmployee)
  .then(() =>{
    res.status(200).send({status: "employee updated", user: update})
  }).catch(()=>{
      console.log(err);
  })
})


  //delete
  router.route("/delete/:id").delete(async (req,res)=>{
      let userId = req.params.id;

      await Employee.findByIdAndDelete(userId)
      .then(() =>{
          res.status(200).send({status: "employee deleted"});
      }).catch((errr) =>{
          console.log(err.message);
         
      })
  })

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