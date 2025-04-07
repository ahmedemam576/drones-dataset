import Navbar from '@/components/navbar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Drone Datasets. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
