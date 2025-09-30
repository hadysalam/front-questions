import { useRouter } from 'next/router'

const EXERCISES = [
  {
    title: 'Problem 1',
    desc: 'Email Validation',
    link: '1'
  },
  {
    title: 'Problem 2',
    desc: 'Prediction Algorithm',
    link: '2'
  },
  {
    title: 'Problem 3',
    desc: 'Linked List',
    link: '3'
  },
  {
    title: 'Problem 4',
    desc: 'Brackets Sequence Validation',
    link: '4'
  },
  {
    title: 'Mimicking Webpage UI',
    desc: 'Hello Matic website reproduction',
    link: 'web'
  }
]

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <ul role="list" className="divide-y divide-white/5">
          {EXERCISES.map((exercise) => (
            <li key={exercise.link} className="flex justify-between gap-x-6 py-5 cursor-pointer" onClick={() => router.push(`/${exercise.link}`)}>
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 font-semibold text-white">{exercise.title}</p>
                  <p className="mt-1 truncate text-xs/5 text-gray-400">{exercise.desc}</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm/6 text-white">Go to page</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
