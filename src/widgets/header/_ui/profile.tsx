'use client'
import {
  Skeleton,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui'
import { LogOut, User } from 'lucide-react'
import Link from 'next/link'
import { useSignOut, SignInButton } from '@/features/auth'
import { useAppSession } from '@/entities/user'
import { ProfileAvatar, getProfileDisplayName } from '@/entities/user/profile'

export function Profile() {
  const session = useAppSession()
  const { signOut, isPending: isLoadingSignOut } = useSignOut()

  if (session.status === 'loading') {
    return <Skeleton className='w-8 h-8 rounded-full' />
  }

  if (session.status === 'unauthenticated') {
    return <SignInButton />
  }

  const user = session?.data?.user

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='p-px rounded-full self-center h-8 w-8'
        >
          <ProfileAvatar profile={user} className='w-8 h-8' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 mr-2 '>
        <DropdownMenuLabel>
          <p>Мой аккаунт</p>
          <p className='text-xs text-muted-foreground overflow-hidden text-ellipsis'>
            {user ? getProfileDisplayName(user) : undefined}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile/${user?.id}`}>
              <User className='mr-2 h-4 w-4' />
              <span>Профиль</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={isLoadingSignOut}
            onClick={() => signOut()}
          >
            <LogOut className='mr-2 h-4 w-4' />
            <span>Выход</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
