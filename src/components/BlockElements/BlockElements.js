import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { device } from "../../styles/constants"
/*
  Xperiencify Content
*/

export const XperiencifyContent = ({
  children,
  alignContent,
  width,
  marginBottom,
  ...otherProps
}) => {
  return (
    <MainDiv alignContent={alignContent} width={width} {...otherProps}>
      {children}
    </MainDiv>
  )
}

XperiencifyContent.propTypes = {
  alignContent: PropTypes.string, // 'left', 'center', 'right', 'justify'
  width: PropTypes.string,
}

XperiencifyContent.defaultProps = {
  alignContent: "left",
  width: "100%",
}

const MainDiv = styled.div`
  font-family: DM Sans;
  text-align: ${props => props.alignContent};
  width: ${props => props.width};
  max-width: 1070px;
  margin: 0 auto;
`

/*
  BigNetworkTitle
*/

export const XperiencifyTitle = ({
  children,
  fontSize,
  color,
  alignContent,
  marginBottom,
  className,
  ...otherProps
}) => {
  return (
    <TitleH2
      fontSize={fontSize}
      color={color}
      alignContent={alignContent}
      marginBottom={marginBottom}
      className={className}
      {...otherProps}
    >
      {children}
    </TitleH2>
  )
}

XperiencifyTitle.propTypes = {
  fontSize: PropTypes.string, // 'big', 'normal', 'small', '49px', '5em'
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  alignContent: PropTypes.string,
}

XperiencifyTitle.defaultProps = {
  fontSize: "big",
  color: "#090909",
  marginBottom: "24px",
  alignContent: "center",
}

const TitleH2 = styled.h2`
  font-family: DM Sans;
  font-weight: 700;
  text-align: ${props => props.alignContent};
  font-size: ${props =>
    props.fontSize === "big"
      ? "48px"
      : props.fontSize === "normal"
      ? "32px"
      : props.fontSize === "small"
      ? "24px"
      : props.fontSize};
  line-height: ${props =>
    props.fontSize === "big"
      ? "57.6px"
      : props.fontSize === "normal"
      ? "32px"
      : props.fontSize === "small"
      ? "28px"
      : props.fontSize};
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
  @media ${device.laptop} {
    font-size: ${props =>
      props.fontSize === "big"
        ? "32px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "24px"
        : props.fontSize};
    line-height: ${props =>
      props.fontSize === "big"
        ? "38.4px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "28px"
        : props.fontSize};
  }
  @media ${device.mobileL} {
    font-size: ${props =>
      props.fontSize === "big"
        ? "30px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "24px"
        : props.fontSize};
    line-height: ${props =>
      props.fontSize === "big"
        ? "36px"
        : props.fontSize === "normal"
        ? "32px"
        : props.fontSize === "small"
        ? "28px"
        : props.fontSize};
  }
  text-transform:uppercase;
  letter-spacing:2px;

`

/*
  BigNetwork Subhead
*/

export const XperiencifySubhead = ({
  children,
  fontSize,
  color,
  marginBottom,
  className,
  ...otherProps
}) => {
  return (
    <Subhead
      fontSize={fontSize}
      color={color}
      marginBottom={marginBottom}
      className={className}
      {...otherProps}
    >
      {children}
    </Subhead>
  )
}

XperiencifySubhead.propTypes = {
  fontSize: PropTypes.string, // 'big', 'normal', 'small', '49px', '5em'
  color: PropTypes.string,
  marginBottom: PropTypes.string,
}

XperiencifySubhead.defaultProps = {
  fontSize: "normal",
  color: "#222028",
  marginBottom: "32px",
}

const Subhead = styled.h5`
  font-family: DM Sans;
  display: inline-block;
  font-weight:400;
  font-size: ${props =>
    props.fontSize === "big"
      ? "24px"
      : props.fontSize === "normal"
      ? "16px"
      : props.fontSize === "small"
      ? "12px"
      : props.fontSize};
  line-height: 150%;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
`



/**
 * Using Gatsby-image to output images.
 * If src returns undefined || null || '' return null
 * If src is a gatsby-image render Img
 * If src is statically
 * Gatsby-image does not do error handling.
 * @param src - fluid object returned by graphQL query
 * @param alt - contentful image asset 'title' field
 */
// @TODO: Properly add alt text

export const XperiencifyImage = ({ src, alt, className, ...otherProps }) => {
  
  if (src?.fluid || src?.childImageSharp?.fluid) {
    return (
      <Img
        fluid={src.fluid || src.childImageSharp.fluid}
        className={className}
        alt={alt ? alt : "Product Illustration"}
      />
    )
  } else if (src?.resize || src) {
    return (
      <StyledImg
        width={otherProps.width}
        height={otherProps.height}
        src={src?.resize?.src || src}
        className={className}
        alt={alt ? alt : "Product Illustration"}
      />
    )
  } else {
    return null
  }
}


const StyledImg = styled.img`
    margin-bottom:0;
    object-fit:contain;
`


