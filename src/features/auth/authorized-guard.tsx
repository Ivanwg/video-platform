'use client'

import { useAppSession } from '@/entities/user'
import { FullPageSpinner } from '@/shared/ui'
import { signIn } from 'next-auth/react'
import { useEffect } from 'react'

export function AuthorizedGuard({ children }: { children: React.ReactNode }) {
  const session = useAppSession()

  const isUnauthenticated = session.status === 'unauthenticated'

  useEffect(() => {
    if (isUnauthenticated) {
      signIn()
    }
  }, [isUnauthenticated])

  const isLoading =
    session.status === 'loading' || session.status === 'unauthenticated'

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === 'authenticated' && children}
    </>
  )
}
