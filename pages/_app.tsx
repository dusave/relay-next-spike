import { AppProps } from 'next/app'
import { ReactRelayContext } from 'react-relay'
import { useEnvironment } from '../lib/relay'


export default function App({ Component, pageProps }: AppProps) {
  const environment = useEnvironment(pageProps.initialRecords)

  return (
    <ReactRelayContext.Provider value={{ environment }}>
      <Component {...pageProps} />
    </ReactRelayContext.Provider>
  )
}