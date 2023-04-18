const client = require("../../controllers/client.js");
const queries = require("../../controllers/queries.js");

export default function registerCommunity(req,res){
    if(req.method==="POST"){
        // res.send(req.body)
        const {community_name,desc,email} = req.body
        console.log(email)
        const date=new Date()
        const creation_date = date.toISOString().split('T')[0]
        client.query(queries.addCommunity,[community_name,creation_date,false ,desc],(err,result) => {
            // insert into community values('msc','2023-04-18',true,'tech')
            if(!err){
                client.query(queries.addInitialStuCoordinator,[email,community_name],(err2,res2)=>{
                    // insert into student_coordinators values ('21051427@kiit.ac.in','gdsc');
                    if(!err2){
                        res.send(JSON.stringify("ok"))
                        
                    }else{
                        
                        res.send(JSON.stringify({"message":err2}))
                    }
                })

                
            }else{
                res.send(JSON.stringify({"message":err}))

            }
        })

    }
}