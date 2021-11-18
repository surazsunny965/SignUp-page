import { PrismaClient } from '.prisma/client'

import type { NextApiRequest, NextApiResponse } from 'next'


export async function handler(
req:NextApiRequest,
res:NextApiResponse) {
const prisma = new PrismaClient()
let response = {}
console.log(req.body)
if(req.method ==="POST"){
 response = await prisma.neerajfans.create({data:{name:req.body.name}})
}
res.status(200).json({response})
}