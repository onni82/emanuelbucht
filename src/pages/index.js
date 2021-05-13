import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div id="content">
      <Seo title="Home" />
      <Layout pageProp="home">
        <div id="page">       
          <Header headerText="A Professional Music Producer and Audio Engineer - Got Needs? Get In Touch Now!" />
          <br />
          <p><Link to="/contact" className="button">CONTACT</Link></p>
          <br />
          <br />
          <br />
          <h2>Music producer, audio engineer and video editor. Check out my portfolio for each category.</h2>
          <p><Link to="/music">Music Writing</Link></p>
          <p><Link to="/audio">Audio Engineering</Link></p>
          <p><Link to="/video">Video Production</Link></p>
        </div>
      </Layout>
    </div>
  );
}
