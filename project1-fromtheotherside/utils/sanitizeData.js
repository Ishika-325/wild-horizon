import sanitizeHtml from 'sanitize-html'

export function sanitizeData(data){
    const sanitizedData = {}
    
    for (const [key, value] of Object.entries(data)){
        if (typeof value === 'string'){
            sanitizedData = sanitizeHtml(value, {allowedTags:['h1', 'b'], allowedAttributes: {}})
        }else{
            sanitizedData[key] = value
        }
    }
}