var mqtt = require('mqtt');

const MQTT_SERVER = "172.16.20.12";
const MQTT_PORT = "1883";
//if your server don't have username and password let blank.
const MQTT_USER = "iot"; 
const MQTT_PASSWORD = "password";

// Connect MQTT
var client = mqtt.connect({
	host: MQTT_SERVER,
	port: MQTT_PORT,
	username: MQTT_USER,
	password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.publish("/nodejs/mqtt", "test 1 status 0");
    client.end()
    // client.subscribe('test', function (err) {
    //     if (err) {
    //         console.log(err);
    //     }
    // });
});

// Receive Message and print on terminal
// client.on('message', function (topic, message) {
//     // message is Buffer
//     console.log(message.toString());
// });

// setInterval(() => {
//     client.publish("/nodejs/mqtt", "hello from NodeJS");
// }, 5000);