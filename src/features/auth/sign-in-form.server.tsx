'use server'

import { getProviders } from 'next-auth/react'
import { cn } from '@/shared/lib/utils'
import { EmailSignInForm, Divider, ProviderButton } from './_ui'
// import { privateConfig } from '@/shared/config/private'
// import { TestEmailSignInForm } from './_ui/test-email-sign-in-form'

export async function SignInForm({ className }: { className?: string }) {
  const providers = await getProviders()
  const oauthProviders = Object.values(providers ?? {}).filter(
    (provider) => provider.type === 'oauth',
  )

  // const testToken = privateConfig.TEST_EMAIL_TOKEN

  return (
    <div className={cn('grid gap-6', className)}>
      <EmailSignInForm />

      <Divider />
      {oauthProviders.map((provider) => (
        <ProviderButton key={provider.id} provider={provider} />
      ))}
    </div>
  )
}
