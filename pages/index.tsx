import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-center my-4">Tezos CSO App</h1>
      <Link href="/cafe-info">
        <div className="w-full h-80 bg-yellow-400 cursor-pointer p-4 text-white text-3xl">Cafe info</div>
      </Link>
      <div className="flex flex-wrap">
        <Link href="/about">
          <div className="h-80 w-full bg-green-400 lg:w-1/2 cursor-pointer p-4 text-white text-3xl">About page</div>
        </Link>
        <Link href="/privacy">
          <div className="h-80 w-full bg-red-400 lg:w-1/2 cursor-pointer p-4 text-white text-3xl">Privacy policy</div>
        </Link>
      </div>
    </div>
  )
}
