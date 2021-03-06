import React from "react"
import styled from "styled-components"
import { device } from "../../styles/constants"
import {
  XperiencifyImage,
} from "../BlockElements/BlockElements"
import XperiencifyButton from "../XperiencifyButton/XperiencifyButton"

const BannerBlogAd = () => {
    
  return (
    <BannerWrapper >
        <BannerContent>
            <TitleBanner>
                Get a free guide to CRUSH your remote video sales calls
            </TitleBanner>
          
            <SubscribeForm 
                method="post"
            >
                <InputContainer>
                    <StyledInput 
                        placeholder="email@website.com" 
                        type="email" 
                        id="email" 
                    />
            </InputContainer>
                <AgreeText>
                    <input type="checkbox" />
                    <span>I agree to receive communications from Close. I can unsubscribe at any time.</span>
                </AgreeText>
            </SubscribeForm>
            <XperiencifyButton type="primary" toRoute="/" sizeType="big">
                Download Now →
            </XperiencifyButton>
        </BannerContent>
        <BannerImage>
            <XperiencifyImage
                src="/banner-image.png"
                alt="banner image"
            />
        </BannerImage>
    </BannerWrapper>
  )
}

export default BannerBlogAd

const BannerWrapper = styled.div`
    display: flex;
    width:100%;
    align-items: center;
    border-radius: 16px;
    background: url("/cover-banner.webp");
    background-size: cover !important;
    background-position: center center !important;
    position: relative;
    overflow: hidden;
    margin:32px 0;
    @media ${device.tablet} {
        flex-direction:column;
        padding:32px 32px 0;
    }
`

const BannerContent = styled.div`
    display:flex;
    flex-direction:column;
    width: 50%;
    padding: 32px;
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
    height: auto;
    margin:24px 0;
    img {
        max-width:300px;
        height:auto;
    }
`

const TitleBanner = styled.h4`
    margin-bottom: 16px;
    padding-bottom: 25px;
    font-weight: 600;
    font-size:28px;
    line-height:32px;
    color: white;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.tablet} {
        font-size:24px;
        line-height:32px;
        margin-bottom:8px;
    }
`



const SubscribeForm = styled.form`
    margin:0 auto;
    width:100%;
    max-width: 500px;
    display:flex;
    flex-direction:column;
    position:relative;
`





const InputContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    height:auto;
    position:relative;
    height:46px;
    
    button {
        height:46px;
        font-family: sans-serif;
        line-height: 1.3em;
        letter-spacing:0.1px;
        font-size:16px;
        background: rgb(67, 100, 175);
        color: rgb(255, 255, 255);
        border: 0px solid rgb(67, 100, 175);
        width: 100%;
        max-width:101px;
        position:relative;
        right:0px;
        outline:none;
        cursor:pointer;
        padding-left: 10px !important;
        padding-right: 10px !important;
        padding-top: 8px !important;
        padding-bottom: 8px !important;
        border-radius: 0px 3px 3px 0px !important;
    }
    @media ${device.mobileL} {
        height:70px;
    }
`


const StyledInput = styled.input`
    width:100%;
    color: #2F2F2F !important;
    background: #FEF3F0 !important;
    font-weight: 400 !important;
    border: 1px solid #DBDBDB !important;
    border-radius: 3px 0px 0px 3px !important;
    outline:none;
    padding: 12px 0px 10px 10px !important;
    font-size: 15px !important;
    line-height:36px;
    height:46px;
    font-family:Inter,system-ui,sans-serif;
    color:#E8ECF3;
    font-weight:400;
    padding-bottom:4px;
    box-sizing:border-box;

    
`
const AgreeText = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-start;
  max-width:500px;
  align-items:center;
  margin:12px 0 32px;
  span {
    font-size:13px;
    font-family:Inter,system-ui,sans-serif;
    margin-bottom:0;
    line-height:13px;
    color: #DFDBDB;
  }
  input {
    margin-right:6px;
  }
`