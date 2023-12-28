import './globals.css'
import { Poppins } from 'next/font/google'
export const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata = {
  title: 'Langit Link',
  description: 'Link Langit Amaravati',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
