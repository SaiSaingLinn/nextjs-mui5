import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { DefaultSeo } from 'next-seo'
import SEO from 'next-seo.config'
import { Provider } from 'react-redux'
import { useStore } from 'store/reducer'
import { AuthProvider } from "src/components/auth-provider/auth-provider"
import { AuthGuard } from 'src/components/auth-provider/auth-guard'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from 'src/themes/create-emotion-cache'
import theme from 'src/themes/theme'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

const LayoutComponent = dynamic(() => import('src/layouts/layout'), { 
  loading: () => 
    <div style={{
      width: '100%', 
      height: '100%', 
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 99999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <img style={{width: '30px'}} src='/loading.gif' alt="app loading" />
    </div>, 
});

function MyApp(props) {
  

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {
              // if requireAuth property is present - protect the page 
              Component.requireAuth ? (                
                <AuthGuard>
                  <LayoutComponent>
                    <DefaultSeo {...SEO} />
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <Component {...pageProps} />
                  </LayoutComponent>
                </AuthGuard>                
              ) : (
                // public page
                <LayoutComponent>
                  <DefaultSeo {...SEO} />
                  {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                  <CssBaseline />
                  <Component {...pageProps} />
                </LayoutComponent>
              )
            }
          </AuthProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  )
}

export default MyApp
