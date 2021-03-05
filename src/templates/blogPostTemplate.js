import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import BlogPostHeader from "../components/BlogPostHeader/BlogPostHeader"
import BlogPostBody from "../components/BlogPostBody/BlogPostBody"

const subscribeSectionData = {
  subhead:"WEEKLY SALES NEWSLETTER",
  title:"Actionable sales advice",
  text:"Get actionable sales advice read by over 200,000 sales professionals every week.",
  ctaText:"Subscribe",
}

const BlogPostTemplate = props => {
  
  const postData = props.data.contentfulBlogPost
  const postBody = props.data.contentfulBlogPost.blogBody.childMarkdownRemark.html
  const headings = props.data.contentfulBlogPost.blogBody.childMarkdownRemark.headings
  const slug = props.data.contentfulBlogPost.slug
  return (
    <Layout>
      <Container>
      <SEO title="Blog post template" />

      <BlogPostBody 
        data={postBody} 
        headings={headings} 
        slug={slug} 
        postData={postData}
      />
      <SubscribeSection 
        subhead={subscribeSectionData.subhead}
        title={subscribeSectionData.title}
        text={subscribeSectionData.text}
        ctaText={subscribeSectionData.ctaText}
        type="small"
      />
    </Container>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query BlogPostQuery($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      blogPostAuthor
      slug
      blogPostCategory
      blogPostTitle
      blogPostMainImage {
        id
        title
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      blogBody {
        childMarkdownRemark {
          html
          headings {
            value
            id
          }
        }
      }
    }
  }
`

export default BlogPostTemplate





