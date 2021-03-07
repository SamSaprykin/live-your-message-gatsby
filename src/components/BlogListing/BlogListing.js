import React from "react"
import styled from "styled-components"
import { device } from "../../styles/constants"
import BlogCard from "../BlogCard/BlogCard"
import BannerAd from "../BannerAd/BannerAd"

const BlogListing = ({
  data,
  bannerAdData
}) => {
  
  return (
    <>
      <WrapperCards>
        {
          data.map((cardItem,index) => {
              return (
                <>
                  {index === 4 && (
                    <BannerAd
                      title={bannerAdData.title}
                      text={bannerAdData.text}
                      cta={bannerAdData.cta}
                      trial={bannerAdData.trial}
                      imageSrc={bannerAdData.imageSrc}
                    />
                  )}
                  {cardItem.node && (
                    <PostItem key={index}>
                      <BlogCard cardData={cardItem.node} />
                    </PostItem>
                  )}
                </>
                
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







    

    

    