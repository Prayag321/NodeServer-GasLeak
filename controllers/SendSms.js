const accountSid = 'AC5034c5496c3a37ab74aa4cb0302099bf';
const apiKey = 'SKd9efbb3a3f7d975b7ef8fd18c39791b3';
const apiSecret = '5dmpxowNdWqYFqe5IyvwUE9EQZDTgKgS';
const client = require('twilio')(apiKey, apiSecret, { accountSid: accountSid });


// const accountSid = 'AC5034c5496c3a37ab74aa4cb0302099bf';
// const authToken = 'fdb81a344ba5a78744b386ff007396ad';
// const client = require('twilio')(accountSid, authToken);

const sendSms= async(req,res)=>{
    client.messages
    .create({
        body: 'Gas is detected in the lab',
        from: '+12295455646',
        to: '+918369204930'
    },function(err, message) {
        if (err) {
            console.error('Error sending SMS:', err);
        } else {
            console.log('SMS sent successfully:', message.sid);
        }
    });
    // .then(message => console.log(message.sid))
    // .done();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('sms send');
}

module.exports = sendSms;