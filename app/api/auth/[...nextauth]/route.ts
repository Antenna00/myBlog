import { authOptions } from "@/app/util/auths"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};