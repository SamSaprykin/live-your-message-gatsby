import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import BlogListing from "../components/BlogListing/BlogListing"
import useFeaturedPost from "../hooks/useFeaturedPost"
import BlogCard from "../components/BlogCard/BlogCard"
import CategoryList from "../components/CategoryList/CategoryList"
import SubscribeSection from "../components/SubscribeSection/SubscribeSection"
import SEO from "../components/seo"
const subscribeSectionData = {
  subhead:"WEEKLY SALES NEWSLETTER",
  title:"Actionable sales advice",
  text:"Get actionable sales advice read by over 200,000 sales professionals every week.",
  ctaText:"Subscribe",
}

const bannerAdData = {
  title:"Close more deals.",
  text:"Supercharge your sales with the best CRM for startups and SMBs. Get pipeline view, calling, lead management, email automation, and more.",
  cta:"Start your free trial",
  trial:"14 days free trial.No credit card required.",
  imageSrc:"/close-crm-screenshot.svg",
}

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
    <SEO title="Xperiencify blog posts" keywords={[`Xperiencify`, `Xperiencify blog`, `courses`]} />
    <Container>
        {featured_post}
        <CategoryList categories={categoriesList} listingType="/blog"/>
        <BlogListing data={blogPosts} bannerAdData={bannerAdData}/>
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