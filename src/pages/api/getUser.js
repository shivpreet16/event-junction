const client = require("./client.js");
const queries = require("./queries.js");
const auth = require("./controller");
import {setCookie} from 'cookies-next';
import jwt from "jsonwebtoken"

export default function submit(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    client.query(queries.getStudentById, [data.email], (err, result) => {
        const rowvals = result.rows;
        const userData = {
            'email': rowvals[0].stu_email,
            'name': rowvals[0].stu_name,
            'dept': rowvals[0].dept_name,
            'year_of_enr': rowvals[0].year_of_enr
        }

        res.send(JSON.stringify(userData))
    })
  }
}