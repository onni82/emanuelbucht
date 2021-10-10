import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Voice() {
  return (
    <div id="content">
      <Seo title="Voice Acting" />
      <Layout pageProp="education">
        <div id="page">
          <Header headerText="Voice Acting" />
          <h2>Aragami 2 (2021 Video Game)</h2>
          <p>Voice acting as Nobu and Iwao.</p>
          <p><a href="https://youtu.be/m9sTgup3DOI?t=697">Nobu - cutscene</a></p>
          <p><a href="https://youtu.be/m9sTgup3DOI?t=1045">Iwao - interaction</a></p>
          <p><a href="https://youtu.be/m9sTgup3DOI?t=1406">Iwao - interaction</a></p>
          <p><a href="https://youtu.be/koua8-K1oCQ?t=1825">Iwao - interaction</a></p>
          <hr />
          <h2>The Story of Cereal by Thais Hull (A friend's school assignment)</h2>
          <p><a href="https://youtu.be/VTKLzcU3Eks">All voices</a></p>
        </div>
      </Layout>
    </div>
  );
}
