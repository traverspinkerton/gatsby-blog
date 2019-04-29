import React from 'react'
import { graphql, Link } from 'gatsby'

import Header from '../components/Header';

const Template = ({data, pageContext}) => {
  console.log(pageContext)
  const {next, prev} = pageContext;
  const { markdownRemark } = data;
  const { title } = markdownRemark.frontmatter;
  const { html } = markdownRemark;
  return (
    <div>
      <Header />
      <div style={{
        margin: '1.5rem',
        padding: '1.5rem',
      }}>
        <h2 style={{
          // fontFamily: 'Avenir Next',
          color: 'steelblue',
        }}>{title}</h2>
        <div className='blogpost'
          dangerouslySetInnerHTML={{__html: html}}
          style={{
            // border: '1px solid steelblue'
          }}
        />
        <div style={{
          marginBottom: '1rem',
        }}>
          {next &&
            <Link to={next.frontmatter.path}>
              Next
            </Link>
          }
        </div>
        <div style={{
          // fontFamily: 'Helvetica Neue'
        }}>
          {prev &&
            <Link to={prev.frontmatter.path}>
              Previous
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path:{eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template;