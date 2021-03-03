import React from "react"
import styled from "styled-components"
import { device, colors } from "../../styles/constants"
import BlogCard from "../BlogCard/BlogCard"


const BlogListing = ({
  data
}) => {
  return (
    <>
      <WrapperCards>
        {
          data.map((cardItem,index) => {
              return (
                <PostItem key={index}>
                  <BlogCard cardData={cardItem.node} />
                </PostItem>
              )
          })
        }
      </WrapperCards> 
    </>
  )
}

export default BlogListing

BlogListing.propTypes = {
 
}

BlogListing.defaultProps = {

}

const WrapperCards = styled.div`
   box-sizing: inherit;
   margin-left: -16px;
   margin-right: -16px;
   margin-bottom: 60px;
   display: flex;
   flex-wrap: wrap;
   justify-content:space-between;
   @media ${device.tablet} {
    margin-bottom: 32px;
   }
`
const PostItem = styled.div`
  padding:16px;
  box-sizing: inherit;
  width:50%;
  @media ${device.tablet} {
    width:100%;
  }
`







    

    

    