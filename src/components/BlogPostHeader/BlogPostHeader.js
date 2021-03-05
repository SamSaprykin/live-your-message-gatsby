import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
    XperiencifyImage,
} from "../BlockElements/BlockElements"

const BlogPostHeader = ({
  postTitle,
  postMainImage,
  postCategory,
  postAuthor,
  ...otherProps
}) => {
  let formatCategory = postCategory.replace(/\s/g, '-').toLowerCase()
  return (
    <HeaderWrapper >
        <FeatureImage>
            <XperiencifyImage 
                src={postMainImage}
            />
        </FeatureImage>
        
        <StyledLink to={`/blog/${formatCategory}`}>{postCategory}</StyledLink>
        <PostTitle>{postTitle}</PostTitle>
        <PostAuthor>{postAuthor} <span>· 5min read </span></PostAuthor>
    </HeaderWrapper>
  )
}

export default BlogPostHeader

BlogPostHeader.propTypes = {

}

BlogPostHeader.defaultProps = {

}

const HeaderWrapper = styled.div`
    max-width: 680px;
    width:100%;
    position: relative;
`

const FeatureImage = styled.div`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgb(155 162 189 / 25%);
    margin-bottom:64px;
`

const StyledLink = styled(Link)`
    font-family:Inter,system-ui,sans-serif;
    color: #4364af;
    font-weight: 600;
    text-transform: uppercase;
    font-size:14px;
    margin-bottom:32px;
    display:block;
`

const PostAuthor = styled.div`
    font-family:Inter,system-ui,sans-serif;
    span {
        color: #7b85a0;
        font-size:16px;
    }
`

const PostTitle = styled.h1`
    font-family:Inter,system-ui,sans-serif;
    font-size:56px;
    margin-bottom:32px;
    font-weight: 700;
    color: #3e444e;
    letter-spacing: -0.5px;
`


    

    