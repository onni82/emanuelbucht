import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <div id="content">
      <Seo title="Contact" />
      <Layout pageProp="contact">
        <div id="page">
          <Header headerText="Contact" className="centered" />
          <p>Send me a message!</p>
          <p>Email: <a href="mailto:emanuel.bucht@icloud.com">emanuel.bucht@icloud.com</a></p>
          <p>Instagram: <a href="https://instagram.com/onni82" target="_blank" rel="noreferrer nofollow">@onni82</a> &amp; <a href="https://instagram.com/onbprod" target="_blank" rel="noreferrer nofollow">@onbprod</a></p>
        </div>
      </Layout>
    </div>
  );
}
