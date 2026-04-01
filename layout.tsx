import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// ── Google Fonts via next/font (optimized) ──
const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['300', '400', '600'],
  style:    ['normal', 'italic'],
  variable: '--font-cormorant',
  display:  'swap',
})

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500'],
  variable: '--font-dm-sans',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       'EPICUS — Asesoría Inmobiliaria en Monterrey',
  description: 'Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana. 95 proyectos activos, más de 4,480 unidades disponibles.',
  keywords:    ['inmobiliaria monterrey', 'asesoría inmobiliaria', 'inversión inmobiliaria', 'departamentos monterrey'],
  openGraph: {
    title:       'EPICUS — Asesoría Inmobiliaria en Monterrey',
    description: 'Asesoría e inteligencia inmobiliaria en Monterrey y área metropolitana.',
    url:         'https://epicus.com.mx',
    siteName:    'EPICUS',
    locale:      'es_MX',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
