import 'styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { UserProvider } from 'src/providers/UserProvider'
import Header from 'src/components/layout/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  )
}
export default MyApp
