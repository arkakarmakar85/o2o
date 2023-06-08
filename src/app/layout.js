
import './globals.css'
import Script from 'next/script';

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: process.env.NEXT_PUBLIC_BASE_APP_NAME +" | Premium directory and listings template by"+ process.env.NEXT_PUBLIC_BASE_APP_NAME,
  description: 'Premium directory and listings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
        <link rel="stylesheet" href="/css/bootstrap.min.css"  />
        <link rel="stylesheet" href="/css/style.css"  />
        <link rel="stylesheet" href="/css/vendors.css"  />
        <link rel="stylesheet" href="/css/custom.css"  />  
        {children}
        <Script src="https://maps.googleapis.com/maps/api/js?sensor=false" />
        <Script src="https://code.jquery.com/jquery-3.3.1.min.js" />
        <Script src="/js/common_scripts.js" />
        <Script src="/js/functions.js" />
        <Script src="/assets/validate.js" />
        
        {/* <Script src="js/animated_canvas_min.js" /> */}

        
        <Script src="/js/markerclusterer.js" />
        <Script src="/js/map.js" />
        <Script src="/js/infobox.js" />
      </body>
    </html>
  )
}
