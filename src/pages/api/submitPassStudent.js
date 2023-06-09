// import { deleteCookie, getCookie } from 'cookies-next'
// import React from 'react'
import client from '@/controllers/client';
const queries = require('../../controllers/queries.js')

export default function submitPas(req, res) {
    
        const data = req.body;
        
        client.query(queries.getStudentById, [data.email], (err, result) => {
            if(!err){
                const rowvals = result.rows
                
                if(data.oldpass === rowvals[0].stu_pass){
                    client.query(queries.updateStudentPass, [data.newpass, data.email], (err2, result2)=>{
                        if (!err2){
                            res.send(JSON.stringify({'message' : 'Updated password'}))
                        }
                        else{
                            res.send(JSON.stringify({'message' : 'Error in update'}))
                        }
                    })
                }
                else{
                    res.send(JSON.stringify({'message':'Wrong current password'}))
                }
            }
            else{
                res.send(JSON.stringify({'message': 'Error fetching information'}))
            }
        } )
}
