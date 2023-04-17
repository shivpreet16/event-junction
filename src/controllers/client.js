const Client= require('pg').Pool

const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"kiit",
    database:"postgres"
})

module.exports=client;