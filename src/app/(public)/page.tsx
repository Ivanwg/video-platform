import { CoursesList, CreateCourseForm } from '@/features/courses-list/pub'

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col  p-8'>
      <h1 className='text-3xl mb-2'>Courses</h1>
      <CreateCourseForm
        revalidatePagePath='/'
        className='max-w-[300px] mb-10'
      />
      <CoursesList revalidatePagePath='/' />
    </main>
  )
}
