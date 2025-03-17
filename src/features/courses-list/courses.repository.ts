import { dbClient } from '@/shared/lib/db'
import { cache } from 'react'
class CoursesRepository {
  getCoursesList = cache(
    (): Promise<TCourseListElement[]> => dbClient.course.findMany(),
  )

  createCourseElement = (
    command: TCreateCourseListElementCommand,
  ): Promise<TCourseListElement> => {
    return dbClient.course.create({
      data: command,
    })
  }
  deleteCourseElement = (command: TDeleteCourseListElementCommand) => {
    return dbClient.course.delete({
      where: { id: command.id },
    })
  }
}

export const coursesRepository = new CoursesRepository()
