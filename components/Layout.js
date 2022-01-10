import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { DarkModeContext } from '../context/darkMode'
import { useContext } from 'react'

const Layout = ({ children }) => {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div
      className={`overflow-hidden min-h-screen ${
        darkMode ? 'dark' : ''
      } flex flex-col font-sans `}
    >
      <Head>
        <title>Rodrigo Nascimento's Portfolio</title>
        <meta
          name="title"
          property="og:title"
          content="Rodrigo Nascimento's Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta name="url" property="og:url" content="https://rods.dev" />
        <meta
          name="description"
          property="og:description"
          content="Personal web developer portfolio from Rodrigo Nascimento"
        />
        <meta
          name="image"
          property="og:image"
          content="https://rod-app-bucket.s3.eu-north-1.amazonaws.com/feat_image.png"
        />
        <link rel="icon" href="/rod-favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"
        />
      </Head>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
