import React from "react"
import styled from "styled-components"
import { device } from "../../styles/constants"
import {
  XperiencifyImage,
} from "../BlockElements/BlockElements"
import XperiencifyButton from "../XperiencifyButton/XperiencifyButton"

const BannerAd = ({ imageSrc, title, text, cta, trial }) => {
    
  return (
    <BannerWrapper >
        <BannerContent>
          {title && (
            <TitleBanner>
              {title}
            </TitleBanner>
          )}
          {text && (
              <TextBanner dangerouslySetInnerHTML={{ __html:  text }} />
          )}
          {cta && (
              <XperiencifyButton type="tertiary" toRoute="/" sizeType="big">
                  {cta}
              </XperiencifyButton>
          )}
          {trial && (
               <TrialText>
                   {trial}
               </TrialText>
          )}
        </BannerContent>
        <BannerImage>
            <XperiencifyImage
                src={imageSrc?.localFile?.childImageSharp || imageSrc?.source_url || imageSrc}
                alt="hero image"
            />
        </BannerImage>
    </BannerWrapper>
  )
}

export default BannerAd

const BannerWrapper = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    padding: 2.5rem 0;
    border-radius: 16px;
    background-color: #d9e0ef;
    margin: 32px 20px 24px;
    position: relative;
    overflow: hidden;
    ::after {
        content: "";
        position: absolute;
        height: 160px;
        width: 100%;
        background-color: #bccae7;
        bottom: -80px;
        left: 0;
        transform: skewY(-8deg);
    }
    @media ${device.tablet} {
        flex-direction:column;
        padding:32px 32px 0;
    }
`

const BannerContent = styled.div`
    display:flex;
    flex-direction:column;
    width: 50%;
    padding: 0 48px 0 64px;
    text-align: left;
    margin-bottom: 0;
    font-family:Inter,system-ui,sans-serif;
    color: #7b85a0;
    @media ${device.tablet} {
        width:100%;
        padding:0;
        text-align:center;
        align-items:center;
        margin-bottom:24px;
    }
`

const BannerImage = styled.div`
    width: 50%;
    margin-left: 1rem;
    height: 496px;
    @media ${device.tablet} {
        width: 100%;
        height:auto;
        margin-left:0;
    }
    img {
        position: absolute;
        left: 51%;
        height: 496px;
        width: 842px;
        border-radius: 8px;
        z-index:1;
        margin-bottom:-24px;
        @media ${device.tablet} {
            position:relative;
            border-radius: 8px 8px 0 0;
            box-shadow: 0 16px 72px #9ba2bd;
            left:0;
            height:auto;
            width:100%;
        }
    }
    
`

const TitleBanner = styled.h4`
    margin-bottom: 16px;
    font-weight: 600;
    font-size:48px;
    line-height:56px;
    color: #3e444e;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.tablet} {
        font-size:24px;
        line-height:32px;
        margin-bottom:8px;
    }
`

const TextBanner = styled.p`
    margin-bottom: 24px;
    font-weight: 400;
    font-size:19px;
    line-height:32px;
    color: #3e444e;
    font-family:Inter,system-ui,sans-serif; 
    @media ${device.tablet} {
        font-size:13px;
        line-height:16px;
        margin-bottom:16px;
    }
`

const TrialText = styled.span`
    margin-top:24px;
    display:block;
    font-family:Inter,system-ui,sans-serif;
    font-size:12px;
    color: #3e444e;
    @media ${device.tablet} {
        font-size:10px;
        margin-top:8px;
    }
`
