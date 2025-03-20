'use client'
import { ComposeChildren } from '@/shared/lib/react'
import { ThemeProvider } from '@/features/theme'
import { AppSessionProvider } from '@/entities/user'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/shared/api'

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  )
}
