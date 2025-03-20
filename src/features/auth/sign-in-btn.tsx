'use client'

import { Button } from '@/shared/ui/button'
import { LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
}

export const SignInButton: React.FC<Props> = ({ className }) => {
  const handleSignOut = () => signIn()

  return (
    <Button
      className={cn('', className)}
      variant={'outline'}
      onClick={handleSignOut}
    >
      <LogIn className='mr-2 h-4 w-4' /> Войти
    </Button>
  )
}
