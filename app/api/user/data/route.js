import ConnectDB from "@/config/db"
import { getAuth } from "@clerk/nextjs/server"
import User from "@/models/User"
import { NextResponse } from "next/server"

export async function GET(request) {
  try{
    const{userId}=getAuth(request)

await ConnectDB()
const user = await User.findById(userId)
  
  if (!user) {
    return NextResponse.json({success:false,message:"User Not Found"})
    
  }
  return NextResponse.json({success:true,user})
  } catch(error){

    return NextResponse.json({success:false,message:error.message})
    

  }
  
}