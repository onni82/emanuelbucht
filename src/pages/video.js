import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Video() {
  return (
    <div id="content">
      <Seo title="Video Production" />
      <Layout>
        <Header headerText="Video Production" />
      </Layout>
    </div>
  );
}
