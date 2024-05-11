"use server"

import { signIn, signOut } from "@/auth"

export async function doSignout (){
  await signOut()

}

export async function doSignIn (){
  await signIn()
  
}


export  async function auth (formData){


}