const mongoose = require("mongoose");
const chat=require("./Models/chats.js");

main().then(() => {
    console.log("connetion scesfull")
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/snapchat');

}

let allchats = [
    {
        from: "mithan",
        to: "chaterwarti",
        msg: "how are you",
        created_at: new Date()
    },
    {
        from: "skjd",
        to: "chaterwarti",
        msg: "how are you",
        created_at: new Date()
    },
    {
        from: "Rohit",
        to: "chaterwarti",
        msg: "how are you",
        created_at: new Date()
    }, {
        from: "Sandeep",
        to: "chaterwarti",
        msg: "how are you",
        created_at: new Date()
    },
    {
        from: "Deepak Dhillon",
        to: "Sahil",
        msg: "how are you",
        created_at: new Date()
    },
    {
        from: "mithan",
        to: "chaterwarti",
        msg: "how are you",
        created_at: new Date()
    },
    {
        from: "koli",
        to: "chkk",
        msg: "how are you",
        created_at: new Date()
    }

];

chat.insertMany(allchats).then((res)=>{
    console.log(res);
})