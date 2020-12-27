import React from "react"
import "../style.css"
import Appbar from "../components/appbar"
import { Helmet } from "react-helmet"

function News() {
  return (
    <div className="container-fluid">
      <Appbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>News | Erick</title>
      </Helmet>
    </div>
  )
}

export default News
