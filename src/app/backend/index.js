var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app = express();
var cors = require("cors");
var mqtt = require('mqtt');
const MQTT_SERVER = "broker.hivemq.com";
const MQTT_PORT = "1883";
//if your server don't have username and password let blank.
// const MQTT_USER = "iot"; 
// const MQTT_PASSWORD = "password";
const MQTT_USER = ""; 
const MQTT_PASSWORD = "";


// app.use(bodyParser);
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
// app.use(bodyparser);

//connection to mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'iot'
})

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    console.log("MQTT Connect");
    //insert user table
    app.post('/create_user', (req, res) => {
        let data = JSON.parse(req.body.data)
        var username = data.username;
        var password = data.password;
        console.log(data)
        connection.connect(function() {
            connection.query("insert into user (username,password) values (?,?)",[username,password], function(err, result, field) {
                if (err) {
                    res.end(JSON.stringify(err));
                } else {
                    if (result.affectedRows > 0) {
                        res.end("successfully inserted");
                    } else {
                        res.end("Please try again.");
                    }
                }
            })
        })
    })

    //insert project table
    // app.use('/create_project',Routes);
    app.post('/create_project',(req,res) => {
        let data = JSON.parse(req.body.data)
        let name = data.name;
        let hourns = data.hourns;
        let minute = data.minute;
        let weight = data.weight;
        let temperature = data.temperature;
        let working = data.working;
        connection.connect(function(){
            connection.query("insert into project (name,hourns,minute,weight,temperature,working) values (?,?,?,?,?,?)",[name,hourns,minute,weight,temperature,working],function(err,result,field){
                if(err){
                    res.end(JSON.stringify(err));
                }else {
                    if(result.affectedRows > 0){
                        res.end("successfully inserted");
                    }else {
                        res.end("Please try again.");
                    }
                }
            })
        })
    })

    app.get('/project',(req,res)=>{
        connection.query('SELECT * FROM project',(error,results,fields)=>{
            if (error) throw error;
            let message = ""
            if(results === undefined || results.length == 0){
                message = "user table is empty";
            }
            else {
                message = "successfully"
                error = true
            }
            return res.send(results);
        })
    })

    app.post('/delete_project',(req, res) => {
        let id = JSON.parse(req.body.data)
        // const id = data.id;
        console.log(id)
        if(!id){
            return res.status(400).send({error:true,message:"Please project id"});
        }else {
            connection.query("DELETE FROM project WHERE id = ?",[id],(error, results, fields)=>{
                if (error) throw error;
                let message =""
                if (results.affectedRows === 0) {
                    message="Please try again.";
                } else {
                    message="successfully inserted";
                }
                return res.send({error:false,data:results,message:message})
            })  
        }
    })

    app.post('/edit_project',(req,res)=>{
        let id = JSON.parse(req.body.data)
        // let id = data.id;
        console.log(id)
        connection.query('SELECT * FROM project WHERE id = ?',[id],(error,results,fields)=>{
            if (error) throw error;
            let message = ""
            if(results === undefined || results.length == 0){
                message = "user table is empty";
            }
            else {
                message = "successfully"
                error = true
            }
            return res.send(results);
        })
    })

    app.post('/update_project',(req,res) => {
        let data = JSON.parse(req.body.data)
        // console.log(req.body)
        let id = data.id;
        let dataset ={
            name:data.name,
            hourns:data.hourns,
            minute:data.minute,
            weight:data.weight,
            temperature:data.temperature,
            working:data.working
        }
        console.log(id,dataset)
        connection.connect(function(){
            connection.query("UPDATE project SET ? WHERE id = ?",[dataset,id],function(err,result,field){
                if(err){
                    res.end(JSON.stringify(err));
                }else {
                    if(result.affectedRows > 0){
                        res.end("successfully inserted");
                    }else {
                        res.end("Please try again.");
                    }
                }
            })
        })
    })

    app.get('/user',(req,res)=>{
        connection.query('SELECT * FROM user',(error,results,fields)=>{
            if (error) throw error;
            let message = ""
            if(results === undefined || results.length == 0){
                message = "user table is empty";
            }
            else {
                message = "successfully"
                error = true
            }
            return res.send(results);
        })
    })

    app.post('/status',(req, res) => {
        let data = JSON.parse(req.body.data)
        console.log(data)
        let mqtt = setInterval(client.publish("/nodejs/mqtt",data), 1000)
    })
});
app.listen(8081, () => console.log("Node app is running on port 8081."));