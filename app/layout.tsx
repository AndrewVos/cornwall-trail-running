import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


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
    <ClerkProvider>
      <html lang="en" className="h-full">

        <body className="container mx-auto space-y-5 p-3">
          <header>
            <div className=''>
              <div className=''>
                <div className='flex items-center space-x-3'>
                  <div className="grow">
                    <Link href="/">
                      <h1 className="text-4xl text-gray-700 font-bold hover:underline">
                        Cornwall Trail Running
                      </h1>
                    </Link>
                  </div>
                  <div>
                    <SignedOut>
                      <a className="underline text-md text-gray-700" href="/sign-in">Sign in</a>
                    </SignedOut>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                  </div>
                  <div className='w-[80px] border-4 border-blue-300 rounded-full'>
                    <div className='border-4 border-gray-200 bg-gray-200 rounded-full'>
                      <Image src="/landmark.png" width={256} height={256} alt="Cornwall Trail Running Logo" className='rounded-full' />
                    </div>
                  </div>
                </div>
              </div>
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
              <Link href="/upload" className="text-blue-500 hover:underline">Upload a route</Link>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
