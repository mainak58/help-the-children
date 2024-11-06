import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";


export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
    pages: {
        signIn: "/auth/signin", 
    },
    callbacks: {
        async jwt({ token, user }) {

            if (user) {
                token.id = user.id; 
            }
            return token;
        },
        async session({ session, token }) {
                session.user.id = token.id; // Ensure token has 'id'
            return session;
        },
    },
});
