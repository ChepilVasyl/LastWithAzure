import http from "http";
const host = "localhost"
const port = 3353
const server = http.createServer((req,res)=>{
    res.end("Message from backend")
})
server.listen(port,host,()=>{
    console.log("Сервер запустився")
})