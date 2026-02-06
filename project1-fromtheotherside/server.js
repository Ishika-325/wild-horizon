import http from "node:http"
import path from "node:path"
import { serveStatic } from "./utils/serveStatic.js"
import { getData } from "./utils/getData.js"
import { handleGet, handlePost } from "./utils/routeHandlers.js"
import dotenv from 'dotenv';

dotenv.config();
// import { handleNews } from "./utils/routeHandlers.js"
const PORT = process.env.PORT || 8000

const __dirname = import.meta.dirname



const server = http.createServer(async(req,res) =>{
    if (req.url.startsWith('/api')){
        if( req.method == 'GET'){
         return await handleGet(res)
        }
        else if(req.method == 'POST'){
           return handlePost(req, res)
        }
    }
      else if (!req.url.startsWith('/api')) {

        return await serveStatic(req, res, __dirname)

    }
})

server.listen(PORT, () => {
    console.log(`your server is working on http://localhost:${PORT}`)
})