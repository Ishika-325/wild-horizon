import { addNewSighting } from "./addNewSighting.js";
import { getData } from "./getData.js";
import { parseJSONBody } from "./parseJSONBody.js";
import { sanitizeData } from "./sanitizeData.js";
import { sendRes } from "./sendRes.js";

import {stories } from '../data/stories.js';

export async function handleGet(res){
    const data = await getData()
    const content = JSON.stringify(data)
    sendRes(res, 200, 'application/json', content)
    // console.log(stories[0])
}

export async function handlePost(req,res){
  try{
    let sanitizedBody = await parseJSONBody(req, res)
    // const sanitizedBody = sanitizeData(parseddata)
    await addNewSighting(sanitizedBody)
    // sightingsEvents.emit('sighting-added', sanitizedBody)
    sendRes(res, 201, 'application/json', JSON.stringify(sanitizedBody))
  }catch(err){
    sendRes(res, 400, 'application/json', JSON.stringify({error: err}))
  }

}

// export async function handleNews(req , res){
  
//   let randomIndex = Math.floor(Math.random() * stories.length)
//   // console.log(stories[randomIndex])
//   res.statusCode = 200

  
//   res.setHeader("Cache-Control", "no-cache") 
//   res.setHeader("Connection", "keep-alive")
//   res.setHeader("Content-Type", "text/event-stream")



  // setInterval(() => {
  //   let randomIndex = Math.floor(Math.random() * stories.length)
  //   res.write(
  //     `data: ${JSON.stringify({
  //       event: 'news-update',
  //       story: stories[randomIndex]
       

  //     })}\n\n`
  //   )
    
  // }, 3000)
// }