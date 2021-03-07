import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import BlogPostBody from "../components/BlogPostBody/BlogPostBody"
import SimilarArticlesList from "../components/SimilarArticles/SimilarArticles"


const subscribeSectionData = {
  subhead:"WEEKLY SALES NEWSLETTER",
  title:"Actionable sales advice",
  text:"Get actionable sales advice read by over 200,000 sales professionals every week.",
  ctaText:"Subscribe",
}

const BlogPostTemplate = props => {
  const postData = props.data.contentfulBlogPost
  const postBody = props.data.contentfulBlogPost.blogBody.childMarkdownRemark.html
  const htmlAst = props.data.contentfulBlogPost.blogBody.childMarkdownRemark.htmlAst
  const headings = props.data.contentfulBlogPost.blogBody.childMarkdownRemark.headings
  const slug = props.data.contentfulBlogPost.slug
  const postInfo = props.pageContext
  const blogPostTitle = props.data.contentfulBlogPost.blogPostTitle
  return (
    <Layout>
      <Container>
      <SEO title={blogPostTitle} keywords={[`Xperiencify`, `Xperiencify blog`, `courses`]}/>
      <BlogPostBody 
        data={postBody} 
        headings={headings} 
        slug={slug} 
        postData={postData}
        htmlAst={htmlAst}
      />
      <SubscribeSection 
        subhead={subscribeSectionData.subhead}
        title={subscribeSectionData.title}
        text={subscribeSectionData.text}
        ctaText={subscribeSectionData.ctaText}
        type="small"
      />
      
    </Container>
    <SimilarArticlesList categories={postInfo.category} currentArticlePath={postInfo.slug}  />
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
          htmlAst
          timeToRead
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





