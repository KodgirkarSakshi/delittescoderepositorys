var express = require('express');
var path = require('path');

const app = express();

var staticFolder = express.static(path.join(__dirname,'public'));
app.use(staticFolder);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(8000);
console.log("server is running on port 8000")