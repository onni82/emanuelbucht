import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Logo from "../images/logo3.png"

const ListLink = props => (
  <li className="headerlink">
    <Link to={props.to} className={props.className}>{props.children}</Link>
  </li>
)

export default function Layout({ pageProp, location, children }) {
  return (
    <div id="boxcontent">
      <img src={Logo} alt="Emanuel Bucht" height="36" className="headerimg" />
      <ul className="centered">
        <ListLink to="/" activeClassName="active">HOME</ListLink>
        <ListLink to="/video/" activeClassName="active">VIDEO PRODUCTION</ListLink>
        <ListLink to="/audio/" activeClassName="active">AUDIO ENGINEERING</ListLink>
        <ListLink to="/sound/" activeClassName="active">SOUND DESIGN</ListLink>
        <ListLink to="/music/" activeClassName="active">MUSIC WRITING</ListLink>
        <ListLink to="/voice/" activeClassName="active">VOICE ACTING</ListLink>
        <ListLink to="/education/" activeClassName="active">EDUCATION</ListLink>
        <ListLink to="/skills/" activeClassName="active">SKILLS &amp; TOOLS</ListLink>
        <ListLink to="/contact/" activeClassName="active">ABOUT &amp; CONTACT</ListLink>
      </ul>
      {children}
      <br />
      <div id="footer"><p>Copyright &copy; 2022 <span className="blacktext">Onni August Emanuel Bucht</span></p></div>
    </div>
  )
}
