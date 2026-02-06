export async function parseJSONBody(req, res) {
    let body = ''

    for await (const chunk of req){
        body += chunk
    }
    
    try{
        return JSON.parse(body)
    } catch(err) {
            console.log('invalid JSON Format ', err)
    }

    return


}