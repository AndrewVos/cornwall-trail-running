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
  const copyrightYear = () => {
    const startYear = 2023
    const currentYear = new Date().getFullYear()
    return currentYear === startYear ? currentYear : `${startYear}-${currentYear}`
  }

  return (
    <html lang="en" className="h-full">
      <body className="container mx-auto space-y-5 p-3">
        <header>
          <div className=''>
            <Link href="/">
              <h1 className="text-4xl text-gray-700 font-bold hover:underline">
                Cornwall Trail Running
              </h1>
            </Link>
          </div>
        </header>

        <main className="">
          <div className="">
            {children}
          </div>
        </main>

        <div className='border rounded px-3 py-1 md:flex items-center'>
          <div className='text-sm text-gray-700 grow'>
            Copyright Cornwall Trail Running {copyrightYear()}
          </div>
          <div>
            <a className="text-blue-500 underline text-sm" href="mailto:andrew@andrewvos.com">Submit a GPX</a>
          </div>
          <div className="hidden md:block">&nbsp;-&nbsp;</div>
          <div>
            <a className="text-blue-500 underline text-sm" href="mailto:andrew@andrewvos.com">Contact</a>
          </div>
        </div>

      </body>
    </html>
  )
}
