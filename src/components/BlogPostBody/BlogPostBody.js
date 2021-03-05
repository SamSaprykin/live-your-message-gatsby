import React, {useEffect, useState} from 'react'
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import BlogNav from '../BlogNav/BlogNav'
import BlogPostHeader from "../BlogPostHeader/BlogPostHeader"
const BlogPostBody = ({
  postData,
  data,
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
            <div className="body" dangerouslySetInnerHTML={{ __html:  data }} />
        </ContentWrapper>
        <BlogNav headings={headings} slug={slug} posElement={visible} />
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
    max-width:640px;
    
`

const BodyWrapper = styled.div`
    max-width: 1170px;
    width:100%;
    margin-top:48px;
    display:flex;
    justify-content:space-between;
    font-family:Inter,system-ui,sans-serif;
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