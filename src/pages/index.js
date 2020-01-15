import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () =>
  <Layout>
    <SEO title="tmergulhao.com"/>
    <header>
      <h1 style={{ marginBottom: 0 }}>Hello!</h1>
      <p>I'm Tiago, an interaction designer based in Brasília, Brazil.</p>
    </header>
    <h2>Open Source</h2>
    <div className="two-column">
      <a className="project" href="https://github.com/tmergulhao/Ambience">
        <img className="has-border" alt="Ambience" src="./Ambience.png"/>
        <h3>Ambience</h3>
        <p className="description">Dark mode and brightness-aware accessibility theme switching for iOS</p>
      </a>
      <a className="project" href="https://github.com/MengTo/Angle-Sketch-Plugin">
        <img alt="Angle Plugin" src="./Angle.png"/>
        <h3>Angle Plugin</h3>
        <p className="description">One-click perspective transform plugin for Sketch</p>
      </a>
    </div>
    <h2>Projects I helped</h2>
    <div className="two-column">
      <a className="project" href="https://designcode.io/tiago">
        <img className="has-border" alt="Design+Code" src="./Design_Code.png"/>
        <h3>Design+Code</h3>
        <p className="description">Tech learning platform for beginners and designers</p>
      </a>
      <a className="project" href="https://apps.apple.com/za/app/ella-sight-singing/id1301456113">
        <img alt="Ella - Sight Singing" src="./Ella.png"/>
        <h3>Ella - Sight Singing</h3>
        <p className="description">Train your ear by singing</p>
      </a>
    </div>
    <h2>Hire me</h2>
    <p>I’m always interested in new projects. Give me a shout at <a href="mailto:me@tmergulhao.com">me@tmergulhao.com</a>.</p>
  </Layout>

export default IndexPage
