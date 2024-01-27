import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Gatsby from "../images/gatsby.png"
import GitHub from "../images/github.png"

export default function Programming() {
  return (
    <div id="content">
      <Seo title="Programming & Web Development" />
      <Layout pageProp="programming">
        <div id="page">
          <Header headerText="Programming" className="centered" />
          <img src={GitHub} alt="GitHub Logo" height="55" className="skillLogo" />
          <h2>Command Line Based Role Playing Game</h2>
          <p>Created as a school assignment during my studies in C++. Can be found on <a href="https://github.com/onni82/projektuppgift">GitHub</a>.</p>
          <p>Languages: C++.</p>
          <hr />
          <Header headerText="Web Development" className="centered" />
          <img src={GitHub} alt="GitHub Logo" height="55" className="skillLogo" />
          <img src={Gatsby} alt="Gatsby Logo" height="55" className="skillLogo" />
          <h2>This Website</h2>
          <p>This website is built using <a href="https://www.gatsbyjs.com/">Gatsby</a> and the code is hosted on <a href="https://github.com/onni82/emanuelbucht">GitHub</a>.</p>
          <p>Languages: Javascript (React and node.js), HTML and CSS.</p>
        </div>
      </Layout>
    </div>
  );
}
