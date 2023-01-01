var express = require('express');
//var path = require ('path');
//var bodyParser = require('bodyParser');
//var parseurl = require('parseurl');


const app = express();


//middlewares
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());


//var staticFolder=express.static(path.join(__dirname,"public"));
//app.use(staticFolder);

app.get("/",(req,res)=>{
    res.sendFile('public/index.html',{root:__dirname});
});

app.listen(8000);
console.log("App listing on port 8000");


