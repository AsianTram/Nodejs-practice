const express = require("express");
const app= express();
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.get("/",(req,res)=>{
    const name= req.cookies.username;
    if(name){
        res.render("index",{name:name});
    }
    else{
        res.redirect("/hello");
    }
    
})
app.get("/cards",(req,res)=>{
    res.render("cards",{prompt:"Who is buried in Grant's tomb?"});
})
app.get("/hello",(req,res)=>{
    res.render("hello");
})
app.post("/hello",(req,res)=>{
    res.cookie('username', req.body.username);
    res.redirect("/");
})
app.listen(3000, ()=>{console.log("Running!");});
