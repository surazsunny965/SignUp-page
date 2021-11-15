// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '.prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient()
  
  let response = {}
  if(req.method==="GET"){
    response = await prisma.neerajfans.findMany({})
  }
  if (req.method==="POST"){
    response = await prisma.neerajfans.create({data:{name:req.body.name}})
  }
  if (req.method==="DELETE"){
    var userid = req.query.id
     var lol:string = ""
  if (userid.length>0){
    lol = userid[0]
  } 
    response = await prisma.neerajfans.delete({where:{id:parseInt(lol)}})
  }
  res.status(200).json({ response })
}
