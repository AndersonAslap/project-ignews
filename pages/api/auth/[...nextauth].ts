import { query as q } from 'faunadb';

import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna';

export default NextAuth({

    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: {
                params: {
                    scope: 'read:user'
                }
            }
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile }) {


            try {
                await fauna.query(
                    q.If(
                        q.Not(
                            q.Exists(
                                q.Match(
                                    q.Index("user_by_email"),
                                    // esse email...
                                    q.Casefold(user.email!)
                                )
                            )
                        ),
                        // create a user with this email
                        q.Create(q.Collection("users"), {
                            data: {
                                email: user.email
                            }
                        }),
                        // otherwise, search the user by email
                        q.Get(q.Match(q.Index("user_by_email"), q.Casefold(user.email!)))
                    )
                );

                return true;
            } catch {
                return false;
            }
        },
    }

})