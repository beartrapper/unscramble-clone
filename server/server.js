const express = require('express');
const app = express();
var loopAddon = require('./loop_addon/build/Release/loop_addon.node');
const port = 5000;
 
app.get('/api/search', (req, res ) => {
    // console.time('cpp_loop');
    // console.log('sum = ' + loopAddon.sumNow(1000000000))
    // console.timeEnd('cpp_loop');
    res.send('Hello Bhaa')
})

app.listen(port, ()=> {
    console.log(`server running on port ${port}`);
})