import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      providers: {
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
    }),
  ],
  async session({ session }) {
    // serverless lamba functions
  },
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
