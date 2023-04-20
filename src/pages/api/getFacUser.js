const queries = require("../../controllers/queries.js")
const client = require("../../controllers/client.js");

export default function getFacUser(req, res) {
  const data = req.body
  client.query(queries.getFacultyById, [data.email], (err, result)=>{
    
    if(!err){
      const rowvals = result.rows
      const response = {
        'email': rowvals[0].f_email,
        'name': rowvals[0].f_name,
        'dept': rowvals[0].dept_name
      }
      res.send(JSON.stringify(response))
    }
    else{
      res.send(err)
    }
  })
}