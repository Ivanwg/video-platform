'use client'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ProfileForm } from './_ui'
import { Spinner } from '@/shared/ui/spinner'
import { getProfileQuery } from '@/entities/user/profile'

export function UpdateProfileForm({
  userId,
  callbackUrl,
}: {
  userId: string
  callbackUrl?: string
}) {
  const profileQuery = useQuery({
    ...getProfileQuery(userId),
    retry: 0,
  })

  const router = useRouter()
  const handleSuccess = () => {
    if (callbackUrl) {
      router.push(callbackUrl)
    }
  }

  if (profileQuery.isPending) {
    return <Spinner aria-label='Загрузка профиля' />
  }

  if (!profileQuery.data) {
    return <div>Не удалось загрузить профиль, возможно у вас нет прав</div>
  }

  return (
    <ProfileForm
      userId={userId}
      profile={profileQuery.data.profile}
      onSuccess={handleSuccess}
      submitText={callbackUrl ? 'Продолжить' : 'Сохранить'}
    />
  )
}
