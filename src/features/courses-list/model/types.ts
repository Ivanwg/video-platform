/* eslint-disable @typescript-eslint/no-unused-vars */
type TCourseListElement = {
  id: string
  name: string
  desc: string
}

type TCreateCourseListElementCommand = {
  name: string
  desc: string
}

type TDeleteCourseListElementCommand = {
  id: string
}
