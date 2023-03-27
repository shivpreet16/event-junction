function checkEmail(data) {
    if (data.email.substr(data.email.length-10).includes("kiit.ac.in")){
        if(data.email.includes("fcs")){
            return "faculty"
        }
        else if(!isNaN(data.email.substr(0, data.email.length-11))){
            return "student"
        }
        else{
            return "Wrong email"
        }
     }
    else{
        return "Wrong email"
    }
    
  }

  const checkPass = (pass,data)=>{
    if(pass===data.pass)
    // res.send(result.rows)
    return 1
    else
    // res.send(JSON.stringify({message:"worng pass"}))
    return 0
  }

  export{
    checkEmail,
    checkPass
  }