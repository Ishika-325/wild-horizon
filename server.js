import { readlinkSync } from 'node:fs';
import http from 'node:http' 
const PORT = 8000;


const server = http.createServer((req, res) => {
    res.write("my data starts here \n")
    res.write("this is second line \n")
    res.end()
});


server.listen(PORT, () => {
    console.log(`server is running on the port: ${PORT}`)
})
