import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Posts = () => {
  const data = useStaticQuery(graphql`
    query PostQuery {
        allRestApiPosts(filter: { title: { eq: "qui est esse" } }) {
            edges {
                node {
                    title
                    body
                }
            }
        }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data
//   const social = data

  return (
    <div className="bio">
      {author && (
        <p>
          Written by <strong>{author}</strong> {author || null}
          {/* {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a> */}
        </p>
      )}
    </div>
  )
}

export default Posts
