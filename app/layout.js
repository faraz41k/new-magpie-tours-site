import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/header'
import FooterSection from '../components/footer-section'
import Navbar from '../components/navigation/Navbar'
import TopBar from '../components/TopBar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Magpie Tours : "Experience the best of Pakistan with Magpie Tours. From skiing and mountaineering to trekking and climbing, immerse yourself in rich cultural traditions, religious sites, and local cuisine. We provide comprehensive logistics and arrangements for a seamless adventure. Discover Pakistan with us!"',
  description: '"Experience the best of Pakistan with Magpie Tours. From skiing and mountaineering to trekking and climbing, immerse yourself in rich cultural traditions, religious sites, and local cuisine. We provide comprehensive logistics and arrangements for a seamless adventure. Discover Pakistan with us!"',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <TopBar/>
          <Navbar/>
          
          <main className='relative overflow-hidden'>
            {children}
          </main>
          <FooterSection/>
        
          
        </body>
    </html>
  )
}
