
import { client } from "@/db";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { User, Account, Profile, Session } from "next-auth";
import { JWT } from "next-auth/jwt";


export const authOptions = {

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],

    callbacks: {

        async signIn({ user, account, profile }: {
            user: User,
            account: Account,
            profile?: Profile
        }) {

            try {
                if (!user.name || !user.email) {
                    return false;
                }
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            { email: user.email },
                            { username: user.name }
                        ]
                    }
                })

                if (!existingUser) {

                    await client.user.create({
                        data: {
                            username: user.name,
                            email: user.email,
                            image: user.image,
                        }
                    })

                    return true;
                }
                if (existingUser) {
                    return true;
                }
            } catch (error) {
                return false
            }

            return false;





        },

        async jwt({ token, account, profile }: { token: JWT, account: Account, profile: Profile }) {
            if (account && profile) {
                const user = await client.user.findFirst({
                    where: {
                        OR: [
                            { email: profile.email },
                            { username: profile.name }
                        ]
                    }
                })
                token.accessToken = account.access_token
                token.id = user?.id
                token.name = user?.username
                token.email = user?.email || ""
                token.image = user?.image ?? undefined
            }


            return token
        },


        async session({
            session,
            token,
            user,
        }: {
            session: Session;
            token?: JWT;
            user?: User;
        }): Promise<Session> {
            if (token && session.user) {
                session.user.id = token.id as string;
                session.user.email = token.email
                session.user.image = token.picture
                session.user.username = token.name
            }

            return session;
        }

    },



    pages: {
        signIn: "auth/signin",
        error: "auth/error"
    },
}




