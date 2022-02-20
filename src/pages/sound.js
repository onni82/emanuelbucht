import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Sound() {
  return (
    <div id="content">
      <Seo title="Audio Engineering" />
      <Layout pageProp="sound">
        <div id="page">
          <Header headerText="Sound Design" className="centered" />
          <div className="grid">
            <div class="td yellow img_googledrive">
              <a href="https://drive.google.com/drive/folders/1nIV_nUMOkhtQm4G620Dri8QcYgW9chjD?usp=sharing" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="captionyellow">
                  <h2 className="tb">Sample works on Google Drive</h2>
                  <h3 className="tb">Self-recorded sound. Video copyright does NOT belong to Emanuel Bucht.</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
