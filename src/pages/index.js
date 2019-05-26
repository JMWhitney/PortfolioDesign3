import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar";

const IndexPage = () => (
  <Layout>
    <SEO title="Justin Whitney" />

    <div id="background">
      <div className="grid-wrapper">
        <div className="grid">
          <div className="vertical">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="horizontal">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>

    <NavBar />

    <div id="title">
      <h1>
        <span id="outline">Justin Whitney</span>
        <span>Justin Whitney</span>
      </h1>
      <h2>Developer | Full Stack</h2>
    </div>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
