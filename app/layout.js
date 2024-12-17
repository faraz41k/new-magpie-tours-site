"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/header'
import FooterSection from '../components/footer-section'
import Navbar from '../components/navigation/Navbar'
import TopBar from '../components/TopBar'
import {GoogleTagManager} from '@next/third-parties/google'
import { useEffect } from 'react'

 



const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Magpie Tours : "Experience the best of Pakistan with Magpie Tours. From skiing and mountaineering to trekking and climbing, immerse yourself in rich cultural traditions, religious sites, and local cuisine. We provide comprehensive logistics and arrangements for a seamless adventure. Discover Pakistan with us!"',
//   description: '"Experience the best of Pakistan with Magpie Tours. From skiing and mountaineering to trekking and climbing, immerse yourself in rich cultural traditions, religious sites, and local cuisine. We provide comprehensive logistics and arrangements for a seamless adventure. Discover Pakistan with us!"',
// }

export default function RootLayout({ children }) {
  const gtmId = 'GTM-5CCFQZ29';  // Replace with your GTM ID

  useEffect(() => {
    // Create GTM script tag for the head
    const script = document.createElement('script');
    script.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gtmId}');`;
    script.async = true;
    document.head.appendChild(script);

    // Create GTM noscript tag for the body
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }, [gtmId]);

  return (
    <html lang="en">
        <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-5CCFQZ29" />
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
