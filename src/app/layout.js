import './globals.css'

export const metadata = {
  title: "Giriş Yap",
  description: "Giriş Sayfası"
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
