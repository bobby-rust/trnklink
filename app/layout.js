import './globals.css'

export const metadata = {
  title: 'TrnkLink: The all-in-one link in bio tool',
  description: 'Create your own unique & highly customizable bio page. Custom components & colors. Multiple ready-to-use layouts.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
