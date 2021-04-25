import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li className="headerlink">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <div id="header">
        <ul style={{ listStyle: `none`}}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/video">Video Production</ListLink>
          <ListLink to="/audio">Audio Engineering</ListLink>
          <ListLink to="/music">Music Writing</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/about/">About</ListLink>
        </ul>
      </div>
      {children}
    </div>
  )
}