import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { dbClient } from '@/shared/lib/db'
import { compact } from 'lodash-es'
import { privateConfig } from '@/shared/lib/config'

export const nextAuthConfig: AuthOptions = {
  adapter: PrismaAdapter(dbClient),
  providers: compact([
    privateConfig.GITHUB_ID && privateConfig.GITHUB_SECRET &&
    GithubProvider({
      clientId: privateConfig.GITHUB_ID ?? '',
      clientSecret: privateConfig.GITHUB_SECRET ?? '',
    }),
  ],)
}
