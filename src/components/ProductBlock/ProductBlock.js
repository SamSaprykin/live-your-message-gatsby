import React from "react"
import styled from "styled-components"
import { device } from "../../styles/constants"
import BlogCard from "../BlogCard/BlogCard"
import { Link } from "gatsby"
import {
    XperiencifyImage,
    XperiencifyContent,
  } from "../BlockElements/BlockElements"
const ProductBlock = ({
    stepName,
    stepText,
    stepTitle,
    testimonialAuthorIcon,
    testimonialStepAuthorName,
    testimonialStepAutorPosition,
    testimonialStepText,
    stepVisualType,
    stepVisual,
    stepReverse,
}) => {
  console.log(stepName) 
  return (
    <>
      <ProductBlockWrapper stepReverse={stepReverse}>
        <ProductBlockContent>
          {stepName && (
            <StepLabel>
              {stepName}
            </StepLabel>
          )}
          {stepTitle && (
            <StepTitle>
              {stepTitle}
            </StepTitle>
          )}
          {stepText && (
            <StepText dangerouslySetInnerHTML={{ __html:  stepText }} />
          )}
          <StepCta to="/">
            Learn more
          </StepCta>
          <ProductBlockExtra>
            <ProductTestimonial>
                {testimonialStepText && (
                    <TestimonialQuote>
                       "{testimonialStepText}"
                    </TestimonialQuote>
                )}
                {testimonialStepAuthorName && (
                    <TestimonialPerson>
                        <PersonAvatar>
                            <img src={testimonialAuthorIcon} width="40" height="40" />
                        </PersonAvatar>
                        <PersonInfo>
                            <h5>
                                {testimonialStepAuthorName}
                            </h5>
                            {testimonialStepAutorPosition && (
                                <span>{testimonialStepAutorPosition}</span>
                            )}
                        </PersonInfo>
                    </TestimonialPerson>
                )}
            </ProductTestimonial>
          </ProductBlockExtra>
         
        </ProductBlockContent>
        <ProductBlockVisual>
            <VisualWrapper>
                {stepVisualType === "image" && (
                    <VisualImage src={stepVisual} />

                )}
                {stepVisualType === "video" && (
                    <VideoWrapper>
                        <video autoPlay loop muted playsInline>
                            <source src={stepVisual} type="video/mp4"></source>
                        </video>
                    </VideoWrapper>
                   

                )}
            </VisualWrapper>
        </ProductBlockVisual>
      </ProductBlockWrapper> 
    </>
  )
}

export default ProductBlock

ProductBlock.propTypes = {
 
}

ProductBlock.defaultProps = {

}

const ProductBlockWrapper = styled.div`
    display: flex;
    flex-direction:${({ stepReverse }) => {
        if (stepReverse === true) return "row-reverse"
        if (stepReverse === false) return "row"
    }};
    padding: 6rem 0;  
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    ::before {
        content: "";
        width: 800px;
        height: 4px;
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: .2;
        z-index: -1;
        background-image: url(/dot.svg);
        background-repeat: repeat-x;
        width: 1100px;
        transform: ${({ stepReverse }) => {
            if (stepReverse === true) return "rotate(40deg)"
            if (stepReverse === false) return "rotate(-40deg)"
        }};
        @media (max-width:1000px) {
            transform: ${({ stepReverse }) => {
                if (stepReverse === true) return "rotate(50deg)"
                if (stepReverse === false) return "rotate(-50deg)"
            }};
            width: 1000px;
        }
        @media (max-width:800px) {
            width: 800px;
        }
        @media (max-width:765px) {
            display:none;
        }
    }
    @media (max-width:1000px) {
        padding: 3rem 0;  
    }
    @media (max-width:765px) {
        flex-direction:column;
    }
    :last-of-type {
        ::before {
            display:none;
        }
    }
`

const ProductBlockContent = styled.div`
    width: 45%;
    @media (max-width:765px) {
        width:100%;
        margin-bottom:40px;
    }
`

const ProductBlockVisual = styled.div`
    width: 45%;
    @media (max-width:765px) {
        width:100%;
        max-width: 420px;
        margin: 0 auto;
    }
`

const VisualWrapper = styled.div`
    box-shadow:0 8px 32px rgb(155 162 189 / 50%);
    border-radius: 8px;
    overflow: hidden;
    display:flex;
    align-items:center;
    justify-content:center;
`

const StepLabel = styled.div`
    color: #3e444e;
    font-size:14px;
    margin-bottom:24px;
    padding:4px;
    background-color: #d9e0ef;
    padding: 4px;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1;
    display: inline-block;
    font-family:Inter,system-ui,sans-serif;
    @media (max-width:765px) {
        margin-bottom:16px;
    }
`

const StepTitle = styled.h3`
    margin-bottom:16px;
    font-size:40px;
    line-height:1.25;
    font-family:Inter,system-ui,sans-serif;
    font-weight:700;
    color:#3E444E;
    @media (max-width:765px) {
        font-size:20px;
    }
`

const StepText = styled.p`
    margin-bottom:24px;
    line-height: 1.5;
    font-size:16px;
    font-family:Inter,system-ui,sans-serif; 
    font-weight:500;
    color: #7B85A0;
`



const ProductTestimonial = styled.div`

`
const ProductBlockExtra = styled.div`
    border-top: 1px solid #edf4f8;
    margin-top:48px;
    padding-top:48px;
`

const TestimonialQuote = styled.div`
    margin-bottom:24px;
    font-style: italic;
    color: #7B85A0;
    font-size:16px;
    font-family:Inter,system-ui,sans-serif; 
`
const TestimonialPerson = styled.div`
    display: flex;
    align-items: center;
`

const PersonAvatar = styled.div`
    width: 40px;
    height: 40px;
    background-color: #f3f4f7;
    border-radius: 100%;
    margin-right: 15px;
    overflow: hidden;
    img {
        max-width: 100%;
    }
`

const PersonInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    h5 {
        margin-bottom:0;
        font-family:Inter,system-ui,sans-serif;    
        font-size: 12px;
        color: #3e444e;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 4px;
    }
    span {
        margin-bottom:0;
        font-family:Inter,system-ui,sans-serif;    
        font-size: 11px;
        color: #7B85A0;
        font-weight: 400;
        line-height:1;
    }
`

const StepCta = styled(Link)`
    color: #4364af;
    font-family:Inter,system-ui,sans-serif; 
    font-weight:700;
    ::after {
        content: "→";
        margin-left: 2px;
    }
`

const VisualImage = styled.img`
    margin-bottom:0;
`

const VideoWrapper = styled.div`
    max-width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    video {
        max-width: 100%;
    }
`










    

    

    