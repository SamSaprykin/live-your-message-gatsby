import React, { useState } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { device, colors } from "../../styles/constants"
import Image from "gatsby-image"
import { Link } from "gatsby"
import {
    XperiencifyImage,
} from "../BlockElements/BlockElements"


const BlogPostBody = ({
  data,
  ...otherProps
}) => {
    
  return (
    <BodyWrapper >
        <div dangerouslySetInnerHTML={{ __html:  data }} />
    </BodyWrapper>
  )
}

export default BlogPostBody

BlogPostBody.propTypes = {

}

BlogPostBody.defaultProps = {

}

const BodyWrapper = styled.div`
    max-width: 680px;
    width:100%;
    position: relative;
    margin-top:32px;
    font-family:Inter,system-ui,sans-serif;
    p {
        margin-bottom:24px;
        color:#3e444e;
    }
    h3 {
        color: #3e444e;
    }
    .gatsby-resp-image-image {
        border-radius: 8px !important;
    }
    source {
        border-radius: 8px !important;
    }
    .gatsby-resp-image-background-image {
        border-radius: 8px !important;
    }
    .gatsby-resp-image-wrapper {
        border-radius: 8px !important;
        margin:48px 0;
    }
`




    

    