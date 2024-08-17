const fs = require("fs")
const http = require("http")



const express = require("express")
const app = express()


// writefile, appendfile, copyfile, renamefile, unlinkfile

/*
fs.writeFile("hello.txt","hello, this is me learning writefile",(err)=>{
    if(err) console.log(err)
    else console.log("File created successfully")
})



fs.appendFile("hello.txt"," and this is appendfile",(err)=>{
    if(err) console.log(err)
    else console.log("Data appended successfully")
})

fs.rename("hello.txt","hey.txt",(err)=>{
    if(err) console.log(err)
    else console.log("File renamed successfully")
})




fs.copyFile("hey.txt", "./copy/hey-copy.txt", (err) => {
  if (err) console.log(err);
  else console.log("File copied successfully");
});




fs.unlink("./copy/hey_copy.txt",(err)=>{
    if(err) console.log(err)
    else console.log("File deleted successfully")
})



fs.rmdir("./copy",{recursive:true},(err)=>{
    if(err) console.log(err)
    else console.log("Folder deleted successfully")
})



fs.readFile("hey.txt",(error,data)=>{
    if(error) console.log(error)
    else console.log(data.toString())
})



const server = http.createServer((req,res)=>{
    res.end("Hello World");
    
})

server.listen(3000)

*/


//setting up basic express application.
//routing 
//middlewares
//request and response handling 
//error handling

/*

 */

//takes 3 arguments: path, request handler methord, and next.
app.get("/",(req,res)=>{
    res.send("Hello World");
})



app.get("/profile",(req,res)=>{
    res.send("i am chandra bhushan form the web development field");
})


app.listen(3000)

