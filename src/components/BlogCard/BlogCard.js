import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { device, colors } from "../../styles/constants"
import Image from "gatsby-image"
import { Link } from "gatsby"

/*
  Card types:
    - standard
    - featured
*/

const BlogCard = ({
  minHeight,
  type,
  children,
  headline,
  summary,
  publishDate,
  categories,
  cardData,
  ...otherProps
}) => {
  
  return (
    <StyledLink to={`/blog/${cardData.slug}`}>
      <MainCard
        otherProps={otherProps}
        type={type}
      >
        <ImageCover  type={type}>
          <Image fluid={cardData.blogPostMainImage.fluid}  alt="Blog cover"/> 
        </ImageCover>
        <CardContent type={type}>
          <CategoryBlog type={type}>
                {cardData.blogPostCategory}
          </CategoryBlog>
          <TitleBlogCard type={type}>
                {cardData.blogPostTitle}
          </TitleBlogCard>
          <TextCard type={type}>
                {cardData.blogPostIntro}
          </TextCard>
          {type === "standard" && (
            <BlogCardInfo>
              <BlogPostAuthor type={type}>
                {cardData.blogPostAuthor}
              </BlogPostAuthor>
              <BlogPostReadingTime>
                9 min read
              </BlogPostReadingTime>
            </BlogCardInfo>
          )}
        {type === "featured" && (
            <BlogCardInfo>
              <BlogPostAuthor type={type}>
                Murray Gray · 9 min read
              </BlogPostAuthor>
              <CardCta>
                Keep reading →
              </CardCta>
            </BlogCardInfo>
          )}
        </CardContent>
      </MainCard>
    </StyledLink>
  )
}

export default BlogCard

BlogCard.propTypes = {
  width: PropTypes.string,
  type: PropTypes.string,
}

BlogCard.defaultProps = {
  width: "100%",
  type:"standard"
}

const MainCard = styled.div`
  font-family:Inter,system-ui,sans-serif;
  text-align: ${props => props.alignContent};
  min-height: ${props => props.minHeight};
  width: 100%;
  box-shadow: 0 8px 32px rgb(155 162 189 / 25%);
  border-radius: 16px;
  text-decoration: none;
  display: flex;
  flex-direction: ${props =>
    props.type === "featured"
      ? "row"
      : "column"};
  
  flex-grow: 1;
  background-color: #fff;
  transition: .1s linear;
  height: 100%;
  position: relative;
  margin: 16px 0;
  top: 0px;
  overflow:hidden;
  border: none;
  &:hover {
    box-shadow: 0 8px 32px rgb(155 162 189 / 45%);
    cursor:pointer;
    top:-2px;
  }
  @media ${device.tablet} {
    flex-direction: column;
  }
  
`

const ImageCover = styled.div`
  width: ${props =>
    props.type === "featured"
      ? "60%"
      : "100%"};
  height: auto;
  max-height: ${props =>
    props.type === "featured"
      ? ""
      : "296px"};
  overflow:hidden;
  img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
  }
  @media ${device.tablet} {
    width:100%;
  }
`


const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props =>
    props.type === "featured"
      ? "40%"
      : "100%"};
  padding: ${props =>
    props.type === "featured"
      ? "48px"
      : "32px"};
  flex-grow: 1;
  height:312px;
  height: ${props =>
    props.type === "featured"
      ? "auto"
      : "312px"};
  @media ${device.tablet} {
    height:auto;
    width:100%;
  }
  @media ${device.mobileL} {
    padding: 24px;
  }
`

const CategoryBlog = styled.h5`
  text-transform: uppercase;
  font-size: ${props =>
    props.type === "featured"
      ? "14px"
      : "11px"};
  font-family:Inter,system-ui,sans-serif;
  font-weight: 600;
  line-height: 1rem;
  margin-bottom:${props =>
    props.type === "featured"
      ? "16px"
      : "8px"};;
  color: #4364af;
  
`

const TitleBlogCard = styled.h3`
  font-size:24px;
  font-family:Inter,system-ui,sans-serif;
  font-weight: 700;
  line-height: 1.33;
  margin-bottom:${props =>
    props.type === "featured"
      ? "24px"
      : "8px"};
  color: #3e444e;
  @media ${device.tablet} {
    font-size:16px;
  }
`

const StyledLink = styled(Link)`
  display:block;
  height:100%;
  width:100%;
  cursor:pointer;
`

const TextCard = styled.p`
  font-size:16px;
  font-family:Inter,system-ui,sans-serif;
  color: #3e444e;
  margin-bottom:16px;
  flex-grow: 1;
  @media ${device.tablet} {
    font-size:14px;
  }
`

const BlogCardInfo = styled.div`
  font-size: .75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #7b85a0;
`

const BlogPostAuthor = styled.span`
  line-height: 1.5;
  margin-top:${props =>
    props.type === "featured"
      ? "16px"
      : "0"};
  font-size:${props =>
    props.type === "featured"
      ? "14px"
      : "12px"};
`

const BlogPostReadingTime = styled.div`
  line-height: 1.5;
  font-size:12px;
`

const CardCta = styled.div`
  font-family:Inter,system-ui,sans-serif;
  font-weight: 600;
  color: #4364af;
  font-size: 16px;
  width:auto;
  margin-top:16px;
`



    

    

    