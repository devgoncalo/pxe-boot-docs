import './globals.css'
import { ReactNode } from 'react'
import { Roboto_Flex as Roboto } from 'next/font/google'

import { Hero } from '@/components/Hero'
import { Powered } from '@/components/Powered'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata = {
  title: 'Inicializar uma RaspBerry através de uma Rede',
  description:
    'Uma documentação completa sobre como Inicializar uma RaspBerry através de uma Rede construída com Next.js, TailwindCSS, Typescript powered by Vercel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} flex bg-gray-900 font-sans text-gray-100`}
      >
        <div className="h-[100vh] w-1/2 ">
          {/* Left */}
          <div className="relative flex h-screen flex-col items-center justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            {/* Blur */}
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-rose-700 opacity-50 blur-full" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

            <Hero />
            <Powered />
          </div>
        </div>

        {/* Right */}
        <div className="h-[100vh] w-1/2 overflow-y-auto">
          <div className="flex flex-col items-center bg-[url(../assets/bg-stars.svg)] bg-cover">
            <div className="mt-10 w-[600px] flex flex-col gap-10 justify-center overflow-x-hidden">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
