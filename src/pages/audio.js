import React from "react"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Audio() {
  return (
    <div id="content">
      <Seo title="Audio Engineering" />
      <Layout pageProp="audio">
        <div id="page">
          <Header headerText="Audio Engineering" className="centered" />
          <div className="grid">
            <div class="td red img_onb">
              <a href="https://linktr.ee/onbprod" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="captionred">
                  <h2 className="tb">ONB's singles &amp; EPs</h2>
                  <h3 className="tb">Mixing, mastering, music writing, lyric writing</h3>
                </div>
              </a>
            </div>
            <div class="td darkgrey img_belleonlyonly">
              <a href="https://open.spotify.com/track/5pv0PaTItNxP8qkOjPtaDO?si=ba09007d4ade4987" target="_blank" rel="noreferrer nofollow">
                <div class="hidden">#</div>
                <div class="captiondarkgrey">
                  <h2 className="tb">Belle - Only Only</h2>
                  <h3 className="tb">Mixing</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
