import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { device } from "../../styles/constants"
/* Xperiencify Button */

/*
 Button types:
   - primary
   - secondary
*/


const XperiencifyButton = ({
    type, 
    children,
    toRoute, 
    disabled,
    active,
    sizeType,
    htmlType,
    ...otherProps
 }) => {
   
  

  return (
    <>
      <Link to={toRoute}>
        <BignetworkButtonStyled type={type} disabled={disabled} sizeType={sizeType} htmlType={htmlType} {...otherProps}>
          { children }
        </BignetworkButtonStyled>
      </Link>
    </>
  )
}

XperiencifyButton.propTypes = {
    type: PropTypes.string, 
}
  
XperiencifyButton.defaultProps = {
    type: "primary", 
}

const BignetworkButtonStyled = styled.button`
  font-family:Inter,system-ui,sans-serif;
  font-weight: 500;
  display: block;
  border-radius: 4px;
  font-size: 16px !important;
  letter-spacing: 0;
  line-height: 1.1 !important;
  text-align: center;
  position: relative;
  z-index: 10;
  width: 100%;
  display:block;
  max-width: ${({ sizeType }) => {
    if (sizeType === "big") return "190px"
    if (sizeType === "small") return "124px"
  }};
  padding: ${({ type }) => {
    if (type === "primary") return "20px"
    if (type === "secondary") return "20px 24px"
    if (type === "tertiary" ) return "20px"
  }};
  
  background-color: ${({ type }) => {
    if (type === "primary") return "transparent"
    if (type === "secondary") return "white"
    if (type === "tertiary" ) return "#4364af"
  }};
  border: ${({ type }) => {
    if (type === "primary") return "1px solid white"
    if (type === "secondary") return "none"
    if (type === "tertiary" ) return "none"
  }};
  color: ${({ type }) => {
    if (type === "primary") return "#FFFFFF"
    if (type === "secondary") return "#3e444e"
    if (type === "tertiary" ) return "#FFFFFF"
  }};
  transition: .1s linear;
  text-shadow: none !important;
  cursor: pointer;
  :focus {
    outline: none !important;
    
  }
  
  :hover {
    transform: ${({ type }) => {
      if (type === "primary") return ""
      if (type === "secondary") return ""
      if (type === "tertiary" ) return "translate(0,-2px)"
    }};
    opacity: ${({ type }) => {
      if (type === "primary") return ""
      if (type === "secondary") return ".8"
      if (type === "tertiary" ) return ""
    }};
  }
  
  @media ${device.laptop} {
    max-width: ${({ subType }) => {
      if (subType === "big") return "154px"
      if (subType === "small") return "108px"
    }};
    padding: ${({ type }) => {
      if (type === "primary") return "12px 18px 12px"
      if (type === "secondary") return "12px 18px 12px"
      if (type === "tertiary" ) return "12px 18px 12px"
    }};
  } 
  @media ${device.mobileL} {
    max-width: ${({ subType }) => {
      if (subType === "big") return "154px"
      if (subType === "small") return "124px"
    }};
    padding: ${({ type }) => {
      if (type === "primary") return "12px 16px 12px"
      if (type === "secondary") return "12px 16px 12px"
      if (type === "tertiary" ) return "12px 16px 12px"
    }};
  } 
`

export default XperiencifyButton
