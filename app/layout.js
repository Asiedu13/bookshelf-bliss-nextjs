import { HomeNav } from './components/Nav/HomeNav';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bookshelf Bliss | Home',
  description: 'All the books you can read. The largest library on the internet',
  keywords: 'book, books, library,comedy,romance, theology, mystic '
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* beige and white partitioned background */}
        <span className="bg-[white] w-[45vw] h-[100vh] -z-10 fixed border-2 border-solid border-[blue]"></span>
        <span className="bg-[#f0eee2] w-[55vw] h-[100vh] fixed -z-10 "></span>
        <div className='px-8 py-4'>
          <HomeNav />
        </div>
        {children}
      </body>
    </html>
  );
}
