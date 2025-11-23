import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';

const demoUser = {
  id: 'demo-admin',
  name: 'مسؤول تجريبي',
  email: 'admin@customize-product.sa',
  password: bcrypt.hashSync('password123', 10),
  role: 'admin',
};

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'demo',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'demo',
    }),
    Credentials({
      name: 'البريد وكلمة المرور',
      credentials: {
        email: { label: 'البريد', type: 'email' },
        password: { label: 'كلمة المرور', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        if (credentials.email === demoUser.email && bcrypt.compareSync(credentials.password, demoUser.password)) {
          return { id: demoUser.id, name: demoUser.name, email: demoUser.email, role: demoUser.role };
        }
        return null;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role || 'viewer';
      return token;
    },
    async session({ session, token }) {
      if (token?.role) session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'demo-secret',
};
