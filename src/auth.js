import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "./lib/mongoClinetPromise";

export const { handlers :{GET , POST}, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise , {databaseName : process.env.ENVIRONMENT}),
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider(
      {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }
    )
  ],
});
