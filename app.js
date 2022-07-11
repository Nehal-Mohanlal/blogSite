const express = require("express") 

const app = express() 

const port = 3070 

app.set("view engine" , "ejs") 

app.use(express.urlencoded({extended:true})) 

app.use(express.static("public"))

/// static content 
let homeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


app.get("/" , (req,res)=>{
    res.render("index" , {homeContent: homeContent})
})



app.get("/about", (req,res)=>{
    res.render("about", {aboutContent: aboutContent})
})

app.get("/contact", (req,res)=>{
    res.render("contact", {contactContent: contactContent})
})

app.get("/compose", (req,res)=>{
    res.render("compose")  

})

app.post("/compose", (req,res)=>{
    let item = req.body.textCompose
    console.log(item)
})

app.listen(port, (e)=>{
    if(e){
        console.log("error establishing the server")
    }
    else{
        console.log("server running on port " + port)
    }
})


