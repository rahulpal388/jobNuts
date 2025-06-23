import NextAuth, { DefaultSession } from "next-auth";
declare module "next-auth" {
    interface Session {
        user: {
            id?: string;
            username?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        name?: string;
        email?: string;
        image?: string;
        accessToken?: string;
    }
}