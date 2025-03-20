'use client'
import {
  Button,
  Input,
  Spinner,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/shared/ui'
import { useForm } from 'react-hook-form'
import { useEmailSignIn } from '../_vm'
import { cn } from '@/shared/lib/utils'

interface Props {
  className?: string
}

export const EmailSignInForm: React.FC<Props> = ({ className }) => {
  const form = useForm<{ email: string }>({
    defaultValues: {
      email: '',
    },
  })

  const emailSignIn = useEmailSignIn()

  return (
    <Form {...form}>
      <form
        className={cn('', className)}
        onSubmit={form.handleSubmit((data) => emailSignIn.signIn(data.email))}
      >
        <div className='grid gap-2'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='sr-only'>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder='name@example.com'
                    type='email'
                    autoCapitalize='none'
                    autoComplete='email'
                    autoCorrect='off'
                    disabled={emailSignIn.isPending}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button disabled={emailSignIn.isPending}>
            {emailSignIn.isPending && (
              <Spinner className='mr-2 h-4 w-4 ' aria-label='Загрузка выхода' />
            )}
            Войти через Email
          </Button>
        </div>
      </form>
    </Form>
  )
}
