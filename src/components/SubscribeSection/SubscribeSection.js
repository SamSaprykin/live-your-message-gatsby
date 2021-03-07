import React, {useState} from "react"
import { navigate } from 'gatsby'
import axios from "axios"
import styled from "styled-components"
import { device } from "../../styles/constants"

const SubscribeSection = ({
  subhead,
  title,
  text,
  ctaText,
  ctaInfo,
  type,
  ...otherProps
}) => {
  return (
    <SubscribeWrapper type={type}>
        <FormInfo>
          {subhead && (
            <SubscribeSubHead>
              {subhead}
            </SubscribeSubHead>
          )}
          {title && (
            <SubscribeTitle type={type}>
              {title}
            </SubscribeTitle>
          )}
          {text && (
            <SubscribeFormText dangerouslySetInnerHTML={{ __html:  text }} />
          )}
         
        </FormInfo>
        
        <SubscribeForm 
          method="post"
          action="https://app.campaignrefinery.com/subscribe/form/id/ed3918a3-1971-440d-92d8-c4883ae72b19"
          id="1136__cr_form"
          type={type}
        >
          <InputContainer>
            <StyledInput 
              placeholder="Enter your email" 
              type="email" 
              name="email"
              id="email" 
            />
            
            {!ctaInfo &&   (
              <button type="submit" >
                {ctaText}
              </button>
            )}
          </InputContainer>
          {ctaInfo && (
            <ButtonCta type="submit" >
              <h5>{ctaText}</h5>
              <span>{ctaInfo}</span>
            </ButtonCta>
          )}
        </SubscribeForm>
    </SubscribeWrapper>
    
    
  )
}
  




export default SubscribeSection




const SubscribeWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:80px 0 120px;
    border-top: ${({ type }) => {
      if (type === "small") return "1px solid #f2f3f5"
      if (type === "big") return ""
    }};
    margin-bottom: ${({ type }) => {
      if (type === "small") return "64px"
      if (type === "big") return ""
    }};
    @media ${device.tablet} {
      padding:32px 0;
    }
    @media ${device.mobileL} {
      margin-bottom: ${({ type }) => {
        if (type === "small") return "16px"
        if (type === "big") return ""
      }};
    }
    
`

const FormInfo = styled.div`
    width:100%;
    max-width:680px;
    margin-bottom:32px;
    text-align:center;
    font-family:Inter,system-ui,sans-serif;
` 

const SubscribeSubHead = styled.h5`
    color: #4364af;
    margin-bottom:16px;
    font-size:16px;
    font-family:Inter,system-ui,sans-serif;
    font-weight:600;
`

const SubscribeTitle = styled.h2`
    font-size:48px;
    font-size: ${({ type }) => {
      if (type === "small") return "48px"
      if (type === "big") return "64px"
    }};
    line-height: 64px;
    margin-bottom:24px;
    font-weight: 700;
    color: #3e444e;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.tablet} {
      font-size:24px;
      line-height: 32px;
    }
`
const SubscribeFormText = styled.p`
    font-size:23px;
    line-height:32px;
    margin-bottom:16px;
    color: #7b85a0;
    font-weight:400;
    font-family:Inter,system-ui,sans-serif;
    @media ${device.tablet} {
      font-size:16px;
      line-height:24px;
    }
    @media ${device.mobileL} {
      font-size:15px;
      line-height:20px;
    }
`





const SubscribeForm = styled.form`
    margin:0 auto;
    width:100%;
    max-width: ${({ type }) => {
      if (type === "small") return "500px"
      if (type === "big") return "600px"
    }};
    display:flex;
    flex-direction:column;
    position:relative;
    
    @media ${device.tablet} {
      max-width:500px;
    }
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
const ButtonCta = styled.button`
  height:auto;
  background: rgb(67, 100, 175);
  color: rgb(255, 255, 255);
  border: 0px solid rgb(67, 100, 175);
  width: 100%;
  position:relative;
  right:0px;
  outline:none;
  cursor:pointer;
  padding:13px 20px;
  border-radius: 0px 3px 3px 0px !important;
  margin-top:24px;
  :hover {
    background: rgb(74, 111, 193);
  }
  h5 {
    margin-bottom:0;
    font-size:20px;
    line-height:24px;
    color:white;
    font-family:Inter,system-ui,sans-serif;
    font-weight:500;
  }
  span {
    margin-bottom:0;
    font-size:11px;
    color:white;
    font-family:Inter,system-ui,sans-serif;
    font-weight:300;
  }
`


const StyledInput = styled.input`
    width:100%;
    background-color:#1A6AFF;
    color: #2F2F2F !important;
    background: #FFF;
    font-weight: 400 !important;
    border: 1px solid #DBDBDB !important;
    border-radius: 3px 0px 0px 3px !important;
    outline:none;
    padding: 12px 0px 10px 10px !important;
    font-size:17px;
    line-height:36px;
    height:46px;
    font-family:Inter,system-ui,sans-serif;
    color:#E8ECF3;
    font-weight:400;
    padding-bottom:4px;
    box-sizing:border-box;
    @media ${device.mobileL} {
     
    }
    
`



const FormTextError = styled.div`
  height:24px;
  position:relative;
  overflow:hidden;
  margin-top:8px;
  span {
      color:#FA4E4E;
      font-family:Inter,system-ui,sans-serif;
      bottom: ${({ error }) => {
        if (error === "") return "24px"
        if (error !== "") return "4px"
      }};
      opacity: ${({ error }) => {
        if (error === "") return "0"
        if (error !== "") return "1"
      }};
      display:block;
      position:absolute;
      transition: all 1s ease-in-out;
      font-size:14px;
      width:100%;
  }
`

const AgreeText = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-start;
  max-width:500px;
  align-items:center;
  p {
    font-size:13px;
    font-family: sans-serif;
    margin-bottom:0;
    line-height:13px;
  }
  input {
    margin-right:6px;
  }
`