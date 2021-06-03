const express = require('express');
const router = require('./routers');
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const app = express();
const port = 4001;


app.use(cors());
app.use(router);

//Start the serv
https.createServer({
    cert: fs.readFileSync('bankJS.crt'),
    key: fs.readFileSync('bankJs.key'),
    passphrase: 'superpassword'
}, app).listen(port, () => {
    console.log('Server listening on port: ', port);
}).on('error', err => {
    console.log('Error while running the server.');
});
