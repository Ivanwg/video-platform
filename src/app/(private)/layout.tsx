import { Header } from '@/widgets/header'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header variant='private' />
      {children}
    </>
  )
}
