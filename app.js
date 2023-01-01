const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

app.use(express.static('Public'));
app.use(express.urlencoded({extended:false}));

app.get('/index',function(req , res){

    const index = path.join(__dirname,'views','index.html');
    res.sendFile(index);
    });

app.get('/recommended',function(req , res){

    const recommended = path.join(__dirname,'views','recommended.html');
    res.sendFile(recommended);
    });
    
app.get('/shareRestaurent',function(req , res){

    const shareRestaurent = path.join(__dirname,'views','shareRestaurent.html');
    res.sendFile(shareRestaurent);
    });

    app.post('/shareRestaurent',function(req , res){

        const userData=req.body;

        const data = path.join(__dirname,'data','details.json');
       const readFile = fs.readFileSync(data);
         const newRead=JSON.parse(readFile);

         newRead.push(userData);

         fs.writeFileSync(data,JSON.stringify(newRead));

         res.redirect('/confirm');


        });

    app.get('/confirm',function(req , res){

        const confirm = path.join(__dirname,'views','confirm.html');
        res.sendFile(confirm);
        });

    app.get('/about',function(req , res){

    const about = path.join(__dirname,'views','about.html');
    res.sendFile(about);
    });

   

app.listen(3000);