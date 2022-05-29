const express = require("express");
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));



app.get("/", (req,res)=>{
    return res.render('home',{
        title:"Home Page"
    });
});

app.get("/search",(req,res)=>{
    return res.render('search',{
        title:"Search Page"
    });
})

app.get("/sort",(req,res)=>{
    return res.render('sort',{
        title:"Sort Page"
    });
})

app.get("/pathfinding",(req,res)=>{
    return res.render('pathfinding',{
        title:"Pathfinding Page"
    });
})

app.get("/wordsearch",(req,res)=>{
    return res.render('wordsearch',{
        title:"WordSearch Page"
    });
})


app.get("/cpuscheduling",(req,res)=>{
    return res.render('cpuscheduling',{
        title:"CPU Scheduling Page"
    });
})

app.get("/nqueen",(req,res)=>{
    return res.render('nqueen',{
        title:"N-Queen"
    });
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log("listening the port at 3000");
})