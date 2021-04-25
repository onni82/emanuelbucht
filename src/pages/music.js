import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Music() {
  return (
    <div id="content">
      <Seo title="Music Writing" />
      <Layout>
        <Header headerText="Music Writing" />
        <h2>ONB singles &amp; EPs</h2>
        <p>Music writing, lyric writing, mixing, mastering.</p>
        <p><a href="https://soundcloud.com/onbprod/albums">SoundCloud</a></p>
        <p><a href="https://open.spotify.com/artist/5M7FyeKVvZ7I1gRRb5nIhw?si=pTpE5b4MTaSCJa__mWfIiA">Spotify</a></p>
        <p><a href="https://music.apple.com/se/artist/onb/1455795243?l=en">Apple Music</a></p>
        <br />
      </Layout>
    </div>
  );
}
