import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <ul role="list" className="divide-y divide-white/5">
        </ul>
      </div>
    </div>
  );
}
