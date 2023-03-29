const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection(process.env.MySQLURL);

const userRouter = express.Router();

userRouter.get('/', (req,res) => {
    res.send({msg:"welcome from server"});
})

userRouter.get('/query',(req,res) => {
    const query = req.body.query;
    connection.query(query, function(err,rows,fields){
        if(err){
            res.send(err.message);
        }
        else{
            res.send(rows);
        }
    })
})

module.exports = {userRouter,connection};

/*
data
{
    patient_name = string
    new_patient = booloean
    date_of_birth = date
    email = string
    phone = string
    purpose = Purpose(string)
    provider = Provider(obj)
    slot = slot(obj)
}
*/