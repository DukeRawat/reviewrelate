import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div>
          <div className="headline">
            <img className="rrlogo" src="/assets/rrlogo.png" alt="Temporary blog- Featured Shot"/>
            <p className="box3 sb14">{data.site.siteMetadata.home.title}</p>
          </div>
          <div className="primary-content">
            <p>{data.site.siteMetadata.home.description}</p>
          </div>
          <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
        </div>
        <div>
          <h2>Recent Posts &darr;</h2>
          <Link to='/contact' className="button -primary">Get in touch &darr;</Link>
        </div>
      </div>
    )}
  />
)