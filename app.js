// load express
const express = require("express") 
// instantiate express
const app = express() 

// get a port 
const port = 3070 

// so we can get .ejs files without using __dirname  
app.set("view engine" , "ejs") 

// middleware allows us to use "req.body"
app.use(express.urlencoded({extended:true})) 

// so we can serve css and other static files
app.use(express.static("public"))

/// static content 
let homeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

// all our posts will go here
let posts = [{postTitle: "Day 1", postContent: "Space the final frontier"} ] 

// get home page
app.get("/" , (req,res)=>{
    res.render("index" , {homeContent: homeContent, posts})
})


// get about page
app.get("/about", (req,res)=>{
    res.render("about", {aboutContent: aboutContent})
})
// get contact page
app.get("/contact", (req,res)=>{
    res.render("contact", {contactContent: contactContent})
})

// get compose page
app.get("/compose", (req,res)=>{
    res.render("compose")  

})

/// post our content to website
app.post("/compose", (req,res)=>{
    let title = req.body.titleText
    let content = req.body.contentText

    let newPost = {postTitle: title, postContent: content} 

    posts.push(newPost) 

    posts.forEach(element => {
        console.log(element.postTitle)
    });

    res.redirect("/")
})

// standard setting up of server// with some error handling 
app.listen(port, (e)=>{
    if(e){
        console.log("error establishing the server")
    }
    else{
        console.log("server running on port " + port)
    }
})


