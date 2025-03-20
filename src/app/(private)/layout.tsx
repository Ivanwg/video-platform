import { Header } from '@/widgets/header'
import { AuthorizedGuard } from '@/features/auth/authorized-guard'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant='private' />
      <AuthorizedGuard>
        {children}
      </AuthorizedGuard>
    </>
  )
}
