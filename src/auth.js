import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
}=NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    
  ],
})  

console.log("AUTH_SECRET:", process.env.AUTH_SECRET);
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID);