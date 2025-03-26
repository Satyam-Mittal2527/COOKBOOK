import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
const app=express();
const port=3000;
var review;
const arr={title:'hello',ingredients:'good',process:'food'};
let array=[];
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("initial.ejs");
});
app.get("/logo",(req,res)=>{
    res.render("index.ejs");
})
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})
app.get("/breakfast",(req,res)=>{
    res.render("breakfast.ejs");
})
app.get("/lunch",(req,res)=>{
    res.render("lunch.ejs");
})
app.get("/dinner",(req,res)=>{
    res.render("dinner.ejs");
})
app.get("/submit",(req,res)=>{
    res.render("index.ejs");
})
app.post("/review",(req,res)=>{
    review=req.body["review"];
    console.log(`${review}`);
    res.render("index.ejs",{review});
})
app.post("/addele",(req,res)=>{
    var item=req.body["AddItem"];
    arr.title=item;
    array.push(arr);
    res.render("dinner.ejs",{array});
})
app.post("/delete",(req,res)=>{
    array.pop();
    res.render("dinner.ejs",{array});
})
app.post("/register",(req,res)=>{
    let user= req.body["username"];
    res.render("index.ejs",{user});
})
app.get("/newUser",(req,res)=>{
    res.render("newUser.ejs");
})
app.listen(port,()=>{
    console.log(`Listenning to the port ${port}`);
});