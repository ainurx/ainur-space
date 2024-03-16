
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'

import MainLayout from './layouts/MainLayout'
import TempLayout from './layouts/TempLayout'

import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'ainur.site',
  description: 'Full stack developer',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body style={{ backgroundColor: '#191919'}}>
        <ChakraProvider>
          {/* <MainLayout sidebar={Sidebar} content={children} /> */}
          <TempLayout content={children} />
        </ChakraProvider>
      </body>
    </html>
  )
}
