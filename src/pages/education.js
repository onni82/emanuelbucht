import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Hda from "../images/hda.png"
import Avid from "../images/avid-cert-logo-pt-user_2020.jpg"
import BeLicensed from "../images/belicensed.png"

export default function Education() {
  return (
    <div id="content">
      <Seo title="Educational Experience" />
      <Layout pageProp="education">
        <div id="page">
          <Header headerText="Educational Experience" className="centered" />
          <img src={BeLicensed} alt="Be Licensed Logo" height="55" className="skillLogo" />
          <h2>Be Licensed</h2>
          <p>Feb 2022-Mar 2022 - Vocational Traing - Video Production</p>
          <p>Stockholm, Sweden (online course)</p>
          <hr />
          <img src={BeLicensed} alt="Be Licensed Logo" height="55" className="skillLogo" />
          <h2>Be Licensed</h2>
          <p>Dec 2021-Jan 2022 - Vocational Traing - Sound Production</p>
          <p>Stockholm, Sweden (online course)</p>
          <hr />
          <img src={Hda} alt="Dalarna University Logo" height="55" className="skillLogo" />
          <h2>Dalarna University</h2>
          <p>2018-2021 - Bachelor of Science - Sound and Music Production</p>
          <p>Falun, Sweden</p>
          <hr />
          <Header headerText="Certifications" />
          <img src={Avid} alt="Avid Logo" height="55" className="skillLogo" />
          <h2>Avid Pro Tools</h2>
          <p>Certified User - version 2020 and version 12.8</p>
        </div>
      </Layout>
    </div>
  );
}
