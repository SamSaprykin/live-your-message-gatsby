import { graphql, useStaticQuery } from "gatsby"

const useFeaturedBlogPost = () => {
  const { allContentfulBlogPost } = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(filter: {featured: {eq: true}}) {
            edges {
              node {
                slug
                id
                blogPostAuthor
                blogPostCategory
                blogPostIntro
                featured
                blogPostTitle
                blogPostMainImage {
                  id
                  title
                  fluid(maxWidth: 600) {
                    ...GatsbyContentfulFluid_withWebp
                  }
                }
            }
          }
        }
      }
    `
  )
  return allContentfulBlogPost?.edges[0]?.node
}
export default useFeaturedBlogPost