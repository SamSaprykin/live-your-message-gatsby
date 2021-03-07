import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { SimilarArticlesFactory } from './SimilarArticlesFactory'
import styled from "styled-components"
import BlogCard from "../BlogCard/BlogCard"
import { device } from "../../styles/constants"
import { Container } from "../layoutComponents"
import { Link } from "gatsby"

const getPostsFromQuery = (posts) => {
    if (posts) {
        return posts.edges
            .map(edge => edge)
            .map(node => Object.assign({}, node, node.fields))
    }
    return []
}

const SimilarArticlesComponent = ({ articles }) => 
    <SectionSimilar>
        <Container>
            <MorePostsHeader>
                <TextHeader>
                    <h3>Related posts</h3>
                    <span>You might also like some of these posts</span>
                </TextHeader>
                <LinkHeader>
                    <Link to="/blog"> Browse all → </Link>
                </LinkHeader>
            </MorePostsHeader>
        
            <WrapperCards>
                
                {articles.map((article, i) => {
                    
                    return (
                        
                            <PostItem key={i}>
                                <BlogCard  
                                    cardData={article.article.node} 
                                    type="standard"
                                    realatedCard="true"
                                /> 
                            </PostItem>
                    )}
                )}
            
            </WrapperCards>
        </Container>
       
    </SectionSimilar>

export default (props) => (
    <StaticQuery
        query={
            graphql`
              query RelatedPostsQuery {
                allContentfulBlogPost(sort: {fields: createdAt}) {
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
            
        `}
        render={data => {
            
            
            const {categories, currentArticlePath} = props
            
            const articles = getPostsFromQuery(data.allContentfulBlogPost)
            
            const SimilarArticles = new SimilarArticlesFactory(
                articles, currentArticlePath
            )
            .setCategories(categories)
            .getArticles()

            return (
                <SimilarArticlesComponent  articles={SimilarArticles} />
            )
            
        }}
    />
)

const SectionSimilar  = styled.div`
    background-color: #fafcfd;
    position: relative;
    padding:40px 0;
    ::after {
        top: -94px;
        content: "";
        position: absolute;
        width: 140%;
        height: 140px;
        background-color: #fafcfd;
        transform: skewY(-4deg);
        z-index: -1;
        @media ${device.mobileL} {
            top: -24px;
        }
    }
   
`

const MorePostsHeader = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media ${device.tablet} {
        padding:16px;
    }
    @media ${device.mobileL} {
        flex-direction:column;
        align-items:flex-start;
    }
    h3 {
        font-size:20px;   
        font-family:Inter,system-ui,sans-serif;
        font-weight: 600;
        margin-bottom:8px;
        color: #3e444e;
    }
    span {
        font-size: 16px;
        line-height: 1.5;
        font-family:Inter,system-ui,sans-serif;
        font-weight: 500;
        margin-bottom:8px;
        color: #7b85a0;
    }
`

const TextHeader = styled.div`
    
`

const LinkHeader = styled.div`
    margin-right:32px;
    @media ${device.tablet} {
        margin:0;
    }
    @media ${device.mobileL} {
        margin-top:8px;
    }
    a {
        font-size:16px;
        font-family:Inter,system-ui,sans-serif;
        display: inline-block;
        font-weight: 600;
        color: #4364af;
    }
`
const WrapperCards = styled.div`
   box-sizing: inherit;
   width:100%;
   margin-left: -16px;
   margin-right: -16px;
   margin-bottom: 60px;
   display: flex;
   flex-wrap: wrap;
   justify-content:space-between;
   @media ${device.tablet} {
        margin:0 auto 32px;
   }
`

const PostItem = styled.div`
  padding:16px;
  box-sizing: inherit;
  width:33%;
  @media ${device.tablet} {
    width:100%;
  }
`