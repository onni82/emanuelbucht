import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Seo from "../components/seo"
import Layout from "../components/layout"

export default function Home() {
  return (
    <div id="content">
      <Seo title="Home" />
      <Layout pageProp="home">
        <div id="page">
          <Header headerText="Do You Need A Music Producer, Audio Engineer, Sound Designer, Voice Actor or a Video Producer?" className="centered" />
          <p>Onni August Emanuel Bucht is the right person for your business.</p>
          <p>With a Bachelor of Arts degree in Sound and Music Production and training in Video Production, he is perfect for any kind of visual or auditory production.</p>
          <p>As he has studied foreign languages and cultures, he also has a good understanding of people. This means that any work together with him will go smoothly.</p>
          <br />
          <div className="grid">
            <div class="td img_video">
              <Link to="/video">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">Video Production</h2>
                </div>
              </Link>
            </div>
            <div class="td img_audio">
              <Link to="/audio">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">Audio Engineering</h2>
                </div>
              </Link>
            </div>
            <div class="td img_sound">
              <Link to="/sound">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">Sound Design</h2>
                </div>
              </Link>
            </div>
            <div class="td img_music">
              <Link to="/music">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">Music Writing</h2>
                </div>
              </Link>
            </div>
            <div class="td img_voice">
              <Link to="/voice">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">Voice Acting</h2>
                </div>
              </Link>
            </div>
            <div class="td img_education">
              <Link to="/education">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">Education</h2>
                </div>
              </Link>
            </div>
            <div class="td img_skills">
              <Link to="/skills">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">Skills & Tools</h2>
                </div>
              </Link>
            </div>
            <div class="td img_contact">
              <Link to="/contact">
                <div class="hidden">#</div>
                <div class="caption">
                  <h2 className="tb">About &amp; Contact</h2>
                </div>
              </Link>
            </div>
          </div>
          <br />
        </div>
      </Layout>
    </div>
  );
}
