import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Cornwall Trail Running',
  description: 'The best place to find trail running trails in Cornwall',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body>
        <main className="container p-3 space-y-3">
          <Link href="/">
            <h1 className="text-4xl text-gray-700 font-bold hover:underline">
              Cornwall Trail Running
            </h1>
          </Link>
          <div className="">
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
