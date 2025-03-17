'use client'
import { Button } from '@/shared/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/shared/ui/card'
import { useTransition } from 'react'

interface Props {
  course: TCourseListElement
  onDelete: () => Promise<void>
}

export function CourseItem({ course, onDelete }: Props) {
  const [isLoadingDelete, startDeleteTransition] = useTransition()
  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete()
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.desc}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Удалить
        </Button>
      </CardFooter>
    </Card>
  )
}
