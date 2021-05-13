import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Skills() {
  return (
    <div id="content">
      <Seo title="Skills and Tools" />
      <Layout pageProp="skills">
        <div id="page">
          <Header headerText="Skills" />
          <h2>Media Skills</h2>
          <p>Music writing, lyric writing, audio engineering, music production &amp; video production</p>
          <h2>Languages</h2>
          <p>English, Swedish &amp; some Korean</p>
          <hr />
          <Header headerText="Tools" />
          <h2>Operative Systems</h2>
          <p>Windows, macOS (previously known as Mac OSX), Ubuntu (Desktop &amp; Server)</p>
          <h2>Digital Audio Workstations</h2>
          <p>Avid Pro Tools, Image-Line FL Studio &amp; Apple Logic</p>
        </div>
      </Layout>
    </div>
  );
}
