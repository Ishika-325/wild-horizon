export function sendRes(res, statusCode, contentType, payload){
    res.writeHead(statusCode, {'Content-Type': contentType})
    res.end(payload)
}