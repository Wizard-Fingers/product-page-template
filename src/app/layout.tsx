import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Template Product Page',
    template: '%s | Template Product Page',
  },
  description:'Template Product Page',
  keywords: ['Template Product Page'],
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
