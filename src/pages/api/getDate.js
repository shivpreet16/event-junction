const client = require("./client")
const queries=require("./queries")

export default function date(req,res) {
    function getInfo(i){

    }
    const d=req.body;
    // append all the details to a list
    console.log(d)
    client.query(queries.getDate,(err,result)=>{
        if(!err){
            const rowval = result.rows

            rowval.map(i=>{
                console.log(i.date)
                console.log(i.month)
                console.log(i.year)
                if(i.date===d.d && i.month===d.m && i.year===d.y){
                    console.log("yes")
                    
                }
                else{
                    console.log("no")
                    
                }
            })
            // console.log(rowval)
        }
        else{
            console.log(err)
        }
    })
    res.send(JSON.stringify({message:"hello dude"}))
}