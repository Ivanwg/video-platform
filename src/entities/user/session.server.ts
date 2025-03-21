import { NeedAuthError } from '@/shared/lib/errors';
import { nextAuthConfig } from './next-auth-config'
import { getServerSession } from 'next-auth'

export const getAppSessionServer = async () => getServerSession(nextAuthConfig)

export const getAppSessionStrictServer = async () => {
  const session = await getAppSessionServer();
  if (session === null) {
    throw new NeedAuthError();
  }
  return session;
};
