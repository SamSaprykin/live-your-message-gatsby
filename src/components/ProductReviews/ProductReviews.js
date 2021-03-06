import React from "react"
import styled from "styled-components"
import { device } from "../../styles/constants"
import { Container, MainWrapper } from "../layoutComponents"
import {
    XperiencifyImage,
} from "../BlockElements/BlockElements"
const ProductReviews = ({
  reviewsData,
  titleReview,
  descriptionReview
}) => {
  return (
    <>
      <ProductReviewsWrapper>
        <Container>
           <ProductBlock>
                <VisualProductReview>
                    <RatingsWrapper>
                        {
                            reviewsData.map((review,index) => {
                                return (
                                    <ReviewItem key={index}>
                                        <XperiencifyImage
                                            width="180" 
                                            height="32"
                                            src={review.logo}
                                        />
                                        {review.ratingScore && (
                                            <ReviewRating>
                                                <MainNumber>{review.ratingScore}</MainNumber>
                                                <OutOfNumber>/5</OutOfNumber>
                                            </ReviewRating>
                                        )}
                                        {review.ratingStar && (
                                            <Stars>
                                               {Array(review.ratingStar).fill(<span>&#9733;</span>)} 
                                            </Stars>
                                            
                                        )}
                                    </ReviewItem>
                                )
                            })
                        }
                    </RatingsWrapper>
                </VisualProductReview>
                <ContentProductReview>
                    {titleReview && (
                        <ProductReviewTitle>
                            {titleReview}
                        </ProductReviewTitle>
                    )}
                    {descriptionReview && (
                        <ProductText>
                            {descriptionReview}
                        </ProductText>
                    )}
                </ContentProductReview>
           </ProductBlock>
        </Container>
      </ProductReviewsWrapper> 
    </>
  )
}

export default ProductReviews

ProductReviews.propTypes = {
 
}

ProductReviews.defaultProps = {

}

const ProductReviewsWrapper= styled.div`
    background-image: linear-gradient(180deg, #f8f9fb 0, rgba(255,255,255,0) 100%);
`

const ProductBlock = styled.div`
    padding: 6rem 0;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    display:flex;
    @media (max-width:765px) {
        padding: 3rem 0;
    }
`

const VisualProductReview = styled.div`
    width: 45%;
    @media (max-width:765px) {
        width:100%;
        margin-bottom:40px;
    }
`

const RatingsWrapper = styled.div`
    margin:80px 0;
    display: flex;
    flex-wrap: wrap;
    @media ${device.mobileL} {
        margin:12px 0;
    }
`

const ContentProductReview = styled.div`
    width: 45%;
    @media ${device.mobileL} {
       width:100%;
    }
`

const ProductReviewTitle = styled.h3`
    margin-bottom:16px;
    font-size:39px;
    line-height:1.25;
    font-family:Inter,system-ui,sans-serif;
    font-weight:700;
    color:#3E444E;
    @media (max-width:765px) {
        font-size:20px;
    }
`

const ProductText = styled.p`
    margin-bottom:24px;
    line-height: 1.5;
    font-size:20px;
    font-family:Inter,system-ui,sans-serif; 
    font-weight:400;
    color: #7B85A0;
`

const ReviewItem = styled.div`
    margin-bottom:48px;
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media ${device.mobileL} {
        margin-bottom:24px;
    }
`

const ReviewRating = styled.div`
    margin:26px 0 8px;
`

const MainNumber = styled.span`
    color: #3e444e;
    font-family:Inter,system-ui,sans-serif;
    font-weight: 700;
    font-size:32px;
`

const OutOfNumber = styled.span`
    color: #a5acb7;
    font-family:Inter,system-ui,sans-serif;
    font-weight: 700;
`
const Stars = styled.div`
    display:flex;
    span {
        color:orange;
        padding:0 2px;
    }
`










    

    

    