const client = require("./client.js");
const queries = require("./queries.js");
const auth = require("./controller");
import jwt from "jsonwebtoken";
import { setTokenCookie } from "../utils/auth.js";

export default function submit(req, res) {
  if (req.method === "POST") {
    const KEY = "ljsdafaksdnvasbdjfknaefhnaasdfasdfmdbfaiusebfwh";
    const data = req.body;
    const response = auth.checkEmail(data);

    if (response === "Wrong email")
      res.send(JSON.stringify({ message: response }));
    else if (response === "student") {
      client.query(queries.getStudentById, [data.email], (err, result) => {
        if (!err) {
          const rowvals = result.rows;

          if (auth.checkPass(rowvals[0].stu_pass, data)) {
            const token=({
              token: jwt.sign(
                {
                  username: rowvals[0].stu_email,
                  admin: true,
                },
                KEY
              ),
            });
            res.setHeader(
              "Set-Cookie",
              `token=${token}; HttpOnly; Max-Age=604800; SameSite=Strict`
            );
            // res.status(200).json({ message: "Login successful" });
            setTokenCookie(token)
            res.send(JSON.stringify({ message: 'Logged in' }))
          } else res.send(JSON.stringify({ message: "wrong password" }));
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
          } else res.send(JSON.stringify({ message: "Wrong password" }));
        } else {
          res.send(err.message);
        }
      });
    }
  }
}
