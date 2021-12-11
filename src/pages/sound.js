import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Sound() {
  return (
    <div id="content">
      <Seo title="Audio Engineering" />
      <Layout pageProp="sound">
        <div id="page">
          <Header headerText="Sound Design" />
          <h2>Sample works on Google Drive</h2>
          <p>Self-recorded sound. Video copyright does NOT belong to Emanuel Bucht.</p>
          <p><a href="https://drive.google.com/drive/folders/1nIV_nUMOkhtQm4G620Dri8QcYgW9chjD?usp=sharing" target="_blank">Public read-only link</a></p>
          <br />
        </div>
      </Layout>
    </div>
  );
}
