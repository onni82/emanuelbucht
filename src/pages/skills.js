import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Skills() {
  return (
    <div id="content">
      <Seo title="Skills and Tools" />
      <Layout pageProp="skills">
        <div id="page">
          <Header headerText="Skills" className="centered" />
          <h2>Media Skills</h2>
          <p>Music writing, lyric writing, audio engineering, music production &amp; video production</p>
          <h2>Languages</h2>
          <p>English, Swedish &amp; some Korean</p>
          <hr />
          <Header headerText="Tools" className="centered" />
          <h2>Operative Systems</h2>
          <p>Windows, macOS (Mac OSX), Ubuntu (Desktop &amp; Server)</p>
          <h2>Digital Audio Workstations</h2>
          <p>Avid Pro Tools, Image-Line FL Studio &amp; Apple Logic Pro</p>
          <h2>Video Editing Software</h2>
          <p>Adobe Premiere Pro, Avid Media Composer, Apple Final Cut Pro</p>
        </div>
      </Layout>
    </div>
  );
}
