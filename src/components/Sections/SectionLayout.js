import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const SectionLayout = ({ children, alignContent, bgImg }) => {
  return (
    <Layout alignContent={alignContent} bgImg={bgImg}>
      <InnerContainer>{children}</InnerContainer>
    </Layout>
  )
}
export default SectionLayout

SectionLayout.propTypes = {
  alignContent: PropTypes.string, // 'left', 'center', 'right', 'justify'
}

SectionLayout.defaultProps = {
  alignContent: "center",
}

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0px auto;
  position: relative;
  padding: 32px 0 25px 0;
  @media (max-width: 991px) {
    padding: 30px 0 13px 0;
  }
  @media (max-width: 576px) {
    padding: 16px 0 8px 0;
  }
`

const Layout = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 96px;
  text-align: ${props => props.alignContent};
`
