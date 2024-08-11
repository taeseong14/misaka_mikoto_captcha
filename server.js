const express = require('express');
const app = express();
const fs = require('fs');

// 웹서버

// app.get('/', (req, res) => {

// });

app.use(express.static(__dirname + '/static'));



// 캡챠 서버

// app.use('/captcha', express.static(__dirname + '/static/captcha'));




app.listen(3000, () => console.log('listening on port 3000'));
