import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { dbClient } from '@/shared/lib/db'
import { compact } from 'lodash-es'
import { privateConfig } from '@/shared/config'
import { createUserUseCase } from './_use-cases/create-user'
import { UserEntity } from './_domain/types'

const prismaAdapter = PrismaAdapter(dbClient)

export const nextAuthConfig: AuthOptions = {
  // adapter: PrismaAdapter(dbClient),
  adapter: {
    ...prismaAdapter,
    createUser: (user: UserEntity) => {
      return createUserUseCase.exec(user)
    },
  } as AuthOptions['adapter'],
  callbacks: {
    session: async ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role,
        },
      }
    },
  },
  pages: {
    signIn: '/auth/sign-in',
    newUser: '/auth/new-user',
    verifyRequest: '/auth/verify-request',
  },
  providers: compact([
    privateConfig.EMAIL_SERVER_HOST &&
      privateConfig.EMAIL_SERVER_PORT &&
      parseInt(privateConfig.EMAIL_SERVER_PORT) &&
      privateConfig.EMAIL_SERVER_USER &&
      privateConfig.EMAIL_SERVER_PASSWORD &&
      privateConfig.EMAIL_FROM &&
      EmailProvider({
        server: {
          host: privateConfig.EMAIL_SERVER_HOST,
          port: parseInt(privateConfig.EMAIL_SERVER_PORT),
          auth: {
            user: privateConfig.EMAIL_SERVER_USER,
            pass: privateConfig.EMAIL_SERVER_PASSWORD,
          },
        },
        from: privateConfig.EMAIL_FROM,
      }),

    privateConfig.GITHUB_ID &&
      privateConfig.GITHUB_SECRET &&
      GithubProvider({
        clientId: privateConfig.GITHUB_ID ?? '',
        clientSecret: privateConfig.GITHUB_SECRET ?? '',
      }),
  ]),
}
