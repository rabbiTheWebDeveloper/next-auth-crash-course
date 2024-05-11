import mongoose from "mongoose";


export async function dbConnection (){
  try{
    const client = await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
    return client
  }catch(e){
    console.log(e)
  }
}