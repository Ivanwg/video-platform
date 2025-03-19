import React from 'react'
import { ToggleTheme } from '@/features/theme'
import { Layout } from './_ui/layout'
import { Logo } from './_ui/logo'
import { MainNav } from './_ui/nav'
import { Profile } from './_ui/profile'

interface Props {
  variant: 'auth' | 'private' | 'public'
}

export const Header: React.FC<Props> = ({ variant }) => {
  const isProfile = variant !== 'auth'
  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<ToggleTheme />}
    />
  )
}
