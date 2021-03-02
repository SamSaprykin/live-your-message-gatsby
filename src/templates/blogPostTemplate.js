import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import BlogCard from "../components/BlogCard/BlogCard"
import { Link } from "gatsby"

const BlogPostTemplate = props => {
  
  return (
    <Layout>
      <Container>
      <SEO title="Blog post template" />
      <h1>Hi from the Blog post template</h1>
      <Link to="/">Go back to the homepage</Link>
    </Container>
    </Layout>
  )
}



export default BlogPostTemplate

