import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"




export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    required: true,
                    placeholder: "Your Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    required: true,
                    placeholder: "Enter Password",
                },
            },



            async authorize(credentials) {
                const { email, password } = credentials;

                if (!credentials) {
                    return null;
                }
                if (email) {
                    const currentUser = users.find((user) => user.email === email);
                    if (!currentUser) {
                        return null;
                    }
                    if (currentUser.password !== password) {
                        return null;
                    }
                    return currentUser;
                }
                return null;
            }
        }),
    ]

}
const handler = NextAuth(authOptions)



const users = [
    {
        email: "mynul.sakil@gmail.com",
        password: "123456",
        name: "John Doe",
        username: "johndoe"
    },
    {
        email: "jane.smith@example.com",
        password: "password456",
        name: "Jane Smith",
        username: "janesmith"
    },
    {
        email: "alice.jones@example.com",
        password: "password789",
        name: "Alice Jones",
        username: "alicejones"
    }
];

export { handler as GET, handler as POST }

