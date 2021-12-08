import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Audio() {
  return (
    <div id="content">
      <Seo title="Audio Engineering" />
      <Layout pageProp="audio">
        <div id="page">
          <Header headerText="Audio Engineering" />
          <h2>ONB singles &amp; EPs</h2>
          <p>Mixing, mastering, music writing, lyric writing.</p>
          <p><a href="https://soundcloud.com/onbprod/albums" target="_blank">SoundCloud</a></p>
          <p><a href="https://open.spotify.com/artist/5M7FyeKVvZ7I1gRRb5nIhw?si=pTpE5b4MTaSCJa__mWfIiA" target="_blank">Spotify</a></p>
          <p><a href="https://music.apple.com/se/artist/onb/1455795243?l=en" target="_blank">Apple Music</a></p>
          <br />
          <h2>Belle - Only Only</h2>
          <p>Mixing.</p>
          <p><a href="https://open.spotify.com/track/5pv0PaTItNxP8qkOjPtaDO?si=ba09007d4ade4987" target="_blank">Spotify</a></p>
          <br />
        </div>
      </Layout>
    </div>
  );
}
