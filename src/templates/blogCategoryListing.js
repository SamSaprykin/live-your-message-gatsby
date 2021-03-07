import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import BlogListing from "../components/BlogListing/BlogListing"
import CategoryList from "../components/CategoryList/CategoryList"

const BlogCategoryPostListing = props => {
  const blogPosts = props.data.allContentfulBlogPost.edges
  const categoriesList = props.pageContext.categoryList
  const currentCat = props.pathContext.category
  return (
  <Layout>
    <SEO title={`Xperiencify ${currentCat}`} keywords={[`Xperiencify`, `courses guide`, `courses`]} />
    <Container>
        <CategoryList categories={categoriesList} listingType="/blog"/>
        <BlogListing data={blogPosts} />
    </Container>
  </Layout>
  )
}

export default BlogCategoryPostListing



export const BlogCategoryListingPageQuery = graphql`
  query BlogCategoryListingQuery($skip: Int!, $limit: Int!,$category: String!) {
    allContentfulBlogPost(
        skip: $skip, 
        limit: $limit, 
        sort: {fields: createdAt},
        filter: {blogPostCategory: {eq: $category}}) {
      edges {
        node {
            slug
            id
            blogPostAuthor
            blogPostCategory
            blogPostIntro
            blogPostTitle
            blogPostMainImage {
              id
              title
              fluid(maxWidth: 600) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            blogBody {
              childMarkdownRemark {
                timeToRead
              }
            }
            featured
        }
      }
    }
  }
`