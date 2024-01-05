import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } = process.env;
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import { prisma } from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
    adapter:PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
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
    ]
};

export const getAuthSession = () => getServerSession(authOptions);