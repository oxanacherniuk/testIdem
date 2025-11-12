import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Онлайн каталог',
  description: 'Мини-приложение "Онлайн каталог"',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}