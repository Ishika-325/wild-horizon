import http from 'node:http' 
const PORT = 8000;


const server = http.createServer((req, res) => {
    res.end("hello from server side");
})

server.listen(PORT, () => {
    console.log(`server is running on the port: ${PORT}`)
})
