import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function About() {
  return (
    <div id="content">
      <Seo title="About" />
      <Layout pageProp="about">
        <div id="page">
          <Header headerText="About" className="centered" />
          <p>Emanuel, a person who is interested in anything music and audio related, has been making music around 11 years.</p>
          <p>&nbsp;</p>
          <p>Before graduating from Dalarna University (in Falun, Sweden) with bachelor's degree in sound and music production, he released multiple singles and EPs under the name of ONB, many in collaboration during his final two years in university.</p>
          <p>&nbsp;</p>
          <p>Also having an interest in East Asian culture, he studied the Japanese language and Japanese culture for 1.5 years at Stockholm University (fall semester 2015 through fall semester 2016). Later he also studied the Korean language and Korean culture as an exchange student in Seoul, South Korea (August 2017 through August 2018).</p>
        </div>
      </Layout>
    </div>
  );
}
