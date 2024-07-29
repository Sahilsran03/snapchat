const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path = require("path");


const chat=require("./Models/chats.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engin","ejs")
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))

main().then(()=>{
    console.log("connetion scesfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/snapchat');

}

// let chat1=new chat({
//     from:"mithan",
//     to:"chaterwarti",
//     msg:"how are you",
//     created_at: new Date()
// });
// chat1.save().then((res)=>{
//     console.log(res);
// })



app.listen(8080,()=>{
    console.log("server is lisning Port no 8080")
})
// # all chats
app.get("/chats",async (req,res)=>{
    let chats= await chat.find();
    console.log(chats);
    res.render("index.ejs",{chats})
  })

//   # add new chats
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

// # add in database
app.post("/chats",(req,res)=>{
    let {from,msg,to}= req.body;
    let newChat= new chat({
        from:from,
        msg:msg,
        to:to,
        created_at: new Date()
    })

    newChat.save().then((res)=>{
        console.log(res);

    })
    .catch((err)=>{
        console.log(err);
    })

    res.redirect("/chats")
});


app.get("/",(req,res)=>{
    res.send("it is working")
});