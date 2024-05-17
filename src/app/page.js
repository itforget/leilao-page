'use client'
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-zinc-900 dark:text-zinc-50">
      <Navbar />
      <main className="flex justify-center dark:bg-zinc-900 dark:text-white-50">
        <h2 className="mt-60">Página Inicial</h2>
      </main>
    </div>
  )
}