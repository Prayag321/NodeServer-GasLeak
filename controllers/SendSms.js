
const accountSid = 'AC5034c5496c3a37ab74aa4cb0302099bf';//TWILIO ACCOUNT SID
const authToken = 'a34b28237f30094db46e2012cf5971ad';//TWILIO AUTH TOKEN

const sendSms= async(req,res)=>{
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({
        body: 'Fire is detected in the lab',
        from: '+12295455646',
        to: '+919326173967'
    })
    .then(message => console.log(message.sid))
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('sms send');
}
module.exports = sendSms;