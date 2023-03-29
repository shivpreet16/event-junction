const client = require("./client.js");
const queries = require("./queries.js");
const auth = require("./controller");
import { setTokenCookie } from "../utils/auth.js";
import { Jwt } from "jsonwebtoken";

export default function submit(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const response = auth.checkEmail(data);

    if (response === "Wrong email")
      res.send(JSON.stringify({ message: response }));
      
    else if (response === "student") {
      client.query(queries.getStudentById, [data.email], (err, result) => {
        if (!err) {
          const rowvals = result.rows;

          if (auth.checkPass(rowvals[0].stu_pass, data)) {
            setTokenCookie()
            res.send(result.rows);
          } else res.send(JSON.stringify({ message: "wrong pass" }));
        } else {
          res.send(err.message);
        }
      });
    } else {
      client.query(queries.getFacultyById, [data.email], (err, result) => {
        if (!err) {
          const rowvals = result.rows;
          if (auth.checkPass(rowvals[0].f_pass, data)) {
            res.send(result.rows);
          } else res.send(JSON.stringify({ message: "worng pass" }));
        } else {
          res.send(err.message);
        }
      });
    }
  }
}
