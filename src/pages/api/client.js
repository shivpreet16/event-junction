const Client= require('pg').Pool

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Jayanti2919",
    database:"postgres"
})

module.exports=client;