const Client= require('pg').Pool

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Jayanti2919",
    database:"postgres"
})

// export default function handle(req,res){

//     client.query(`select * from student`,(err,result)=>{
        // if(!err) res.send(result.rows)
        // else res.send(err.message)
    // })
// }

module.exports=client;