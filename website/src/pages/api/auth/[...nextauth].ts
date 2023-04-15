import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      accessTokenUrl: "https://github.com/login/oauth/access_token",
      authorization: {
        url: "https://github.com/login/oauth/authorize",
        params: {
          scope: "read:user, user:email, repo",
        },
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, user, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.user.access_token;
      return session;
    },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        const { accessToken, ...rest } = account;
        token.accessToken = accessToken;
        token.user = rest;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
