
import Helmet from "react-helmet"
import { } from './header';
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import * as React from "react"
import Header from "./header"
import IconBar from "./iconBar"
import SubBar from "./subBar"
// import Footer from "./footer"
// import SiteMap from "./siteMap"
import "../styles/destyle.css"
import "../styles/components.scss"



const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        {/* ヘッドメタデータ */}
        <title>管理人のまとめコンテンツ</title>
        <meta name="description" content="まとめページです。管理人の主観に基づいたおススメ記事をテーマごとにまとめて紹介しています。" />
        <meta name="keywords" content="" />
        <meta name="language" content="Japanese" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* 構造化データ JSON */}
      </Helmet>
      <body>
        <Header />
        <main className="mainFlame">
          <IconBar />
          <div className="pageBarFlame">
            {children}
          </div>
          <SubBar />
        </main>
      </body>
    </>
  )
}


export default Layout
