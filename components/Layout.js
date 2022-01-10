import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { DarkModeContext } from '../context/darkMode'
import { useContext } from 'react'

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
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
        <meta name="image" property="og:image" content="https://rod-app-bucket.s3.eu-north-1.amazonaws.com/feat_image.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXNhLWVhc3QtMSJGMEQCIDiBPYNkkp8EU0kC%2BeFK7m9GrutFUO0Qu%2FgmWYYoF4PNAiBN3QdrduS4AkI1O35QF0I3dhn2w8vD5l94hUJQ8cvqYir2AggZEAAaDDQzMDg3NDY1NjUxMyIMtbiK2zeiSWKjW7elKtMCXa10uvlmkQf7TW1oEO8ECyvnOqD7Hx7Ilndj1sGXdU0NHQ1isKWNfsRTj1avYNLEjOMyHeyE6KG1Z4rS5uc%2F%2BqQdS8Bk1Bf2hozfc07%2Bjh6E84%2FDVTHQD6y5ae1UzKVM44bQ9R1jOu0zWscTOe%2Fo81O6AHLkhbU1C61HoBWqLQVNq28R2rBrSL439pzPR9hUEjqphKNmp0tj2fUQsGn7L%2FJCf4A0%2BYuweBgRlIhLHoperi1l5x8IPhQEXlsYM66c6ODI2pZKCHmIZE15BOuLSrgsggfUURpx1naT3toGBT5t7wmnSVJJPYwBdwwpxTAaRlgcNlYduiOnNg0DJim2%2BI4aPrJhTWoYHQoo9DE3OYZidCPSqpBfot6UCKwNGlKOJjifIfMTT0yJp5KE8eVg%2FfepKdzaUWGLBQiZYYJhRLYSjhCbgNmqsQxyq0K07DExz0xpMIm68Y4GOrQCrhWjRx%2Bj2Do9TwJ8OOs%2B6RdVnDivUZaRzcctQh0PpGq1ZjFEqSznu%2BHp%2FQ03jQnfP1IPysrs2tI%2BX2DuOuFVimUTMselkpWaDHuZxwQiwkW3PuzA3DmfrYZuwZ6aGY6KUVpKFOnomBq9bwZbQTsGSuYJJeJZOvrVEcv0ISL5I2ol1FiKZ%2FWOC7gtBnOxpL9ZvWk4sMjFaRBhOt99LRya5CDXK%2FCnFm8JUMCxP%2BZ532%2BspH0FhJNUApYAgExVOOlhKgl9rT%2FQp38M9iZJHAsqLHltZS61nH7FZdxuXMAbZMSs87xXiwa3MChTuoxhr%2BFa730sHLVzmdob8D%2FB24g5tzJrbRuwV2QrDvzY3Hu0hWcs8WJCBdqtHm7XUBmj8espFTtSO7WcbDsDtqFJtdV5CnwWBrA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220110T162229Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWIURBP4AY46W2GWP%2F20220110%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=35a57cc87a1b9b60bb1d53c6f32f308d7bfa21f2a1e353907eddba084a44e026">
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
