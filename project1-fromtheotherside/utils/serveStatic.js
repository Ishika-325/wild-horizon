import path from 'node:path'
import fs from 'node:fs/promises'
import { sendRes } from './sendRes.js'
import { getContentType } from './getContentType.js'
export async function serveStatic(req,res,baseDir) {
    const publicDir = path.join(baseDir, 'public')
    const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url)
    try {
        if (req.url === '/favicon.ico') {
        res.writeHead(204); // No Content
        res.end();
        return; 
    }
        const content = await fs.readFile(filePath)
        const ext = path.extname(filePath)
        const contentType = getContentType(ext)
        sendRes(res, 200, contentType, content)
    }catch(err) {
        if (err.code == 'ENOENT'){
            const content = await fs.readFile(path.join(publicDir, '404.html'))
            sendRes(res, 404, 'text/html' ,content)
        }else{
            sendRes(res, 500, 'text/html', '<html><h1>Server Error</h1></html>')
        }
    }

}