import Footer from "@/components/footer"
import Header from "@/components/header"
import ScrollToTopButton from "@/components/ScrollToTopButton"


// Styling
import "./globals.css";

export const metadata = {
  title: 'E-shop',
  description: 'Obtenir votre numéro facilement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTopButton/>
      </body>
    </html>
  )
}
