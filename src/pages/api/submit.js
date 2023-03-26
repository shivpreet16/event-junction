const client = require('./client.js')
const qurries = require('./querries.js')

export default function submit(req, res){
  if (req.method === 'POST') {
    const data = req.body
    console.log(data)
    client.query(qurries.getStudentById,[data.email],(err,result)=>{
      if(!err){
        const rowvals=result.rows
        console.log(rowvals[0])
        // if(rowvals[0].stu_pass==)
        res.send(result.rows)
      }
      else{
        res.send(err.message)
      }
    })  
  }
  

  // if (req.method === 'POST') {
  //   client.query(qurries.getStudentById,[], (err, result) => {
  //     if (!err) {
  //       const data = req.body
  //       const rowvals = result.rows

  //       rowvals.map(i => {
  //         if (data.pass === parseInt(i.stu_pass)) {
  //           console.log("correct pass")
  //           res.send(i)
  //         }

  //       })
  //       console.log("wrong pass")
  //     }
  //     else res.send(err.message)
  //   })
  // }

}
