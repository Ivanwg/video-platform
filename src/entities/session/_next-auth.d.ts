import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      name?: string | null;
      image?: string | null;
    };
  }
  interface User {
    id: UserId;
    email: string;
    name?: string | null;
    image?: string | null;
  };
}