
import Head from 'next/head'
import "../styles/global.css"

function MyApp({Component, pageProps}) {
  return ( 
    <>
      <Head>
        <title>Dating Guide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dab86b49a13e240bce0e04ae5589a2b4"></script>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dab86b49a13e240bce0e04ae5589a2b4&libraries=LIBRARY"></script>
        
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dab86b49a13e240bce0e04ae5589a2b4&libraries=services"></script>
        
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dab86b49a13e240bce0e04ae5589a2b4&libraries=services,clusterer,drawing"></script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Jua&family=Nanum+Brush+Script&family=Sunflower:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp