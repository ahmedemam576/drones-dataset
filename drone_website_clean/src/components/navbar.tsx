'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 max-w-6xl mx-auto">
        <Link href="/" className="font-bold text-xl">Drone Datasets</Link>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost">Home</Button>
          </Link>
          <Link href="https://github.com/VisDrone/VisDrone-Dataset" target="_blank">
            <Button variant="ghost">Resources</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
