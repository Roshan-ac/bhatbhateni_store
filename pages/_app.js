import '../styles/globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Provider } from 'react-redux'
import Store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )


}

export default MyApp
