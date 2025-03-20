import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
}

export const Divider: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('relative', className)}>
      <div className='absolute inset-0 flex items-center'>
        <span className='w-full border-t' />
      </div>
      <div className='relative flex justify-center text-xs uppercase'>
        <span className='bg-background px-2 text-muted-foreground'>
          или войдите через
        </span>
      </div>
    </div>
  )
}
