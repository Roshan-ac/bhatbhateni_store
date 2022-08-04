import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '../Components/Navbar'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return(

    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
