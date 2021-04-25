import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div id="content">
      <Seo title="Home" />
      <Layout>
        <Header headerText="Home" />
      </Layout>
    </div>
  );
}
