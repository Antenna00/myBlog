import { authOptions } from "@/app/[locale]/util/auths"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};