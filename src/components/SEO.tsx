import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export interface SEO {
    title? : string
    subtitle? : string
    description? : string
    keywords? : string
    twitterHandle? : string
    image? : string
}

export interface GatsbyConfig {
    site : {
        siteMetadata : SEO
    }
}

const SearchEngineOptimization = (pageProps : SEO = {}) =>
    <StaticQuery
        query={ query }
        render={ (props : GatsbyConfig) => {

        const {
            title,
            description,
            keywords,
            twitterHandle,
            image,
        } = {
            ...props.site.siteMetadata,
            ...pageProps,
        }

        return <Helmet>
            <html lang="en" />
            <title>{ title }</title>
            <meta name='description' content={ description }/>
            <meta name='keywords' content={ keywords }/>
            <meta name='application-name' content={ props.site.siteMetadata.title }/>
            
            <meta name='twitter:card' content='summary_large_image'/>
            <meta name='twitter:site' content={ twitterHandle }/>
            <meta name='twitter:creator' content={ twitterHandle }/>
            
            <meta property='og:title' id='fbtitle' content={ title }/>
            <meta property='og:image' id='fbimage' content={ image }/>
            <meta property='og:url' id='ogurl' content='http://tmergulhao.com'/>
            <meta property='og:type' id='ogtype' content='website'/>
            <meta property='og:title' id='ogtitle' content={ title }/>
            <meta property='og:description' id='ogdescription' content={ description }/>
            <meta property='og:image' id='ogimage' content={ image }/>
        </Helmet>
    }}/>

export default SearchEngineOptimization

const query = graphql`
query {
    site {
        siteMetadata {
            title
            subtitle
            description
            keywords
            twitterHandle
        }
    }
}
`

// { name: 'msapplication-TileColor', content: '#FFFFFF'},
// { name: 'msapplication-TileImage', content: 'favicons/mstile-144x144.png'},
// { name: 'msapplication-square70x70logo', content: 'favicons/mstile-70x70.png'},
// { name: 'msapplication-square150x150logo', content: 'favicons/mstile-150x150.png'},
// { name: 'msapplication-square310x150logo', content: 'favicons/mstile-310x150.png'},
// { name: 'msapplication-square310x310logo', content: 'favicons/mstile-310x310.png'},

// { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/favicons/apple-touch-icon-57x57.png'},
// { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/favicons/apple-touch-icon-114x114.png'},
// { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/favicons/apple-touch-icon-72x72.png'},
// { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/favicons/apple-touch-icon-144x144.png'},
// { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/favicons/apple-touch-icon-60x60.png'},
// { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/favicons/apple-touch-icon-120x120.png'},
// { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/favicons/apple-touch-icon-76x76.png'},
// { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/favicons/apple-touch-icon-152x152.png'},
// { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/favicon-96x96.png'},
// { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png'},
// { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png'},
// { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicons/favicon-128x128.png'},
// { rel: 'icon', type: 'image/png', sizes: '196x196', href: '/favicons/favicon-196x196.png', },
