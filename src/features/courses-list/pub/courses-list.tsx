import { revalidatePath } from 'next/cache'
import { coursesRepository } from '../courses.repository'
import { CourseItem } from '../ui/course-item'

interface Props {
  revalidatePagePath: string
}

export async function CoursesList({ revalidatePagePath }: Props) {
  const coursesList = await coursesRepository.getCoursesList()

  const hanldeDeleteAction = async (courseId: string) => {
    'use server'

    await coursesRepository.deleteCourseElement({ id: courseId })
    revalidatePath(revalidatePagePath)
  }

  return (
    <div className='flex flex-col gap-3'>
      {coursesList.map((course) => (
        <CourseItem
          key={course.id}
          course={course}
          onDelete={hanldeDeleteAction.bind(null, course.id)}
        />
      ))}
    </div>
  )
}
