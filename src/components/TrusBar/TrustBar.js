import React from "react"
import styled from "styled-components"
import { device } from "../../styles/constants"
import {
  XperiencifyImage,
  XperiencifyContent,
} from "../BlockElements/BlockElements"
import { Container } from "../layoutComponents"
const TrustBar = ({ logoImages, margin, headline }) => {
  return (
    <TrustBarWrapper justify="center" align="middle" margin={margin}>
      <Container>
        <XperiencifyContent alignContent="center">
            <TrustBarHeading>{headline}</TrustBarHeading>
        </XperiencifyContent>
        <TrustBarLogos justify="space-between">
            {logoImages?.map((image, index) => {
            return (
                <StyledLogo key={index}>
                    <XperiencifyImage
                        width="106" 
                        height="60"
                        src={
                        // image?.logo?.localFile?.childImageSharp ||
                        image?.logo?.source_url || image
                        }
                        alt={image?.alt}
                    />
                </StyledLogo>
            )
            })}
        </TrustBarLogos>
      </Container>
    </TrustBarWrapper>
  )
}

export default TrustBar

const StyledLogo = styled.div`
    width: auto;
    justify-content: space-between;
    display:flex;
    align-items: center;
    padding: 1rem;
    @media ${device.tablet} {
        width:33%;
        justify-content: center;
        align-items: center;
    }
    @media ${device.mobileL} {
        width:50%;
    }
`

const TrustBarWrapper = styled.div`
  width: 100%;
  padding:96px 2rem;
  text-align: center;
  position:relative;
  margin: ${props => props.margin};
  @media (max-width: 991px) {
    margin: 48px 0 36px;
  }
  @media ${device.tablet} {
    padding: 0 0 96px;
  }
  ::before {
    content: "";
    position: absolute;
    height: 370px;
    width: 100%;
    top: -220px;
    left: 0;
    background-color: #f3f4f7;
    z-index: -1;
    transform: skewY(-12deg);
  }
  ::after {
    content: "";
    position: absolute;
    width: 60%;
    height: 340px;
    background-color: #fff;
    opacity: .4;
    left: -100px;
    top: 164px;
    transform: rotate(24deg);
    z-index: -1;
  }
`

const TrustBarHeading = styled.h5`
  font-family:Inter,system-ui,sans-serif;
  color: #7b85a0;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2rem;
`

const TrustBarLogos = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  flex-wrap: nowrap;
  justify-content: space-between;
  display:flex;
  align-items: center;
  @media ${device.tablet} {
    flex-wrap: wrap;
  }
  @media ${device.mobileL} {
    font-size:15px;
    line-height:20px;
  }
`
