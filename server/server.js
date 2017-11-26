const path = require('path');

const express = require('express');
const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.port || 3004;

app.use(express.static(publicPath));
app.listen(port, () => {
    console.log(`App started at ${port}`);
})

