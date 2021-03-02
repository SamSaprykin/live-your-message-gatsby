import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"
import BlogListing from "../components/BlogListing/BlogListing"
import useFeaturedPost from "../hooks/useFeaturedPost"
import BlogCard from "../components/BlogCard/BlogCard"
import CategoryList from "../components/CategoryList/CategoryList"

const BlogPostListing = props => {
  const blogPosts = props.data.allContentfulBlogPost.edges
  const featuredPost = useFeaturedPost()
  const categoriesList = props.pageContext.categoryList
  const featured_post = (
    <BlogCard 
      type="featured"
      cardData={featuredPost}
    />
  )
  return (
  <Layout>
    <Container>
        {featured_post}
        <CategoryList categories={categoriesList} listingType="/blog"/>
        <BlogListing data={blogPosts}/>
    </Container>
  </Layout>
  )
}

export default BlogPostListing



export const BlogListingPageQuery = graphql`
  query BlogListingQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(skip: $skip, limit: $limit, sort: {fields: createdAt},filter: {featured: {ne: true}}) {
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
            featured
        }
      }
    }
  }
`