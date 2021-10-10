import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Education() {
  return (
    <div id="content">
      <Seo title="Educational Experience" />
      <Layout pageProp="education">
        <div id="page">
          <Header headerText="Educational Experience" />
          <h2>Dalarna University</h2>
          <p>2018-2021 - Bachelor of Science - Sound and Music Production</p>
          <hr />
          <Header headerText="Certifications" />
          <h2>Avid Pro Tools</h2>
          <p>Certified User - PT101+PT110</p>
        </div>
      </Layout>
    </div>
  );
}
