const express = require('express');
const router = require('./routers');
const app = express();
const port = 4000;


app.use(router);

//Start the serv
app.listen(port, () => {
    console.log('Server listening on port: ', port);
}).on('error', err => {
    console.log('Error while running the server.');
});
