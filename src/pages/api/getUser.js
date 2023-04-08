import { getCookie } from "cookies-next";
import { checkCookie } from "./controller";
import client from "./client";

const query = require('./queries')

export default function getUser(req, res){
    if (req==='POST'){
        const data = req.body;
        // if(retreived==="Error"){
        //     res.send(JSON.stringify({'message': 'Login expired'}))
        // }
        
            client.query(query.getStudentById, [data.email], (err, result) => {
                if (!err) {
                    const rowvals = result.rows;
                    console.log(rowvals)
                    const data = {
                        'email' : rowvals[0].stu_email,
                        'name' : rowvals[0].stu_name,
                        'password' : rowvals[0].stu_password,
                        'department' : rowvals[0].dept_name,
                        'year_of_enr': rowvals[0].year_of_enr
                    }
                    res.send(JSON.stringify(data))
                }

                else{
                    res.send(err)
                }

            })
            // console.log(retreived)
        
    }
}