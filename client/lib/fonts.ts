import localFont from 'next/font/local'
import { Roboto } from 'next/font/google'

export const sans = localFont({
  src: [
    {
    path: '../public/fonts/IRANSansDN.ttf',
    weight: '400',
    style:"regular"
    },
    {
      path: '../public/fonts/IRANSansDN-Bold.ttf',
      weight: '500',
      style:"bold"
    },
    {
      path: '../public/fonts/IRANSansDN-Light.ttf',
      weight: '300',
      style:"light"
    },
  ],
  variable: '--font-sans'
})

export const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
})
