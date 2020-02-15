const express = require('express');
const app = express();
var loopAddon = require('./loop_addon/build/Release/loop_addon.node');
const port = 5000;
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//only this route will be used
app.post('/api/unscramble', (req, res) => {
    console.log(req.body.letters)
    res.send(loopAddon.sumNow({'letters' : req.body.letters}))
})

app.get('/api/wwf', (req, res ) => {

     res.send(loopAddonTwo.sumNow({'letters' : 'AABACED'}))
 })

app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})
