const express = require('express');
const app = express();
var loopAddon = require('./loop_addon/build/Release/loop_addon.node');
const port = 5000;
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

 
app.get('/api/unscramble', (req, res) => {

    res.send(loopAddon.sumNow({'letters' : 'QWERTY'}))
})

app.get('/api/wwf', (req, res ) => {

     res.send(loopAddonTwo.sumNow({'letters' : 'AABACED'}))
 })

app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})
