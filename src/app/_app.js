
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast';
import '../app/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  )
}

export default MyApp