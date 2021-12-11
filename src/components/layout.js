import React from "react"
import { Link } from "gatsby"
import Logo from "../images/logo3.png"

const ListLink = props => (
  <li className="headerlink">
    <Link to={props.to} className={props.className}>{props.children}</Link>
  </li>
)

export default function Layout({ pageProp, children }) {
  return (
    <div>
      <div id="header">
        <img src={Logo} alt="Emanuel Bucht" height="36" className="headerimg" />
        <ul>
          <ListLink to="/" className={pageProp == "home" && "active"}>HOME</ListLink>
          <ListLink to="/video" className={pageProp == "video" && "active"}>VIDEO PRODUCTION</ListLink>
          <ListLink to="/audio" className={pageProp == "audio" && "active"}>AUDIO ENGINEERING</ListLink>
          <ListLink to="/sound" className={pageProp == "sound" && "active"}>SOUND DESIGN</ListLink>
          <ListLink to="/music" className={pageProp == "music" && "active"}>MUSIC WRITING</ListLink>
          <ListLink to="/voice" className={pageProp == "voice" && "active"}>VOICE ACTING</ListLink>
          <ListLink to="/education" className={pageProp == "education" && "active"}>EDUCATION</ListLink>
          <ListLink to="/skills" className={pageProp == "skills" && "active"}>SKILLS &amp; TOOLS</ListLink>
          <ListLink to="/contact" className={pageProp == "contact" && "active"}>CONTACT</ListLink>
          <ListLink to="/about" className={pageProp == "about" && "active"}>ABOUT ME</ListLink>
        </ul>
      </div>
      {children}
      <br />
      <div id="footer"><p>Copyright &copy; 2021 <span className="blacktext">O.A.E. Bucht</span></p></div>
    </div>
  )
}
