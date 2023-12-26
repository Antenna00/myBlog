import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } = process.env;
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

if (!GITHUB_ID && !GOOGLE_ID) {
    throw new Error("At least one set of OAuth credentials (GitHub or Google) must be provided");
  }
  const prisma = new PrismaClient()

  //adapters
  const adapters: NextAuthOptions['adapter'] = PrismaAdapter(prisma);

  //providers
  const providers: NextAuthOptions['providers'] = [
    GITHUB_ID && GITHUB_SECRET && GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    GOOGLE_ID && GOOGLE_SECRET && GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ].filter(Boolean) as NextAuthOptions['providers'];
  
  export const authOptions = {
    adapters,
    providers,
  };