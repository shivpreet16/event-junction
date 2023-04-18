const client = require("../../controllers/client.js");
const queries = require("../../controllers/queries.js");
const auth = require("../../controllers/controller.js");
import { setCookie } from 'cookies-next';
import jwt from "jsonwebtoken"

export default function submit(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    client.query(queries.getStudentById, [data.email], (err, result) => {
      if(!err){

        const rowvals = result.rows;
        res.send(JSON.stringify({
          'email': rowvals[0].stu_email,
          'name': rowvals[0].stu_name,
          'dept': rowvals[0].dept_name,
          'year_of_enr': rowvals[0].yearofenr
        }))
      }
      else{
        res.send(err);
      }
    })
  }
}