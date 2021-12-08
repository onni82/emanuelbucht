import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Video() {
  return (
    <div id="content">
      <Seo title="Video Production" />
      <Layout pageProp="video">
        <div id="page">
          <Header headerText="Video Production" />
          <h2>Lightyear Loopers - Do You Want To?</h2>
          <p>Filming and video editing.</p>
          <p><a href="https://youtu.be/SltWgUFtjzA" target="_blank">YouTube</a></p>
        </div>
      </Layout>
    </div>
  );
}
