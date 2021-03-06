import React, {useEffect, useState} from 'react'
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import BlogNav from '../BlogNav/BlogNav'
import BlogPostHeader from "../BlogPostHeader/BlogPostHeader"
import { device } from "../../styles/constants"
import rehypeReact from "rehype-react"
import BannerBlogAd from "../BannerBlogAd/BannerBlogAd"

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { "banner-blog-ad": BannerBlogAd },
  }).Compiler

const BlogPostBody = ({
  postData,
  data,
  htmlAst,
  headings,
  slug,
  ...otherProps
}) => {
    const [ref, inView] = useInView({
        rootMargin: "-330px",
    })
    const [visible, setVisible] = useState("false")
    useEffect(() => {
        if (inView) {
          setVisible("true")
        } else {
          setVisible("false")
        }
    }, [inView])
  return (
    <BodyWrapper  ref={ref}>
        <ContentWrapper>
            <BlogPostHeader 
                postTitle={postData.blogPostTitle}
                postMainImage={postData.blogPostMainImage}
                postCategory={postData.blogPostCategory}
                postAuthor={postData.blogPostAuthor}
            />
            <BlogNav headings={headings} slug={slug} posElement={visible} type="mobile"/>
            {
                renderAst(htmlAst)
            }
        </ContentWrapper>
        <BlogNav headings={headings} slug={slug} posElement={visible} type="desktop"/>
    </BodyWrapper>
  )
}




export default BlogPostBody

BlogPostBody.propTypes = {

}

BlogPostBody.defaultProps = {

}

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width: 680px;

`

const BodyWrapper = styled.div`
    max-width: 1170px;
    width:100%;
    margin-top:48px;
    margin-bottom:128px;
    display:flex;
    justify-content:space-between;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.tablet} {
        max-width: 680px;
        margin:48px auto 72px;
    }
    p {
        margin-bottom:24px;
        color:#3e444e;
    }
    h3 {
        color: #3e444e;
    }
    .gatsby-resp-image-image {
        border-radius: 8px !important;
    }
    source {
        border-radius: 8px !important;
    }
    .gatsby-resp-image-background-image {
        border-radius: 8px !important;
    }
    .gatsby-resp-image-wrapper {
        border-radius: 8px !important;
        margin:48px 0;
    }
`